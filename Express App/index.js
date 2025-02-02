import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
const app = express();

const PORT = 3000;
app.use(express.json());
app.use(bodyParser.json());
app.use('/users', userRoutes);
app.get('/', (req, res) => {
    res.send('This is the home page of the app');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

