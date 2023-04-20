const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/express_backend', (req, res) => { //Line 9
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

app.get('*', (req, res) => { //Line 9
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

