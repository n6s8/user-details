let nameOfPerson = prompt("Please enter your name:");
while (!nameOfPerson) {
    alert("Your response is empty. Please enter a valid name.");
    nameOfPerson = prompt("Please enter your name:"); 
}

let ageOfPerson = parseInt(prompt("Please enter your age:"));
while (isNaN(ageOfPerson)) {
    alert("The type of input must be only NUMBER!!! ");
    ageOfPerson = prompt("Please enter your age:"); 
}


let genderOfPerson = prompt("Please enter your gender (male/female):").toLowerCase();
while (genderOfPerson !== "male" && genderOfPerson !== "female") {
    alert("The input must be whether male or female!!!");
    genderOfPerson = prompt("Please enter your gender (male/female):").toLowerCase();
}


let isConfirmed = confirm(
    `Please confirm your details:\nName: ${nameOfPerson}\nAge: ${ageOfPerson}\nGender: ${genderOfPerson}`
);

if (isConfirmed) {
    let user = {
        name: nameOfPerson,
        age: ageOfPerson,
        gender: genderOfPerson
    };

    let userDetails = "";
    for (let key in user) {
        userDetails += `${key}: ${user[key]}\n`;
    }
    alert("User Details:\n" + userDetails);

} else {
    alert("Please, try again!!!");
}
