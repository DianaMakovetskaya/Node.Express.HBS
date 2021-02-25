const express= require('express')
const expressHBS= require('express-handlebars')
const path = require('path');

const app= express();
app.get('/hello',(req, res) => {
    // res.send('World')
    res.write('World');
    res.end();
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname,'static')));
app.set('view engine','.hbs');
app.engine('.hbs',expressHBS({
    defaultLayout: false
}));
app.set('views',path.join(__dirname,'static'));

const users=[];

app.get('/users',(req, res) => {
    res.json([
        {name:'Dima'},
        {name:'Anna'},
        {name:'Kate'}])
})

app.get('/login', (req, res) => {
    res.render('login');
})
app.post('/login', (req, res) => {
    console.log('----------------------------')
    users.push(req.body);
     console.log(users);
    console.log('----------------------------')

    res.json('Hello from HBS');
})
app.listen(5000,()=>{
    console.log('App listen 5000')
})

