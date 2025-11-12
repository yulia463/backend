//@ts-ignore
import express from 'express';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Server is running ✅ zalupa1');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
