var head = function(x) { return x[0]; };
var reverse = function (arr) { return arr.reduce(function(acc, x){ return [x].concat(acc); }, []);}
var last = compose(head, reverse);

function compose(f,g) {
  return function(x) {
    return f(g(x));
  };
};

console.log( last(['jumpkick', 'roundhouse', 'uppercut']) )
//=> 'uppercut'