const count = 100; //数组长度
const originArr = [];
for (let i = 0; i < 100; i++) {
  originArr.push(Math.floor(Math.random() * count));
}
console.log("原数组====>", originArr);

// 冒泡排序1
(function bubble1(target) {
	let arr = [...target]
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
        sum += 1;
      }
    }
  }
  console.log("bubble1=================");
  console.log("排序后数组====>", arr);
  console.log("总循环次数：", sum);
})(originArr);

// 冒泡排序2
(function bubble2(target) {
	let arr = [...target]
  let sum = 0;
  let swapped;
  do {
    for (let j = 0; j < arr.length; j++) {
      swapped = false;
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j + 1];
        arr[j + 1] = arr[j];
				arr[j] = tmp;
        sum += 1;
        swapped = true;
      }
    }
  } while (swapped);

  console.log("bubble2=================");
  console.log("排序后数组====>", arr);
  console.log("总循环次数：", sum);
})(originArr);
