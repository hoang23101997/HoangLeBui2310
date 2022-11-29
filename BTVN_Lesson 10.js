//  Q1. Create an object called person with name = John, age = 50.Then, access the object to alert("John is 50").

person={
  name: "John",
  age: 50
};
alert(person.name + " is " + person.age);
// we have a object:
person={
    name: "Jame",
    age: 19,
    address: "London",
}

// Q2.  add at least one property of the person object.
person.lastName = "William";
console.log (person)
// Q3. Please update value of address into "English"
person.address ="English"
console.log (person)
// Q4. remove at least one property of the person object.
delete person.age 
console.log (person)
// q5 Let's create an object containing the function inside and then call the function via object
{const person = {
  name: "Jullia",
  age: 20,
  address: "London",
  ask: function () {
    console.log ('How old is she?');
  },
  fullname: function () {
    console.log (this.name + " is " + this.age);
  }
};
person.ask();
person.fullname ();
}


//  we have a object:
const teacher = {
    firstName : "Nam",
    lastName: "Nguyen",
    subject: ['Math', 'English','Music']
};
// Q6 Use a for of loop and console the value of the subject attribute to the screen.
for (let item of teacher.subject) {
  console.log (item);
}
//  we have a:
 const arrays = [
    {
        id: 1,
        name: "Nguyễn Văn An",
        age: 22,
      },
      {
        id: 2,
        name: "Nguyễn Lan Anh",
        age: 21,
      },
      {
        id: 3,
        name: "Hồ Văn Trí",
        age: 23,
      },
      {
        id: 4,
        name: "Cao Văn La",
        age: 24,
      },
    ];
    console.log (arrays)
    for (let person of arrays)
    {
      console.log (`ID:${person.id}, Name: ${person.name}, Age: ${person.age}`)
    }
    // Combine the attributes learned in the previous lesson .
    // Q 7: Add a new user to the beginning of the array (using unshift())
 
  const newuser = arrays.unshift({id: 0, name: "Nguyễn Trí Thành", age: 26});
  console.log (arrays)
  
   
    // Q8: Add a new user at the end of the array (using push())
    const newuser2 = arrays.push({id: 5, name: "Nguyễn Trí Toàn", age: 29});
    console.log (arrays)
    
    // Q9: add multiple users to the array  (using push())
    const newusers = arrays.push({id: 6, name: "Nguyễn Cung", age: 30},{id: 7, name: "Nguyễn Thị Trang", age: 24});
    console.log (arrays)
    
    // Q10: remove 1 user from the array (using(pop))
    const deleteuser = arrays.pop({id: 7, name: "Nguyễn Thị Trang", age: 24});
    console.log (arrays)
    
    // Q11: filter out users with age >= 22;( using(filter())
 
    // extend part:
    // Q12: use for loop to get users with age >= 23
    
    // Q13: write an object using setter & getter to add new value and get value. key word (Getter, setter)

  

