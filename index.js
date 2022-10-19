const express =  require('express');
const path = require('path');
const servidor = express();
const os = require('os');
const fs = require('fs');
const { json } = require('express');
const port = 3001;

servidor.get('/', (req,res)=>{
    res.send(`${os.version},
    
    
    `)
    

});


servidor.listen(port);



