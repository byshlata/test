function humanReadable (seconds) {
  let hourOff = 0;
  let minuteOff = 0;
  let secondOff = 0 ;
  let strhour = '';
  let strminute = '';
  let strsecond = '';
  hourOff =  Math.trunc (seconds/60/60);

  minuteOff = Math.trunc ((seconds - hourOff * 60 *60)/60);

  secondOff = seconds - hourOff * 60 * 60 - minuteOff * 60;

  if (hourOff > 9){
    strhour = hourOff;
  }
  else {strhour = "0" + hourOff;
}

if (minuteOff > 9){
  strminute = minuteOff;
}
else {strminute = "0" + minuteOff;
}

if (secondOff > 9){
  strsecond = secondOff;
}
else {strsecond = "0" + secondOff;
}


  return  strhour + ":" + strminute + ":" + strsecond;
}
    console.log (humanReadable(359999));

