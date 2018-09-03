// 输入: 3
// 输出:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

// Spiral Matrix II

const generateMatrix = (num) => {
  if(num<2){
    return []
  }
  const result = [],topRight = num
  const renderRow = (last,preset)=>{
    const tmp = []
    for(let i = preset;i<=last;i++){
      tmp.push(i)
    }
    return tmp
  }
  for (let f = num;f<=num**2;f+=num){
    result.push(renderRow(f,f-num+1))
  }
  return result
}

console.log(generateMatrix(3))