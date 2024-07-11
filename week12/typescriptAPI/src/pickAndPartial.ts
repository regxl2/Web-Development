interface User{
	id: string
	name: string,
	email: string,
	age: number,
	password: string
}


// Approach1: - if the function's argument become more then code looks ugly.
function updateUser1(name: string,  email: string, password: string){
	// hit the database and update the user details
}


// Approach2: - You can make another interface and make object out of it and pass it to the function.
// But the problem with this approach is that if we make update to User interface structure then also
// we have to make update to the UserProps structure.
interface UpdateProps1{
	name: string,
	email: string,
	password: string
}

function updateUser2(updateProps: UpdateProps1){
	// hit the database and update the user details
}

// Approach3: - make the use of pick and define the type. Pick means pulling out some properties of the User

type UpdateProps2 = Pick<User, 'name' | 'email' | 'password'>
function updateUser3(updateProps: UpdateProps2){
	// hit the database and update the user details
}


// Partial: - It will make all the properties of the object nullable. Nullable means it could be null also.
type UpdatePropsOptional = Partial<UpdateProps2>

