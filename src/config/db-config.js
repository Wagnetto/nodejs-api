import {MongoClient} from 'mongodb';

export default async function connectToDatabase(connectionString) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(connectionString);
    console.log('Connecting database cluster...🕐');
    await mongoClient.connect();
    console.log('Connected to MongoDB Atlas succesfully!🎯');

    return mongoClient;
  } catch (erro) {
    console.error('Failed to connect database! ❌', erro);
    process.exit();
  }
}
