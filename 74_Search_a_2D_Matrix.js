// Input:
const matrix = [[-10,-8,-6,-4,-3],[0,2,3,4,5],[8,9,10,10,12]]
// [
//   [1,   2,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
const target = 0
// Output: true


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let tmp = []
  matrix.forEach(e=>{
      if(e[0]> target){
        return 
         }
      if(e[e.length-1] < target){
        return 
      }
      tmp.push(e)
  })
  return !!tmp.find(e=>e.includes(target))
};

console.log(searchMatrix(matrix,target))