
$(document).ready(function(){


    // $('*').css('background-color','green')
    // $('*').css('color','white')

    // $("#Geeks").css("background-color", "red");


    // $(".geeks, .for, .GeeksforGeeks").css(
    //     "background-color", "green");


    //     $("h2").css("border",
    //         "5px solid green");

    // $("p:first").css(
    //     "background-color", "green");
    // $("p:last").css(
    //     "background-color", "blue");
  
//  jquery effects


$("#b1").click(function () { 
    $("#box").animate({ 
        width: "300px" 
    }); 
    $("#box").animate({ 
        height: "300px" 
    }); 
}); 


// $("#btn").click(function () { 
//     $("#Outer").fadeIn(5000); 
// }); 


$(".btn1").click(function () { 
    $("h2").fadeOut(10000) 
}); 

$(".btn2").click(function () { 
    $("h2").fadeIn(5000); 
}); 


$("#p1").click(function () { 
    $(this).fadeTo("slow", 0.33); 
});


$("#btn").click(function () {
    $("#Outer").fadeToggle(1000);
    
});



    $(".b1").click(function () {
        $(".pars").hide();
    });
    $(".b2").click(function () {
        $(".pars").show();
    });
    $(".btoggle").click(function () {
        $(".par").toggle();
    });


    $("p").last().addClass("selected");
  

})



