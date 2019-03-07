

let fun = ()=>{
  console.log('1111')
}

let handler = {
  set (target, key, value) {
    fun()
    target[key] = value
    return true
  }
}



function testable(target) {
  return new Proxy(target,handler)
}


let demo = {
  name:'leo',
  age:27
}


// let demo = {
//   name:'leo',
//   age:27
// }
// let demo2 = new Proxy(demo,handler)

let demo2 =  testable(demo)

demo2.age = 29

console.log(demo2)