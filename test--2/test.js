function twoSum(numbers, target) {
    let array = numbers;
    let index = 0;
    let k = 0;
    while (k < numbers.length){

        index = numbers[k];
        numbers[k] = 0;
    for ( let i = 0; i < numbers.length; i++) {
        if ( (index + numbers[i]) == target) {
            return [k, i];
        }
        else {numbers[k] = 0;  }
        
   }  
        k++;  
    }
   
}

    console.log (twoSum([894, 436, 743, 72, 510, 550, 230, 430, 867, 452], 1610));

/*     1000037, 1000039 */