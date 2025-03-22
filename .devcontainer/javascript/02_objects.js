//obect singletone
//const tinduser = new Object()//singletone object
tinduser = {} // non single ton object
//console.log(tinduser);
tinduser.id = "123"
tinduser.name = "riya"
//console.log(tinduser) 
const regularclass = {
    email: "riya@gmail.com", // Comma instead of colon
    fullname: {
        userfullname : {
            name: "ria",
            age: 34
        }
    } // Empty object correctly defined

};

//console.log(regularclass.email.age);   // Output: "riya@gmail.com"
//console.log(regularclass.fullname); // Output: {}

//const obj1 = {1:"a",2:"b"}
//const obj2 = {3:"c",4:"D"}
//const obj3 = Object.assign({},obj1,obj2)
//const obj3 = {...obj1,...obj2}
//console.log(obj3);
console.log(tinduser)
console.log(objects.keys(tinduser))
console.log(object.values(tinduser))
console.log(object.entries(tinduser))
console.log(tinduser.hasOwnProperty('name'));










