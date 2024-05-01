const express = require('express');

const app = express();


app.get('/', (req, res) =>{
  res.send('<h1>Hello Express page!</h1>')
})


app.get('/about', (req, res) =>{
  res.send('<h1>About Express Page!</h1>')
})

app.get('/contact', (req, res) =>{
  res.send('<h1>This is Contact Page of Express App</h1>')
})




app.listen(3000, () => {
  console.log('server started');
}) 
