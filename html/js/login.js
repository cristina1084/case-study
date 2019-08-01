$(document).ready(function(){
    var flag;
    function validateLogin(u,p,callback){
        if(u=="admin" && p=="12345"){
            flag = 1;
            callback(flag);
        }
        else{
            flag = 0;
            callback(flag);
        }
    }

    $("#btn1").click(function(){
        var uname = $("#uname").val();
        var pwd = $("#pwd").val();
        console.log(uname,pwd);
        validateLogin(uname,pwd,(res)=>{
            if (res==1) window.location.href = "main.html";
            else alert("Incorrect username or password");
        })
    })
})