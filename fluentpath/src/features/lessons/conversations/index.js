import { identityContactScript } from "./identityContact";
import { greetingsIntroductionsScript } from "./greetingsIntroductions";
import { atTheRestaurantScript } from "./atTheRestaurant";
import { airportTravelScript } from "./airportTravel";
import { numbersMoneyScript } from "./numbersMoney";
import { firstDayWorkScript } from "./firstDayWork";
import { basicEmailScript } from "./basicEmail";
import { smallTalkScript } from "./smallTalk";
import { emergenciesScript } from "./emergencies";

export {
  identityContactScript,
  greetingsIntroductionsScript,
  atTheRestaurantScript,
  airportTravelScript,
  numbersMoneyScript,
  firstDayWorkScript,
  basicEmailScript,
  smallTalkScript,
  emergenciesScript
};

export const SCRIPTS = {
  identity_contact: identityContactScript.nodes || identityContactScript,
  airport_travel: airportTravelScript.nodes || airportTravelScript,
  restaurant: atTheRestaurantScript.nodes || atTheRestaurantScript,
  numbers_money: numbersMoneyScript.nodes || numbersMoneyScript,
  first_day_work: firstDayWorkScript.nodes || firstDayWorkScript,
  basic_email: basicEmailScript.nodes || basicEmailScript,
  small_talk: smallTalkScript.nodes || smallTalkScript,
  emergencies: emergenciesScript.nodes || emergenciesScript
};
