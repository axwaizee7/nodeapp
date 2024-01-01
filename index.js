const express = require("express");
const PORT = 3000;
app = express();

app.use(express.static("./public"));

app.get("/ok", (req, res) => {
    res.json({ hello: 'ok' });
});

app.listen(PORT, () => {
    const date = new Date();
    let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    console.log(`Server is running on  http://localhost:${PORT}, started: ${time}.`);
})
