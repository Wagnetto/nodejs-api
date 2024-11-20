import express from 'express';
import {listAllPosts} from '../controllers/posts-controller.js';

const routes = (app) => {
  // Enables parsing JSON request bodies
  app.use(express.json());
  // Defines a route handler for the '/posts' endpoint
  app.get('/posts', listAllPosts);
};

export default routes;
