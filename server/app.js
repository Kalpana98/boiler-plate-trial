import express from 'express';
import path from 'path';

const app = express();
const PORT = 5001;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.get('/api', (req, res) => {
  res.send({message: 'Hi from Server!'});
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});