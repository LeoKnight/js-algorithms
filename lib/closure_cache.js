function cache() {
  const store = {}
  return {
    get(key) {
      return store[key]
    },
    set(key, value) {
      store[key] = value
      return value
    }
  }
}

const store = cache()

store.set('name', 'leo')

console.log(store.get('name'))

// class version

class Store {
  constructor(x) {
    this.sum = x
  }
  plus(num) {
    this.sum += num
  }
  value() {
    return this.sum
  }
}

let total = new Store(1)

total.add(2)

console.log(total.value())
