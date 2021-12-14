const maxRide = 2500
const minRide = 400


function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride < minRide ){
    return "This one is on me!"
  }else if (ride >  2000 && ride <= maxRide){
    return "I will gladly take your thirty bucks."
  }else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  city = city === "NYC" ? `Ok, sounds good.` : `No go.`
  return city 
}

function switchOnCharmFromTip(wordTip){
  // Write your code here!
  switch(wordTip){
    case "generous":
      return "Thank you so much."
      break
    case "not as generous":
      return "Thank you."
      break
    default:
      return "Bye."
  }
}