$(document).ready(function(){
    $("#ul1 li").click(function(){
        var typ = $(this).text();
        // console.log(typ);
        if (typ == "Log Out") window.location.href='login.html';
        else if(typ == "To-Do List"){
            $.ajax({
                type:"GET",
                url:"https://jsonplaceholder.typicode.com/todos",
                success:function(data){
                    // console.log(data);
                    var output="";
                    for (var i in data){
                        // console.log(data[i].id, data[i].title);
                        output+='<div class="custom-control custom-checkbox">';
                        output+='<input type="checkbox" class="custom-control-input" id="customCheck'+data[i].id+'">'
                        output+='<label class="custom-control-label" for="customCheck'+data[i].id+'">'+data[i].title+'</label></div>';
                                             
                    }
                    $('.result').html(output);
                }
            });
        }
    });

});