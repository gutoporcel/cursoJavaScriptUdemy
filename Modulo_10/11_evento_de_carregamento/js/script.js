//window.addEventListener("load",function(){
//  alert("assine nossos termosd e uso");
//});

window.addEventListener("beforeunload", function(e) {
    e.returnValue = null;
});