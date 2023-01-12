const express = require('express');
const app = express();
const fs = require('fs')
const cors = require('cors')
app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.get('/',(err,res)=>
{
 
  fs.readFile('fileWithRecognizedWord.txt', 'utf8', function(err, data) {
    if (err) throw err;
    res.send({data})
});
})
app.get('/musicInfo',(err,res)=>
{
  fs.readFile('musicInfo.txt', 'utf8', function(err, data) {
    if (err) throw err;
    res.send({data})
});
})
app.listen(8000, () => {
  console.log(`API server listening at http://localhost:8000`);
});