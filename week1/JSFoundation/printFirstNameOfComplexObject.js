const allUsers = [
    {
        firstName: "Abhishek",
        lastName: "Rathore",
        gender: "Male"
    },
    {
        firstName: "Gaurav",
        lastName: "Sawasiya",
        gender: "Male"
    },
    {
        firstName: "Piyush",
        lastName: "Singh",
        gender: "Male"
    }]

const user ={
    firstName: "Abhishek",
    lastName: "Rathore",
    address: {
        houseNo: 189,
        streetName: "Vasundhara vihar"
    }
}

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"]==="Male"){
        console.log(allUsers[i]["firstName"])
    }
}

console.log("My house number is: "+user.address.houseNo)