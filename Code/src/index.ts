import express from 'express';
import exampleRoute from './routes/testRoute';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/', exampleRoute);

app.get('/', (req, res) => {
    res.send('Hello, Bun with TypeScript and Express.js!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});