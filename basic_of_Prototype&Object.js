

function sumfn(sum){
    this.sum = sum
    return sum * 5
}

sumfn.power = 9
// console.log(sumfn(5));
// console.log(sumfn.power);
// console.log(sumfn.prototype);


function customerOrderInfo(name,order,price){
    this.name = name
    this.order = order
    this.price = price
}

customerOrderInfo.prototype.orderId = function(){
    this.id = Math.random() * 1000 + 1
}

const customer = new customerOrderInfo("jack","pizza","400")
customer.orderId()
// console.log(customer);

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
   return `hello mr ${this.name}`
  }

  
}


function User(name){
    this.name = name
}

User.prototype.userMessage = function(){
    return `hello welcome to this family ${this.name}`
}

const userOne = new User("tatiya bechuu")
// console.log(userOne.userMessage());


const username = new Person("banrakas")
// console.log(username.greet());

const obj = {
    username:"pankaj",
    age:27,
    number: BigInt(7778889999),
    skills: skillsObject = {
       technica_skills:"Js, Mern, Backend",
       softSkills: function(){
        return `hello every one my name is ${this.username}`
       }

    },
    contactMe: function(){
        return` you can call me on this number ${this.number} `
    }
}

// console.log(obj.contactMe());

// console.log(typeof obj.number);

// factory function

function createUser(username, password){
    return {
       username,
       password,
       welcomeUser: function() {
        return `welcom to the this new family of  username: ${username}`;
        
       },
       userAdditionalInfo : {
        hobby:"gardening"
       },
       userSecret:[
        "sleep 12 hours",false,'bank',34
       ]
    }
}

const userInfo = new createUser("balmukund", "sun1332",)
// const userInfo2 = new createUser("raju", "I like goa",)
console.log(userInfo.welcomeUser());
