import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  onSnapshot,
  arrayUnion,
  increment,
} from "firebase/firestore";
import { db } from "./firebase";
import { buildLevelsFromPlacement } from "../utils/curriculum";

export async function createUserDocIfNotExists(user) {
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      profile: {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        createdAt: serverTimestamp(),
        lastLoginAt: serverTimestamp(),
      },
      progress: {
        placementDone: false,
        currentLevel: "A1",
        totalPoints: 0,
        streakDays: 0,
        lastActivityAt: serverTimestamp(),
        levels: {
          A1: {
            status: "in_progress",
            unlockedModules: ["identity_contact"],
            completedModules: [],
            score: 0,
          },
          A2: { status: "locked" },
          B1: { status: "locked" },
          B2: { status: "locked" },
          C1: { status: "locked" },
          C2: { status: "locked" },
        },
      },
      certification: {
        c2Passed: false,
        certificateId: null,
        certificateIssuedAt: null,
      },
      settings: {
        nativeLanguage: "es",
        dailyGoalMinutes: 15,
        notificationsEnabled: true,
      },
    });
    console.log("Documento de usuario creado en Firestore ✅");
  } else {
    console.log("El usuario ya existe en Firestore, no se crea de nuevo.");
  }
}

export function subscribeToUserProgress(uid, callback) {
  const userRef = doc(db, "users", uid);
  return onSnapshot(userRef, (snap) => {
    if (snap.exists()) {
      callback(snap.data());
    }
  });
}

export async function completeModule(uid, level, moduleId, nextModuleId, points = 10) {
  const userRef = doc(db, "users", uid);
  const updates = {
    [`progress.levels.${level}.completedModules`]: arrayUnion(moduleId),
    "progress.totalPoints": increment(points),
  };
  if (nextModuleId) {
    updates[`progress.levels.${level}.unlockedModules`] = arrayUnion(nextModuleId);
  }
  await updateDoc(userRef, updates);
}

export async function savePlacementResult(uid, level) {
  const userRef = doc(db, "users", uid);
  await updateDoc(userRef, {
    "progress.currentLevel": level,
    "progress.levels": buildLevelsFromPlacement(level),
    "progress.placementDone": true,
  });
}