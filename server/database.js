import pgPromise from 'pg-promise'

const pgp = pgPromise()
const db = pgp(process.env.CONNECTION_STRING)
