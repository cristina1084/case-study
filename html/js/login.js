$(document).ready(function(){
    function validateLogin(u,p,callback){
        if(u=="admin" && p=="12345") callback();
    }

    $("#btn1").click(function(){
        var uname = $("#uname").val();
        var pwd = $("#pwd").val();
        console.log(uname,pwd);
        validateLogin(uname,pwd,()=>{
            window.location.href = "main.html";
        })
    })
})