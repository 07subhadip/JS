const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);


const chai = {
    name:"ginger chai",
    price:25,
    isAvailable:true,

    orderchai:function(){
        console.log('chai nahi bani');
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable:false,
    configurable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// name will not come due to enumerable is false 
for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
}