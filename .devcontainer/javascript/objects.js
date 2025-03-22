// singletone 
const mynew = Symbol("key1");

const user = {
    name:"riya",
    age:12,
    [mynew]: "mykey1" //symobol 
}
console.log(user.age)
console.log(typeof user[mynew])
Object.freeze(user)
user.greeting= function()

{
    console.log(`hello,${this.name}`);
}
console.log(user.greeting)