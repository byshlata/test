function score( dice ) {
    dice.sort();
    let points = 0;
    for (let i = 0; i < 3; i++){

        if ((dice[i] == dice[i+1]) && (dice[i]== dice[i+2]) ){
            if (dice[i] != 1){
                points = dice[i] * 100;
            } else {
                points = 1000;
            }
            dice.splice(i, 1);
            dice.splice(i, 1);
            dice.splice(i, 1);
            i = Infinity;
        }
    }
 for ( let i = 0; i < dice.length; i++){
     if ( dice [i] == 1) {
         points = points + 100;
     }
     if ( dice [i] == 5) {
         points = points + 50;
     }
 }
        return points;
    }


    console.log (score([2, 4, 4, 5, 4]));

