
// Write a person class to hold all the details;

class person {
    constructor (name,age,area,phoneNumber) {
        this.name = name;
        this.age = age;
        this.area = area;
        this.phoneNumber = phoneNumber;
    }
details() {
    return {
        name : this.name,
        age : this.age,
        area : this.area,
        phoneNumber : this.phoneNumber
    }
}
}
person.qualificaton = "M.Sc"
var person1 = new person ("Mithun",23,"Ramanathapuram",1234567890);
var result = person1.details();
console.log(result);
console.log(person.qualificaton);

// Write a class to calculate the uber price
class calculate {
    constructor (tripid, kilometer,carModel) {
        this.tripid = tripid;
        this.kilometer = kilometer;
        this.carModel = carModel;
    }
calc() {
    if (this.carModel == "swift"){
        let value = this.kilometer*10;
        return value;
    }
    if (this.carModel == "indica"){
        let value2 = this.kilometer*8;
        return value2;
    }
}
}
let user1 = new calculate("TR123",120,"indica");
let charges = user1.calc();
console.log(charges);