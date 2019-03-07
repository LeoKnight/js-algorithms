// 公鸡5块,母鸡3块,小鸡3个1块,100块买100鸡

// 复杂度 O(100**2)
function countChicken(money) {
  for (let a = 1; a < 98; a++) {
    for (let b = 1; b < 98; b++) {
      if ((tmp = 5 * a + 3 * b + (1 / 3) * (100 - a - b) === money)) {
        return {
          male: a,
          female: b,
          child: 100 - a - b
        }
      }
    }
  }
}

// console.log(countChicken(100))

// 熄灯问题
// 5 * 6 的矩阵 按钮, 按下按钮,上下左右本体都会被点亮, 如果灯原来是亮的,就会被熄灭,灯是灭的就会被点亮

class Puzzle {
  constructor() {
    this.matrix = []
    this.row = null
    this.col = null
  }
  init(r, c) {
    this.row = r
    this.col = c
    for (let i = 0; i < r; i++) {
      const tmp = []
      for (let f = 0; f < c; f++) {
        tmp.push(0)
      }
      this.matrix.push(tmp)
    }
  }
  getMatrix() {
    return Array.from(this.matrix)
  }
  getState(r, c) {
    return this.matrix[r][c] % 2 === 0
  }
  press(row, col) {
    const r = row - 1
    const c = col - 1
    if (r > this.row || c > this.col) {
      console.log('error row or col')
      return false
    }
    this.matrix[r][c] += 1
    if (this.matrix[r + 1] && this.matrix[r + 1][c] > -1) {
      this.matrix[r + 1][c] += 1
    }
    if (this.matrix[r - 1] && this.matrix[r - 1][c] > -1) this.matrix[r - 1][c] += 1
    if (this.matrix[r]) {
      this.matrix[r][c + 1] > -1 && (this.matrix[r][c + 1] += 1)
      this.matrix[r][c - 1] > -1 && (this.matrix[r][c - 1] += 1)
    }
  }
}

let game = new Puzzle()
game.init(5, 6)
game.press(1, 6)
// game.press(1, 2)
// game.press(4, 5)
// game.press(0, 5)

// console.log(game.getMatrix())

// 讨厌的青蛙
