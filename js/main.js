// Lightning Exercise 1: Write a factory function that 
//creates an object that represents a doctor. 
//he function should accept three arguments.

// Doctor's name
// Specialty (Oncologist, pediatrician, etc...)
// Address of practice

// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array stored in a variable named BowWowKennels




const docInfo = (name, specialty, address ) => {
    return {
    "doctorName": name,
    "doctorSpecialty": specialty,
    "doctorAddress": address
}
}
console.log(docInfo("Dr. Allen", "Urology", " 310 25th Ave N Suite 202, Nashville, TN 37203"));



//// Lightning Exercise 2: Write a factory function that creates an object that 
// represents a pet. 
// The function should accept two arguments.

// Pet name
// Pet breed
// Invoke the factory function 3 times and place each animal in an array 
// stored in a variable named BowWowKennels

const newPet = (name, breed) => {
    return {
        "name": name,
        "breed": breed,
    }
}
 console.log(
     newPet("Lilo", "aussie"),
     newPet("tango", "yorkipoo"),
     newPet("cash", "yorkipoo")
 );
 const BowWowKennels = []

 BowWowKennels.push(newPet("Lilo", "aussie"),
 newPet("tango","yorkipoo"),
 newPet("cash","yorkipoo"))

console.log(BowWowKennels)

