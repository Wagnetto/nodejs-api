import express from 'express';
import multer from 'multer';
import {
  createPost,
  listAllPosts,
  imageUpload,
  updatePost,
} from '../controllers/posts-controller.js';
import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200,
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const multerUpload = multer({dest: './uploads', storage});

const routes = (app) => {
  // Enables parsing JSON request bodies
  app.use(express.json());

  app.use(cors(corsOptions));

  //Route to get all posts
  app.get('/posts', listAllPosts);

  //Route to create a new post
  app.post('/posts', createPost);

  //Route to upload image
  app.post('/upload', multerUpload.single('image'), imageUpload);

  //Route to update a post linking an image to an existing post
  app.put('/upload/:id', updatePost);
};

export default routes;
