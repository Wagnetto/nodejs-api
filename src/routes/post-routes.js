import express from 'express';
import multer from 'multer';
import {
  createPost,
  listAllPosts,
  imageUpload,
} from '../controllers/posts-controller.js';

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

  //Route to get all posts
  app.get('/posts', listAllPosts);

  //Route to create a new post
  app.post('/posts', createPost);

  //Route to upload image
  app.post('/upload', multerUpload.single('image'), imageUpload);
};

export default routes;
