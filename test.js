function findUniq(arr) {
    arr.sort();
    if (arr[0] == arr[1]){
        return arr[arr.length-1];
    }
    else {
        return arr[0];
    }
  }
    console.log (findUniq([ 0, 1, 0 ]));

