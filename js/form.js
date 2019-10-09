$(document).ready(function(){
    $('#text').on('keyup', function(){
        var text = $('#text').val();
        $('#val1').html(text);
    })
    $('#des').on('keyup', function(){
        var des = $('#des').val();
        $('#val2').html(des);
    })
    $('.gender').on('click', function(){
        var gender = $('.gender:checked').val();
        $('#val3').html(gender);
    })
    $('#sub').on('click', function(){
        var sub = $('#sub').val();
        $('#val4').html(sub);
    })

    $('.fruit').on('click', function(){
        var fruit ="";
       $('.fruit:checked').each(function(){
        fruit += $(this).val() + " , ";
        
       });
       $(".alert-secondary").html(fruit);
       var number = $('[type="checkbox"]:checked').length;
       alert(number);
    });

});