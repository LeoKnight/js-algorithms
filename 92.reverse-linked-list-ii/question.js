/*
* 92.反转链表 II 
* 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left  。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
*  
* 示例 1：
* 输入：head = [1,2,3,4,5], left = 2, right = 4
* 输出：[1,4,3,2,5]
* 示例 2：
* 输入：head = [5], left = 1, right = 1
* 输出：[5]
*  
* 提示：
* 	链表中节点数目为 n
* 	1 
* 	-500 
* 	1 
*  
* 进阶： 你可以使用一趟扫描完成反转吗？
* 
*/


// @QUESTION_START

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {

  const dummy = new ListNode();
  dummy.next = head;

  let pre = dummy;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  // 1-> 2 ->     3->4->...
  //pre current next

  // 1->  3->   2->   4
  //pre current next
  // 1-> 4->3->2
  let current = pre.next;
  for (let i = left; i < right; i++) {
    const next = current.next;
    pre.next = next;
    next.next = current;
    current

  }
  // let rightNode = pre;
  // for (let i = left; i < right - left + 1; i++) {
  //   rightNode = rightNode.next;
  // }
  // console.log(pre, '====', rightNode)


};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  reverseBetween,
  {
    data: [[[1, 2, 3, 4, 5], 2, 4], [[5], 1, 1]],
    structure: ["ListNode", "number", "number"]
  },
  {
    data: [[1, 4, 3, 2, 5], [5]],
    structure: ["ListNode"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/reverse-linked-list-ii/');
