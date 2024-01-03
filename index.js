const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.static("./public"));

app.get('/ok', (req, res) => {
    res.send('goodboi');
});

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(PORT, () => {
    const date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(`Server is running on  http://localhost:${PORT}, started: ${time}.`);
})
