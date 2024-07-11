import * as string_decoder from 'node:string_decoder';

export interface User{
	username: string;
	password: string;
	firstName: string | null;
	lastName: string | null;
	email: string;
}

export interface Todo{
	title: string;
	description: string;
	userId: number;
}