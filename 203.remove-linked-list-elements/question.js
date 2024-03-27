/*
* 203.移除链表元素 
* 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
*  
* 示例 1：
* 输入：head = [1,2,6,3,4,5,6], val = 6
* 输出：[1,2,3,4,5]
* 示例 2：
* 输入：head = [], val = 1
* 输出：[]
* 示例 3：
* 输入：head = [7,7,7,7], val = 7
* 输出：[]
*  
* 提示：
* 	列表中的节点数目在范围 [0, 104] 内
* 	1 
* 	0 
* 
*/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// @QUESTION_START
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // solution 1, recursion
  // console.log(head)
  if (head === null) {
    return head;
  }

  head.next = removeElements(head.next, val);

  if (head.val === val) {
    return head.next;
  } else {
    return head;
  }

  // const dummy = new ListNode(0, head);
  // let tmp = dummy;
  // while (tmp.next !== null) {
  //   if (tmp.next.val === val) {
  //     tmp.next = tmp.next.next;
  //   } else {
  //     tmp = tmp.next;
  //   }
  // }
  // return dummy.next;

};
// @QUESTION_END


/*
* Test Cases
*/
showLogs(
  removeElements,
  {
    data: [[[1, 2, 6, 3, 4, 5, 6], 6], [[], 1], [[7, 7, 7, 7], 7]],
    structure: ["ListNode", "number"]
  },
  {
    data: [[1, 2, 3, 4, 5], [], []],
    structure: ["ListNode"]
  }
)

console.log('点击跳转到题目提交: https://leetcode.cn/problems/remove-linked-list-elements/');
