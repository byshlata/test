function formatDuration (seconds) {
    let day = 0;
    let hour = 0;
    let minute = 0;
    let second = 0;
    let array = [];
    let arrayTest = [];
    let index = 0;

    year = Math.trunc(seconds / 365 / 24 / 60 / 60) ;
    day = Math.trunc((seconds - year * 365 * 24 * 60 * 60) / 24 / 60/ 60) ;

    hour = Math.trunc((seconds - year * 365 * 24 * 60 * 60 - day * 24 * 60 * 60) / 60 / 60);
    console.log ( hour);
    minute = Math.trunc((seconds - year * 365 * 24 * 60 * 60 - day * 24 * 60 * 60 - hour * 60 *60) / 60);
    second = Math.trunc(seconds - year * 365 * 24 * 60 * 60 - day * 24 * 60 * 60 - hour * 60 *60 - minute * 60);
 
    if ( year > 0 && year < 2) {
    let yearStr = year + " year";
    array.push(yearStr);
    arrayTest.push(year);
    } else if (year >= 2){
    let yearStr = year + " years";
    array.push(yearStr);
    arrayTest.push(year);
    }
    if ( day > 0 && day < 2) {
    let dayStr = day + " day";
    array.push(dayStr);
    arrayTest.push(day);
    } else if (day >= 2){
    let dayStr = day + " days";
    array.push(dayStr);
    arrayTest.push(day);
    }

    if ( hour > 0 && hour < 2) {
    let hourStr = hour + " hour";
    array.push(hourStr);
    arrayTest.push(hour);
    } else if (hour >= 2){
    let hourStr = hour + " hours";
    array.push(hourStr);
    arrayTest.push(hour);
    }

    if ( minute > 0 && minute < 2) {
    let minuteStr = minute + " minute";
    array.push(minuteStr);
    arrayTest.push(minute);
    } else if (minute >= 2){
    let minuteStr = minute + " minutes";
    array.push(minuteStr);
    arrayTest.push(minute);
    }

    if ( second > 0 && second < 2) {
    let secondStr = second + " second";
    array.push(secondStr);
    arrayTest.push(second);
    } else if (second >= 2){
    let secondStr = second + " seconds";
    array.push(secondStr);
    arrayTest.push(second);
    }



    for (let i = 0; i < arrayTest.length; i++){
        if (arrayTest[i] > 0){
            index++;
        }
    }
let strOff = '';
    if ( index == 0){
        return "now";
    }
    if (index == 1){
        return array[0];
    }
    if ( index == 2) {
        return array [0] + " and " + array [1];
    }

    if ( index > 2){

        for ( let i = 0; i < array.length; i++){
            if (i < (array.length - 2)){
            strOff += array [i] + ", ";
            } else {
            strOff += array [array.length - 2] + " and " + array [array.length - 1];
            i++;
            }
        }
        return strOff;
    }

}


    console.log (formatDuration(15724900));

/*     1000037, 1000039 */