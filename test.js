function generateHashtag (str) {

    if (str.replace(/\s/g, '').length > 139) {
      return false;
    }
    let array = str.split(' ');
    let strOff = '#';
    let index = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] != ''){
            let arrayWord = array[i].split('');
            arrayWord [0] = arrayWord[0].toUpperCase();
            let strNew = arrayWord.join ('');
            strOff = strOff.concat(strNew);
        } else {
            index++;
        }
    }
    if (index == array.length){
        return false;
    } else {
        return strOff;
    }   
  }



    console.log (generateHashtag("a".repeat(139)));

