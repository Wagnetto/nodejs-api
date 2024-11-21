import {getPosts, sendNewPost} from '../models/post-model.js';
import fs from 'fs';

export async function listAllPosts(req, res) {
  // Fetches the posts using the 'getPosts' function
  const result = await getPosts();
  // Sends the fetched posts as a JSON response with a 200 OK status code
  res.status(200).json(result);
}
export async function createPost(req, res) {
  const newPost = req.body;
  try {
    const createdPost = await sendNewPost(newPost);
    res.status(200).json(createdPost);
  } catch (error) {
    const errorMessage = error.message;
    console.error(errorMessage);
    res.status(500).json({error: 'Falha na requisição'});
  }
}

export async function imageUpload(req, res) {
  const newPost = {
    descricao: '',
    imgUrl: req.file.originalname,
    alt: '',
  };
  try {
    const createdPost = await sendNewPost(newPost);

    // Renames the uploaded image file to match the post ID
    const updatedImage = `uploads/${createdPost.insertedId}.png`;
    fs.renameSync(req.file.path, updatedImage);
    res.status(200).json(createdPost);
  } catch (error) {
    const errorMessage = error.message;
    console.error(errorMessage);
    res.status(500).json({Erro: 'Falha na requisição'});
  }
}
