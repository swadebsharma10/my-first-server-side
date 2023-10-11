const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors())
app.use(express.json());

const users =[
    {id:1, name: 'Sabila', email: 'sabila@gmail.com'},
    {id:2, name: 'Sabnur', email: 'sabnur@gmail.com'},
    {id:3, name: 'Bobita', email: 'bobita@gmail.com'},
    {id:4, name: 'Sabila', email: 'sabila@gmail.com'},
]



app.get('/', (req, res) => {
  res.send('users management is Running')
})


app.get('/users', (req, res)=>{
    res.send(users)
})

// posted data come from client side
app.get('/users', (req, res) => {
     console.log('post api hitting')
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);

    res.send(newUser)
})


app.listen(port, () => {
  console.log(`Users Management listening on port ${port}`)
})