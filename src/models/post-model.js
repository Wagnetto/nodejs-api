import connectToDatabase from '../config/db-config.js';

// Connects to the MongoDB database using the provided connection string from the environment variable 'CONNECTION_STRING'
const connection = await connectToDatabase(process.env.CONNECTION_STRING);

// Fetches all posts from the 'posts' collection in the 'insta-api' database
export async function getPosts() {
  const db = connection.db('insta-api');
  const collection = db.collection('posts');
  return collection.find().toArray();
}

export async function sendNewPost(newPost) {
  const db = connection.db('insta-api');
  const collection = db.collection('posts');
  return collection.insertOne(newPost);
}
