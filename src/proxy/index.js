let obj = {
  name: '张三'
}

let handler = {
  get: function(target, key){
    console.log('getting '+key)
    return Reflect.get(target, key)
  },
  set: function(target, key, value){
    console.log("setting "+key)
    return Reflect.set(target, key, value);
  }
}

let proxy = new Proxy(obj, handler);


console.log(proxy.name)
proxy.name = "李四"
console.log(proxy.name)

