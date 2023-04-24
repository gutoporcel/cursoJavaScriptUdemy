const express    = require('express');
const exphbs     = require('express-handlebars');
const app        = express();
const path       = require('path')
const PORT       = 3000;
const db         = require ('./db/connection');
const bodyParser = require('body-parser');


app.listen(PORT, function(){
    console.log(`O Express esta rodando na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended:false}));

//handle bars
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');


//db connection
db
.authenticate()
.then(()=>{
    console.log("conectou  ao banco com sucesso");

})
.catch(err =>{

    console.log("ocorreu um erro ao conectar");

});

// routes
app.get('/',(req,res)=>{
    res.send("Esta funcionado5");
});


//jobs routes

app.use('/jobs',require('./routes/jobs'));

//fim   
