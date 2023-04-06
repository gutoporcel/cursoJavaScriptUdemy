const express    = require('express');
const app        = express();
const PORT       = 3000;
const db         = require ('./db/connection');
const bodyParser = require('body-parser');


app.listen(PORT, function(){
    console.log(`O Express esta rodando na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended:false}));

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
app.use('/jobs',require('./routes/jobs'));
app.use('/jobs',require('./routes/jobs'));
app.use('/jobs',require('./routes/jobs'));
app.use('/jobs',require('./routes/jobs'));
app.use('/jobs',require('./routes/jobs'));
app.use('/jobs',require('./routes/jobs'));
app.use('/jobs',require('./routes/jobs'));
app.use('/jobs',require('./routes/jobs'));

