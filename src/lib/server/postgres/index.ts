import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { DATABASE_POOLED } from '$env/static/private';
const pool = new Pool({
	connectionString: DATABASE_POOLED,
	ssl: true
});

export const db = drizzle(pool);
