$(document).ready(function() {  

    //_____________________________________________________________________________________________
    //AJAX CAT
    // Cat API Website : https://thecatapi.com/

    const meowSound = new Audio("asset/audio/meow.wav"); //variable to grab mewo sample from assets
    $('.btn').click(e => meowSound.play()); //plays dog sample when clicked


    var queryCat =  'https://api.thecatapi.com/v1/images/search?limit=100' // link to cat API

    $.ajax({
        url: queryCat, 
        method: "GET",
        header: "x-api-key: 7f95dde4-58f5-4c1e-98bc-232e911bfe50"   
    })
    .then(function(response) { 

        console.log(response) //store object to access information in console

        $(".btn").on("click", function() { //on click of cat button function

            var randomNum1 = Math.floor(Math.random()* 100) + 1; //random number between 1 and 100
            var randomNum2 = Math.floor(Math.random()* 100) + 1; //random number between 1 and 100

            var imgURL1 = response[randomNum1].url; //grab image url at random number index
            var imgURL2 = response[randomNum2].url; //grab image url at random number index

            var newImg1 = $("<img>").addClass(".img-responsive").attr("src", imgURL1).width(500).height(500).css("border", "20px solid rgb(41,86,211)").css("box-shadow", "30px 30px lightgray"); //create image tag with attributes
            var newImg2 = $("<img>").addClass(".img-responsive").attr("src", imgURL2).width(500).height(500).css("border", "20px solid rgb(41,86,211)").css("box-shadow", "30px 30px lightgray"); //create image tag with attributes

            $("#img1").empty()
            $("#img1").append(newImg1); //append random image 1
            $("#img2").empty()
            $("#img2").append(newImg2); //append random image 2

        });
   
    });


    //_____________________________________________________________________________________________
    //DYNAMIC ELEMENTS

    var h1Tag = $("<h1>").text("Press the Button for New Cat Pictures!")

    $("header").append(h1Tag)

});



