var queryDogBreed = "https://dog.ceo/api/breed/hound/images"; // link to dog breed API
      
const barkSound = new Audio("asset/audio/bark.wav"); //variable to grab dog bark sample from assets
$('.btn').click(e => barkSound.play()); //plays dog sample when clicked


$(".btn").on("click", function() { //click on "I Love Dogs" button to generate random dog images.
        
    $.ajax({
        url: queryDogBreed, 
        method: "GET"
    })
    .then(function(response) { 
        var randomnum = Math.floor(Math.random() * 1000) //randomizes first dog picture
        var randomnum2 = Math.floor(Math.random() * 1000) //randomizes second dog picture
        console.log(randomnum);

        var img = $("<img>").attr("src", response.message[randomnum]).width(500).height(500).css("border", "20px solid rgb(41,86,211)").css("box-shadow", "30px 30px lightgray").append("#picture"); 
          $("#picture").empty() //clears previous picture
          $("#picture").append(img); //appends new picture

        var img2 = $("<img>").attr("src", response.message[randomnum2]).width(500).height(500).css("border", "20px solid rgb(41,86,211)").css("box-shadow", "30px 30px lightgray").append("#picture2");
          $("#picture2").empty()
          $("#picture2").append(img2);

        });
        

    }) 