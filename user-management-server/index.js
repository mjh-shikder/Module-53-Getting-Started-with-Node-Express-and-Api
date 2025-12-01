const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('user server is available');
})


app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'jubair', email: 'mjhshikder.dhaka@gmail.com' },
    { id: 2, name: 'antora', email: 'antorahossain@gmail.com' },
    { id: 3, name: 'sona', email: 'sonababu@gmail.com' },
    { id: 4, name: 'hossain', email: 'mjhshikder.dhaka@gmail.com' },
    { id: 5, name: 'shikder', email: 'mjhshikder.dhaka@gmail.com' },
]

app.get('/user', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    console.log('post method called', req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`Users Server Started on port:${port}`);

})