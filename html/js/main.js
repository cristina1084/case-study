$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/todos",
        success:function(data){
            var output="";
            for (var i in data){
                output+='<div class="custom-control custom-checkbox">';
                output+='<input type="checkbox" class="custom-control-input" id="customCheck'+data[i].id+'" value="'+data[i].id+'">'
                output+='<label class="custom-control-label" for="customCheck'+data[i].id+'">'+data[i].title+'</label></div>';
                                     
            }
            $('.result').html(output);
            var todopromise = new Promise((resolve,reject)=>{
                var counter = 0;    
                $('input[type="checkbox"]').change(function(){
                    if($(this).prop("checked") == true){
                        counter+=1;
                        if(counter==5) resolve("Congrats. 5 Tasks have been Successfully Completed");
                    }
                    else counter-=1;
                    console.log(counter);
                    
                })
            })

            todopromise.then((msg)=>{
                alert(msg);
            })
        }
    });
    $("#ul1 li").click(function(){
        var typ = $(this).text();
        // console.log(typ);
        if (typ == "Log Out") window.location.href='login.html';
    });

});