import {getPosts, sendNewPost, sendUpdatedPost} from '../models/post-model.js';
import fs from 'fs';

import generateImageDescriptionWithGemini from '../services/gemini-service.js';

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
    res.status(500).json({error: 'Internal Server Error'});
  }
}

export async function imageUpload(req, res) {
  const newPost = {
    description: '',
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
    res.status(500).json({Erro: 'Internal Server Error'});
  }
}

export async function updatePost(req, res) {
  const id = req.params.id;
  const idBasedImageUrl = `http://localhost:3000/${id}.png`;

  try {
    const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
    const geminiDescription = await generateImageDescriptionWithGemini(
      imageBuffer,
    );

    const post = {
      imgUrl: idBasedImageUrl,
      description: geminiDescription,
      alt: req.body.alt,
    };
    const updatedPost = await sendUpdatedPost(id, post);
    res.status(200).json(updatedPost);
  } catch (error) {
    const errorMessage = error.message;
    console.error(errorMessage);
    res.status(500).json({error: errorMessage});
  }
}
