const path = require('path');

const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private')
    next()
})

app.use(express.static(__dirname + "/public/dist/public"));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"));
});

app.listen(8000, () => console.log("listening on port 8000"));
