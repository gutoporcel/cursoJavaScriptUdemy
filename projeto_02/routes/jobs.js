const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');


//rota de teste
router.get('/test',(req, res)=>{
    res.send('deu certo')
});

//detalhe da vaga =>  view/a view/2
router.get('/view/:id', (req, res)=> Job.findOne({
    where:{id: req.params.id}
}.then(Job =>{

    res.render('view', {

        Job
    });
}).catch(err => console.log(err))));



// form da rota de envio
router.get('/add',(req, res)=>{
    res.render('add');
})

//add JOb via post
router.post('/add',(req, res)=>{

    let {title, salary, company, description, email, new_job}=req.body;
    //insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
    .then(()=> res.redirect('/'))
    .catch(err => console.log(err));

});

module.exports = router