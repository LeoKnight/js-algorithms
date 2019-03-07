class A {
    constructor(x) {
        this.sum = x
    }
    add(){
        this.sum+=1
    }
    value(){
        return this.sum
    }
}


let a = new A(1)

a.add()

console.log(a.value())