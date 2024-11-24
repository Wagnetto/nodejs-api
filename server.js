import express from 'express';
import routes from './src/routes/post-routes.js';

const app = express();

app.use(express.static('uploads'));

routes(app);

// Starts the Express server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
