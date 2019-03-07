function cache () {
    const store = {}
    return {
        get(key){
            return store[key]
        },
        set(key,value){
            store[key] = value
            return value
        }
    }
}

const store = cache()

store.set('name','leo')

console.log(store.get('name'))