function dirReduc(arr){
    let arrayNamber = [];

    for ( let i = 0; i < arr.length; i++){
        if (arr[i] == 'NORTH' ){
            arrayNamber[i] = 1;
        } 
        if (arr[i] == 'SOUTH' ){
            arrayNamber[i] = -1;
        }
        if (arr[i] == 'EAST'){
            arrayNamber[i] = 2;
        }
        if (arr[i] == 'WEST'){
            arrayNamber[i] = -2;
        }
    }
    for ( let i = 0; i < arr.length - 1; i++){
        if ((arrayNamber[i] + arrayNamber[i+1]) == 0){
            arrayNamber.splice(i, 2);
            i = -1;
        }
    }
    let arrayNamberOff = [];
    for ( let i = 0; i < arrayNamber.length; i++){
        if (arrayNamber[i] ==  1){
            arrayNamberOff[i] = 'NORTH';
        } 
        if (arrayNamber[i] == -1){
            arrayNamberOff[i] = 'SOUTH';
        }
        if (arrayNamber[i] == 2){
            arrayNamberOff[i] = 'EAST';
        }
        if (arrayNamber[i] == -2){
            arrayNamberOff[i] = 'WEST';
        }
    }

    return arrayNamberOff;
  }
    console.log (dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

