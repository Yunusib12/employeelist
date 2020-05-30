const express = require('express');
const rp = require('request-promise');
const app = express();
const PORT = process.env.PORT | 3000;

app.get('/', (req, res) => {

    rp({
        uri: 'http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees',
        json: true
    })
        .then((datas) => res.send(datas))
        .catch((err) => console.log(err))
});



app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}`));