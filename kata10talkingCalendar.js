const talkingCalendar = function(date) {
  return month(date) + " " + day(date) + year(date)
};

function year(date) {
  let yr = date.substr(0, 4);
  return yr
};

function day(date) {
  let dy = date.substr(8, 2)
    if(dy === '01') {
      dy = dy.charAt(1)
      return dy + "st, "
    } else if(dy === '02') {
      dy = dy.charAt(1)
      return dy + "nd, "
    } else if(dy === '03') {
      dy = dy.charAt(1)
      return dy + "rd, "
    } else if (dy === '21' || dy === '31') {
      return dy + "st, " 
    } else if (dy.charAt(0) === '0') {
      dy = dy.charAt(1)
      return dy + "th, "
    } else {
      return dy + "th, "
    }
};

function month(date) {
  let mth = date.substr(5, 2)
  if(mth === '01') { 
    return mth = 'January';
  } else if(mth === '02') { 
    return mth = 'February';
  } else if(mth === '03') { 
    return mth = 'March';
  } else if(mth === '04') { 
    return mth = 'April';
  } else if(mth === '05') { 
    return mth = 'May';
  } else if(mth === '06') { 
    return mth = 'June';
  } else if(mth === '07') { 
    return mth = 'July';
  } else if(mth === '08') { 
    return mth = 'August';
  } else if(mth === '09') { 
    return mth = 'September';
  } else if(mth === '10') { 
    return mth = 'October';
  } else if(mth === '11') { 
    return mth = 'November';
  } else if(mth === '12') { 
    return mth = 'December';
  } else {
    return mth = 'Not a valid month'
  }
} 

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));