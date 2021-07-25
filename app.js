// 1. Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;
// answer
var arr=[{
    name: "juice",
    price: "50",
    quantity: "3"
},{
    name: "cookie",
    price: "30",
    quantity: "9"
},{
    name: "shirt",
    price: "880",
    quantity: "1"
},{
    name: "pen",
    price: "100",
    quantity: "2"
}

]
var total=0;
for(var i=0; i<arr.length; i++){
    var price=arr[i].price*arr[i].quantity
    document.write("<h1>"+"price of "+arr[i].name+":"+price+"</h1> ")
    total +=price
}
document.write("<h1>"+"total price :"+total+"</h1>");
// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.
//question 2
var obj={
    name: "Aqeel Malik",
    email: "maqeel191@gmail.com",
    password: "1231",
    age: 21,
    gender: "male",
    city: "karachi",
    country: "pakistani",
}
console.log('country' in obj);
console.log('firstName' in obj);
console.log('lastName' in obj);
// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.
// question 3
function Student(name,rollNo,batch,courseName){
        this.name=name;
        this.rollNo=rollNo;
        this.batch=batch;
        this.courseName=courseName;
    }
    var fahad= new Student("fahad",2344,7,"web n app");
    var aqeel = new Student("Aqeel",2234,7,"web n app");
    var hamza = new Student("Hamza",2422,7,"web n app");
    // 4. Suppose you want to check population of your area, their
    // educations and professions.
    // Create a constructor function which holds following
    // properties:
    // Name, gender, address, education, profession,
    // Enter all records one by one.
    // Hint:
    //  use select box for education and profession,
    //  use radio box for gender
    // Bonus : use can use localStorage to save records.
    //answer
    users= []
function User(name,gender,address,education,proffession){
    this.name=name;
    this.gender=gender;
    this.address=address;
    this.education=education;
    this.proffession=proffession;
}

function createUser(){
    var username = document.getElementById('name').value;
    var usergender = document.getElementById('gender').value;
    var useraddress = document.getElementById('address').value;
    var usereducation = document.getElementById('education').value;
    var userproffession = document.getElementById('profession').value;
    var user1 = new User(username,usergender,useraddress,usereducation,userproffession);
    var user=[];
    for( var key in user1){
        user.push(user1[key])
    }
    users.push(user)
    alert(users)
}

