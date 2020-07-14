const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded())
app.use(express.json())

app.listen(port, () => console.log(`Example app listening on port ${port}`))

app.post('/rest/storeUser', (req, res) => {
    console.log('request body is ', req.body)
    res.send(req.body.email)
});