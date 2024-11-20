import getPosts from '../models/post-model.js';

export async function listAllPosts(req, res) {
  // Fetches the posts using the 'getPosts' function
  const result = await getPosts();
  // Sends the fetched posts as a JSON response with a 200 OK status code
  res.status(200).json(result);
}
