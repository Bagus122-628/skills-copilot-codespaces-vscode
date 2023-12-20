import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/api';

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/ninja');

app.use(express.static('public'));

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(422).send({ error: err.message });
});

app.listen(process.env.port || 3000, () => {
    console.log('now listening for requests');
});



