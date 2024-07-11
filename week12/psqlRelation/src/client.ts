import { Client } from 'pg';

export const client = new Client({
	connectionString: 'postgres://postgres:postgres@localhost:8000/postgres'
});