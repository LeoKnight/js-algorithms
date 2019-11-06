// 最大子序列之和

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// output 6


var maxSubArray = function (nums) {
    let ans = nums[0];
    let sum = 0;

    for (const item of nums) {
        if (sum < 0) {
            sum = item
        } else {
            sum += item;
        }
        ans = Math.max(sum, ans)
    }
    return ans;
    // for (let i = 0; i < nums.length; i++) {
    //     let value = nums[i]
    //     if ((sum + value) < sum) {
    //         sum = 0;
    //         tmp = sum;
    //         continue;
    //     }
    //     sum += value
    // }
    // return sum;
};

console.log(maxSubArray(nums))