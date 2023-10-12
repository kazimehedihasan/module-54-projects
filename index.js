const express = require('express');
const cors= require('cors');
const app = express();
const port = process.env.PORT || 3000;


// middleware
app.use(cors());
app.use(express.json());
const users =[
    {id: 1 , name: 'John', email: 'john@example.com'},
    {id: 2 , name: 'kazi', email: 'kazi@example.com'},
    {id: 3 , name: 'james', email: 'james@example.com'},
]

app.get('/users', (req , res ) =>{
    res.send(users)
} )


app.get('/', (req, res) => {
res.send('hello world kazi mehedi hasan');
})

app.post('/users', (req, res) => {
    console.log(req.body);
    console.log('post api hitting');
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
});