//Constructor function
function Person(firstName, lastName, dob) {
    this.fistName =  firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    
}

//Istantiate object
const person1 = new Person('John', 'Doe', '4-3-1980')
const person2 = new Person('Mary', 'Smith', '3-6-1970')

