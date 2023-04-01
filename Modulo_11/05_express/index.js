let express = require("express");
let app = express();

app.get("/", function(req, res){

    res.send("primeira rota com express");

});

app.listen(3000, function(){
    console.log("A aplicaçõa esta funcionando na porta 3000");
});

