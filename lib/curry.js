// var curry = function (fn) {
//     var args = [].slice.call(arguments, 1);
//     return function() {
//         var newArgs = args.concat([].slice.call(arguments));
//         return fn.apply(this, newArgs);
//     };
// };

// function add(a, b) {
//     return a + b;
// }

// var addCurry = curry(add, 1, 2);
// console.log(addCurry()) // 3

//或者
// var addCurry = curry(add, 1);
// addCurry(2) // 3
// //或者
// var addCurry = curry(add);
// addCurry(1, 2) // 3

// sum(1, 2, 3).valueOf(); // 6
// sum(2, 3)(2).valueOf(); // 7
// sum(1)(2)(3)(4).valueOf(); // 10

// console.log(sum(1)(2)(3)(4))

// 第二版
// function sub_curry(fn) {
//     var args = [].slice.call(arguments, 1);
//     return function() {
//         return fn.apply(this, args.concat([].slice.call(arguments)));
//     };
// }

// function curry(fn, length) {

//     length = length || fn.length;

//     var slice = Array.prototype.slice;

//     return function() {
//         if (arguments.length < length) {
//             var combined = [fn].concat(slice.call(arguments));
//             return curry(sub_curry.apply(this, combined), length - arguments.length);
//         } else {
//             return fn.apply(this, arguments);
//         }
//     };d
// }

// sum(1)(2)(3)(4) ====>  1+2+3+4

// const sum = function () {
//     const args = Array.prototype.slice.call(arguments)
//     return function (){
//         const combine = args.concat([].slice.call(arguments))
//         return sum(...combine)
//     }
// }
// sum.prototype.valueOf = function(){
//     return this.args
// }

// console.log(sum(1)(2)(3)(4))

const sum = function() {
  let sum = [].slice.call(arguments).reduce((acc, cur) => acc + cur)

  function funct() {
    sum += [].slice.call(arguments).reduce((acc, cur) => acc + cur)
    return funct
  }
  Object.defineProperty(funct, 'valueOf', {
    value: () => sum
  })
  return funct
}

console.log(sum(2)(3)(4)(5)(6).valueOf())
