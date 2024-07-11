interface User {
	name: string
	age: number
}

function sumOfAge(user1: User, user2: User): number {
	return user1.age + user2.age
}

const totalAgeSum = sumOfAge({name: "Abhishek", age: 23}, {name: "Abhi", age: 23})
console.log(totalAgeSum)