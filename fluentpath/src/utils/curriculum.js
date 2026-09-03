export const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

export const MODULES_BY_LEVEL = {
  A1: [
    { id: "identity_contact", title: "Identidad y Contacto", scenario: "Formularios y llamadas", icon: "🪪" },
    { id: "airport_travel", title: "Aeropuerto y Viajes", scenario: "Check-in y direcciones", icon: "✈️" },
    { id: "restaurant", title: "Café y Restaurante", scenario: "Pedir comida y la cuenta", icon: "☕" },
    { id: "numbers_money", title: "Números y Dinero", scenario: "Precios y horarios", icon: "💶" },
    { id: "first_day_work", title: "Primer Día de Trabajo", scenario: "Presentarte al equipo", icon: "💼" },
    { id: "basic_email", title: "Email Básico", scenario: "Responder un correo simple", icon: "✉️" },
    { id: "small_talk", title: "Small Talk", scenario: "Romper el hielo", icon: "🌤️" },
    { id: "emergencies", title: "Emergencias Cotidianas", scenario: "Pedir ayuda", icon: "🆘" },
  ],
  A2: [
    { id: "daily_routine", title: "Rutina y Planes", scenario: "Hablar de tu día a día", icon: "🕗" },
    { id: "shopping_returns", title: "Compras y Devoluciones", scenario: "Tallas, precios, cambios", icon: "🛍️" },
    { id: "public_transport", title: "Transporte Público", scenario: "Comprar boletos y direcciones", icon: "🚌" },
    { id: "doctor_appointment", title: "Cita Médica", scenario: "Describir síntomas", icon: "🩺" },
    { id: "schedule_meeting", title: "Agendar una Reunión", scenario: "Por teléfono o email", icon: "📅" },
    { id: "describe_job", title: "Describir tu Trabajo", scenario: "Responsabilidades diarias", icon: "🧑‍💻" },
    { id: "weekend_plans", title: "Planes de Fin de Semana", scenario: "Small talk extendido", icon: "🌦️" },
    { id: "complaints", title: "Quejas y Reclamos", scenario: "Reclamar un producto o servicio", icon: "📦" },
  ],
  B1: [
    { id: "past_experience", title: "Contar una Experiencia", scenario: "Narrar algo que pasó", icon: "🗺️" },
    { id: "meeting_opinion", title: "Opinar en una Reunión", scenario: "Acordar y discrepar", icon: "🗣️" },
    { id: "tech_support_call", title: "Soporte Técnico", scenario: "Explicar un problema", icon: "💻" },
    { id: "making_reservation", title: "Hacer una Reserva", scenario: "Hotel o restaurante", icon: "🏨" },
    { id: "job_interview_basic", title: "Entrevista de Trabajo", scenario: "Preguntas comunes", icon: "🎯" },
    { id: "simple_feedback", title: "Dar Feedback Simple", scenario: "Comentarios constructivos", icon: "📝" },
    { id: "business_trip", title: "Viaje de Negocios", scenario: "Planear un itinerario", icon: "🧳" },
    { id: "clear_misunderstanding", title: "Resolver un Malentendido", scenario: "Aclarar una confusión", icon: "🔄" },
  ],
  B2: [
    { id: "corporate_presentation", title: "Presentaciones Corporativas", scenario: "Estructurar una charla", icon: "📊" },
    { id: "negotiate_contract", title: "Negociar un Contrato", scenario: "Términos y condiciones", icon: "🤝" },
    { id: "followup_meeting", title: "Reunión de Seguimiento", scenario: "Status y próximos pasos", icon: "📋" },
    { id: "constructive_feedback", title: "Feedback Constructivo", scenario: "Conversaciones difíciles", icon: "💬" },
    { id: "formal_escalation_email", title: "Email de Escalamiento", scenario: "Firme pero cordial", icon: "📧" },
    { id: "debate_decision", title: "Debatir una Decisión", scenario: "Pros y contras", icon: "⚖️" },
    { id: "job_interview_advanced", title: "Entrevista Avanzada", scenario: "Preguntas de comportamiento", icon: "🎤" },
    { id: "angry_customer", title: "Cliente Molesto", scenario: "Desescalar una queja", icon: "😤" },
  ],
  C1: [
    { id: "lead_difficult_meeting", title: "Liderar una Reunión Difícil", scenario: "Manejar conflictos", icon: "🧭" },
    { id: "persuasion_storytelling", title: "Persuasión y Storytelling", scenario: "Influir con una narrativa", icon: "🎭" },
    { id: "networking_smalltalk", title: "Networking Avanzado", scenario: "Eventos profesionales", icon: "🥂" },
    { id: "nuance_sarcasm", title: "Matices y Registro", scenario: "Tono e ironía", icon: "🎯" },
    { id: "complex_negotiation", title: "Negociación Compleja", scenario: "Varias partes involucradas", icon: "🧩" },
    { id: "executive_results", title: "Presentar a Ejecutivos", scenario: "Comunicación de alto nivel", icon: "📈" },
    { id: "mentoring_feedback", title: "Mentoría y Feedback", scenario: "Conversaciones de desarrollo", icon: "🌱" },
    { id: "crisis_communication", title: "Comunicación de Crisis", scenario: "Manejar una situación delicada", icon: "🚨" },
  ],
  C2: [
    { id: "exam_speaking", title: "Simulacro de Speaking", scenario: "Entrevista oral tipo examen", icon: "🎙️" },
    { id: "exam_listening", title: "Simulacro de Listening", scenario: "Acentos nativos variados", icon: "🎧" },
    { id: "exam_writing", title: "Simulacro de Writing", scenario: "Reporte o ensayo formal", icon: "🖋️" },
    { id: "exam_use_of_english", title: "Use of English", scenario: "Idioms y phrasal verbs", icon: "🧠" },
    { id: "final_mock_exam", title: "Examen Final Integrado", scenario: "Las 4 destrezas juntas", icon: "🏆" },
  ],
};

export function buildLevelsFromPlacement(targetLevel) {
  const targetIndex = LEVELS.indexOf(targetLevel);
  const levels = {};
  LEVELS.forEach((level, index) => {
    const moduleIds = MODULES_BY_LEVEL[level].map((m) => m.id);
    if (index < targetIndex) {
      levels[level] = {
        status: "completed",
        unlockedModules: moduleIds,
        completedModules: moduleIds,
        score: 100,
      };
    } else if (index === targetIndex) {
      levels[level] = {
        status: "in_progress",
        unlockedModules: [moduleIds[0]],
        completedModules: [],
        score: 0,
      };
    } else {
      levels[level] = { status: "locked" };
    }
  });
  return levels;
}

export function determinePlacementLevel(answers, questions) {
  const order = ["A1", "A2", "B1", "B2", "C1"];
  let achieved = "A1";
  for (const level of order) {
    const levelQuestions = questions.filter((q) => q.level === level);
    const correctCount = levelQuestions.filter((q) => answers[q.id] === q.correct).length;
    if (correctCount >= 1) {
      achieved = level;
    } else {
      break;
    }
  }
  return achieved;
}