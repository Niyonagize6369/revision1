// console.log('Hello World')
let id= 7;
console.log(id);

//cannot be a reserved keyword
//should be meangfull
//cannot start with a number (1name)
// can not contain a space or hyphen(-)
 
// let firstname ="mosh"; string
// let lastName = "hamdani";
// let age=80; number
// let isApproved = false boolean
// let selectColor = null;

// either 

// let firstName = "mosh", lastName = "hamdani";

// let interestRate = 0.9;(it is possible to change the variable)
// interestRate =5
// console.log(interestRate): when i use const means that the variable will be constant


// how  we create Object

let person = {
    name:'mosh',
    age:80

};
console.log(person);


// dot notation 

person.age= 67;
console.log(person.age);

// blacket notation

person ['name'] = 'mary';
console.log(person.name)


// Array

 let selectColor = ['black,yellow'];
 selectColor[2]= 'green';
 console.log(selectColor);
 console.log(selectColor.length)

//  functions (performing a task)

function dudu(name, lastName) {
    console.log('hello' + name + '' + lastName);

}
dudu('john,smith');
dudu('mary');

// function (calculate a value)
function square(number){
    return number*number;
}
let number =square(2)
console.log(number);




