import express, {type Express} from 'express';

const app: Express = express();

app.get('/', (req, res) => {
    res.send('Hello!');
})

app.listen(9999, () => {
    console.log('app running');
})
