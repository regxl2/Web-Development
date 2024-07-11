interface User1{
	name: string
	readonly age: number
	rollNo: number
}

const user1 = {
	name: "Abhishek",
	age: 23,
	rollNo: 3
}

// As, we know on making object constant doesn't make object property constant, we can easily change the
// property values, we can make property constant by using readonly keyword.


interface User2{
	name: string
	age: number
	rollNo: number
}

// This will make all the property of the object
const user2 :Readonly<User2> = {name: "Abhishek", age: 23, rollNo: 3}
