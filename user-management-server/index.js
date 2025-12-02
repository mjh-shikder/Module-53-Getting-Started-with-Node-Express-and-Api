const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config;
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('user server is available');
})

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tsgn0pw.mongodb.net/?appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});



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

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Users Server Started on port:${port}`);

})