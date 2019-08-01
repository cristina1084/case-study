//Script for to-do page
var counter = 0;    
$(document).ready(function(){
    function aj(){
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",     //To-Do API
            success:function(data){
                var output='<ul class="list-group list-group-flush " >';
                for (var i in data){
                    output+='<li class="list-group-item"><div class="custom-control custom-checkbox">';
                    if(data[i].completed==true)
                        output+='<input type="checkbox" class="custom-control-input" id="customCheck'+data[i].id+'" value="'+data[i].id+'" checked disabled>'
                    else
                        output+='<input type="checkbox" class="custom-control-input" id="customCheck'+data[i].id+'" value="'+data[i].id+'">'
                    output+='<label class="custom-control-label" for="customCheck'+data[i].id+'">'+data[i].title+'</label></div></li>';
                                         
                }
                output+='</ul>';
                $('input[type="checkbox"]').change(function(){        //to count checked boxes
                    if($(this).prop("checked") == true){
                        counter+=1;
                    }
                    else counter-=1;
                    console.log(counter);
                    
                })
                $('.result').html(output);
                var todopromise = new Promise((resolve,reject)=>{        //promise
                    if(counter==5) resolve("Congrats. 5 Tasks have been Successfully Completed");
                    else reject();
                });
                todopromise.then((msg)=>{
                    alert(msg);
                })
                .catch(()=>{})
            }
        });
    }
    aj();

    $("#ul1 li").click(function(){
        var typ = $(this).text();
        console.log(typ);
        if (typ == "Log Out") window.location.href='login.html';
        else if(typ == "To-Do List") aj();
    });

});