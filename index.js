const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/sona', (req, res) => {
    res.send('user server is available');
})




app.listen(port, () => {
    console.log(`Users Server Started on port:${port}`);
    
})