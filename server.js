import express from 'express';

const posts = [
  {
    id: 1,
    description: 'A test cat image',
    content: 'This is the first post',
    image: 'https://placecats.com/millie/300/150',
  },
  {
    id: 2,
    description: 'A playful kitten chasing a butterfly',
    content:
      'Watch this energetic kitten pounce and chase a colorful butterfly in the garden!',
    image: 'https://placecats.com/millie/300/150',
  },
  {
    id: 3,
    description: 'A relaxed cat napping in the sun',
    content:
      'This content cat is soaking up the warm sunshine in a peaceful afternoon nap.',
    image: 'https://placecats.com/millie/300/150',
  },
  {
    id: 4,
    description: 'A curious cat investigating a box',
    content:
      'This inquisitive feline is exploring the inside of a mysterious cardboard box.',
    image: 'https://placecats.com/millie/300/150',
  },
  {
    id: 5,
    description: 'A majestic cat perched on a windowsill',
    content:
      'This regal cat is observing the outside world from its vantage point on the windowsill.',
    image: 'https://placecats.com/millie/300/150',
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

function getPostById(id) {
  return posts.findIndex((post) => post.id === Number(id));
}

app.get('/posts/:id', (req, res) => {
  const index = getPostById(req.params.id);
  res.status(200).json(posts[index]);
});
