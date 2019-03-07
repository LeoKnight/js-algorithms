

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArr(len) {
  let arr= []
  for (var i = 0; i < len; i++) {
    arr.push(random(1, len));
  }
  return arr
}


var quickSort = function(arr) {

  　　if (arr.length <= 1) { return arr; }
  
  　　var pivotIndex = Math.floor(arr.length / 2);
  
  　　var pivot = arr.splice(pivotIndex, 1)[0];
  
  　　var left = [];
  
  　　var right = [];
  
  　　for (var i = 0; i < arr.length; i++){
  
  　　　　if (arr[i] < pivot) {
  
  　　　　　　left.push(arr[i]);
  
  　　　　} else {
  
  　　　　　　right.push(arr[i]);
  
  　　　　}
  
  　　}
  
  　　return quickSort(left).concat([pivot], quickSort(right));
  
  };



var quickSortFix = function (arr) {
  if (arr.length <= 1) { return arr; }

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    const tmp = arr[i]
    if (tmp < pivot) {
      if(left.length===0){
        left.push(arr[i]);
        continue;
      }
      
      if(left[0]>tmp){
        left = [tmp,...left]
      }else{
        left = [...left,tmp]
      }


    } else {
      if(right.length===0){
        right.push(arr[i]);
        continue;
      }
      if(right[right.length-1]<tmp){
        right = [...right,tmp]
      }else{
        right = [tmp,...right]
      }

    }

  }

  return [...left,pivot,...right]




};

const target = generateArr(1e7)

// console.time('quickSort')
// console.log(quickSort(target))
// console.timeEnd('quickSort')

// console.log('==========')


function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}


console.time('quickSortFix')
console.log(target.sort((a,b)=>a-b))
console.timeEnd('quickSortFix')