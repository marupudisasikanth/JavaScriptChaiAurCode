

const createSingleton = (()=>{
    let instance;
    function createInstance(par){
        return par;
    }
    return{
        getInstance: (param)=>{
            if(!instance){
            instance =  createInstance(param)
        }
        return instance;
        }
        
    };
})();
console.log(createSingleton.getInstance('sak')==createSingleton.getInstance('sak'));



// SUMMARY : 

// 1.To declare singleton object => new Object( );
// 2. To merge object use spread operartor. {...Obj1, ...Obj2 } or 
// Object.assign( { }, obj1,obj2 ):
// 3. To return keys from object => Object.keys(object name);
// 4.To return values from object => Object.values(object name);
// 5.To check property of object => Object.hasOwnProperty(key/value name);
const tindrUser = new Object()
const proto = {
  greet() {
    console.log("Hello");
  }
};
const person = Object.create(proto);
person.name = "John";

person.greet()
tindrUser.id="123abc"
tindrUser.name = "Sammy"
console.log(tindrUser);

const obj1 ={ name :'sas', age:30}
const obj2 ={ city: 'HYD'}
const obj3 ={obj1,obj2}
console.log(obj3);

//{} optional
const obj4 = Object.assign({},obj1,obj2)
console.log(obj4);

const obj5 ={...obj1, ...obj2}

console.log(obj5);

console.log(Object.keys(obj5));
console.log(Object.values(obj5));
console.log(Object.entries(obj5));

const flattened = Object.entries(obj5).flat(1)
console.log(flattened);

const obj6 =new Object({...obj1, ...obj2})
console.log(obj6.hasOwnProperty('name'));
tindrUser.hasOwnProperty()

// video 18
// SUMMARRY :

// 1. To extract value from object => const {keyname} = object name;
// 2. To rename keyname for using more times => const {keyname: new name } = object name;
// 3. JSON is a collection of key-value pairs just like object and a JSON array is an ordered list of value.

const course = {
  courseName: "js tutorial",
  price: "999",
  courseInstructor: "hitesh"
}

const {courseInstructor} =course
console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);

//Json object
// }
//   "name": "hitesh",
//   "coursename": "js in hindi",
//   "price": "free"
// }













