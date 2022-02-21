function scuberGreetingForFeet(num){
  // Write your code here!
  if(num <= 400){
    return "This one is on me!";
  }else if(num > 2500){
    return 'No can do.';
  }else if(num > 2000){
    return 'I will gladly take your thirty bucks.';
  }else{
    return;
  }
}

function ternaryCheckCity(string){
  // Write your code here!
  return string === 'NYC'? 'Ok, sounds good.': 'No go.';
  
}

function switchOnCharmFromTip(string){
  // Write your code here!
  switch(string){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}