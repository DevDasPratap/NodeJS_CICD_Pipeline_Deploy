const express = require('express');
const app = express();
app.get('/testNode', (req, res)=>{
    res.status(200).send('Yes nodeJS testNode enpoint worked');
})
module.exports=app;