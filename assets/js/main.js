const offset = 304;
const arr = [];

function goRight (container) {
    document.getElementById(container).scrollLeft += offset;
};
function goLeft (container) {
    document.getElementById(container).scrollLeft -= offset;
};

// function onMouseOver(){
//    document.getElementById('bannerImage').classList.add('hidden')
//    document.getElementById('bannerVideo').classList.remove('hidden')
//    document.getElementById('bannerVideo').play()
// }
// function onMouseOut(){
//    document.getElementById('bannerImage').classList.add('hidden')
//    document.getElementById('bannerVideo').classList.remove('hidden')
//    document.getElementById('bannerVideo').pause()
// }

$(document).ready(function () {
    $("#video").css("display", "none"); //HIDE THE VIDEO INITIALLY
    $(".thumbnail").hover(function () {
            $(".head-img").css("display", "none");
            $("#video").css("display", "block"); //SHOW THE VIDEO ON HOVER
            $(this).children("video")[0].play();
            }, 

    function () {
        var el = $(this).children("video")[0];
        el.pause();
        $("#video").css("display", "none");
        $(".head-img").css("display", "block");
    });
});

// document.getElementById("banner").addEventListener("mouseover", function() {
// 	document.getElementById('bannerImage').classList.add('hidden')
//     document.getElementById('bannerVideo').classList.remove('hidden')
// });

// document.getElementById("banner").addEventListener("mouseleave", function() {
//     document.getElementById('bannerImage').classList.add('hidden')
//     document.getElementById('bannerVideo').classList.remove('hidden')
// });



//Darken the navbar on scroll
$(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 120) {
        $("#navbar").css("backgroundColor", "black");
      } else if ($(window).scrollTop() > 20){
        $("#navbar").css("backgroundColor", "#181818");
      }
      else {
        $("#navbar").css("backgroundColor", "transparent");
      }
    });
  });

// Gererate/Erase random number + no doubles
function randNumber (arg, it){
    switch (arg) {
        case "rm":
            console.log("Case RM selected")
            console.log(arr)
            while (arr.length > 0){
                arr.shift();
            }
        break;
        case "":
            console.log("Case '' selected")
            let r = Math.floor(Math.random() * it)
            let i = 0
            while(i != it){
                r = Math.floor(Math.random() * it)
                if (arr.indexOf(r) != -1) {
                    console.log(arr.indexOf(r) + " in if "+ arr + " ")
                    i--
                } else {
                    console.log(arr.indexOf(r) + " in else "+ arr)
                    arr.push(r)
                    return r;
                }
            }
        break;
    }
}

//Create div with images with random order
window.onload = function () { 

        //FOR YOU

    var images = [
        './assets/Series/Aggretsuko.jpg',
        './assets/Series/AngelBeast.jpg',
        './assets/Series/Arcane.jpg',
        './assets/Series/BreakingBad.jpg',
        './assets/Series/BlackMirror.jpg',
        './assets/Series/BluePeriod.jpg',
        './assets/Series/Django.png',
        './assets/Series/GreatPretender.jpg',
        './assets/Series/Hilda.jpg',
        './assets/Series/JeVeuxMangerTonPancreas.jpg',
        './assets/Series/LaLigneVerte.jpg',
        './assets/Series/LeCupheadShow.jpg',
        './assets/Series/LesEnfantsDeLaBalaine.jpg',
        './assets/Series/LeVoyageTeChihiro.jpg',
        './assets/Series/QuoiQuilArriveJeVousAime.jpg',
        './assets/Series/NosMotsCommeDesBulles.jpg',
        './assets/Series/SkyHighSurvival.jpg',
        './assets/Series/toradora.jpg',
        './assets/Series/CodeLyoko.jpg',
        './assets/Series/Viking.jpg'
    ]; //20
  var i = 0;
    var MyList = document.getElementById("for_you")
    while (i < images.length) {
      i++;
      MyList.innerHTML += ('afterend', '<div><div class="w-72 "><a href="#"><img src="' + images[randNumber("",images.length)] + '" class="w-72 rounded"></a></div></div>')
    }
    randNumber("rm")
        //JAPANESE ANIMATION

    var images = [
        './assets/Series/GreatPretender.jpg',
        './assets/Series/BNA.jpg',
        './assets/Series/JeVeuxMangerTonPancreas.jpg',
        './assets/Series/LaCollineAuxCoquelicots.jpg',
        './assets/Series/NGNL.jpg',
        './assets/Series/LeVoyageTeChihiro.jpg',
        './assets/Series/SheRa.jpg',
        './assets/Series/Radiant.jpg',
        './assets/Series/toradora.jpg',
        './assets/Series/YourName.jpg',
        './assets/Series/VioletEvergarden.jpg',
        './assets/Series/LesEnfantsDeLaBalaine.jpg',
        './assets/Series/LoinDeToiPresDeMoi.jpg',
        './assets/Series/PrincessMononoke.jpg',
        './assets/Series/Baki.jpg',
        './assets/Series/Aggretsuko.jpg',
        './assets/Series/MonVoisinTotoro.jpg',
        './assets/Series/NosMotsCommeDesBulles.jpg',
        './assets/Series/PrincessMononoke.jpg',
        './assets/Series/SouvenirsDemarnie.jpg'
    ];
  i = 0;
    var MyList = document.getElementById("japanese_animation")
    while (i < images.length) {
      i++;
      MyList.innerHTML += ('afterend', '<div><div class="w-72 "><a href="#"><img src="'+ images[randNumber("",images.length)] + '" class="w-72 rounded"></a></div></div>')
    }
    randNumber("rm")
        //FILMS DE SF

    var images = [
            './assets/Series/BlackSummer.jpg',
            './assets/Series/LeChateauAmbulant.jpg',
            './assets/Series/MonVoisinTotoro.jpg',
            './assets/Series/NGNL.jpg',
            './assets/Series/Radiant.jpg',
            './assets/Series/Rick&Morty.jpg',
            './assets/Series/SheRa.jpg',
            './assets/Series/SquidGame.jpg',
            './assets/Series/WarDoggo.jpg',
            './assets/Series/BlackMirror.jpg',
            './assets/Series/BreakingBad.jpg',
            './assets/Series/Braves.jpg',
            './assets/Series/BNA.jpg'
    ];
    i= 0;
    var MyList = document.getElementById("films_sf")
    while (i < images.length) {
        i++;
        MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="' + images[randNumber("",images.length)] + '" class="w-72 rounded"></a></div></div>')
    } 
    randNumber("rm")
        //STUDIOS  GHIBLI

    var images = [
        './assets/Series/LaCollineAuxCoquelicots.jpg',
        './assets/Series/LeChateauAmbulant.jpg',
        './assets/Series/LeVoyageTeChihiro.jpg',
        './assets/Series/MonVoisinTotoro.jpg',
        './assets/Series/PonyoSurLaFalaise.jpg',
        './assets/Series/SouvenirsDemarnie.jpg',
        './assets/Series/PrincessMononoke.jpg',
        './assets/Series/Arrietty.jpg',
        './assets/Series/LeRoyaumedesChats.jpg',
        './assets/Series/LeVentSeLeve.jpg',
        './assets/Series/MaryetlaFleurdelaSorciere.png',
        './assets/Series/NausicaadelaValleeduVent.jpg',
        './assets/Series/PorcoRosso.jpg',
        './assets/Series/SitutendlOreille.jpg'
        ];
      i= 0;
        var MyList = document.getElementById("studios_ghibli")
        while (i < images.length) {
          i++;
          MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="' + images[randNumber("",images.length)] + '" class="w-72 rounded"></a></div></div>')
    }
    randNumber("rm")
        //Dessins Animes

    var images = [
        './assets/Series/Arcane.jpg',
        './assets/Series/Aggretsuko.jpg',
        './assets/Series/AngelBeast.jpg',
        './assets/Series/Baki.jpg',
        './assets/Series/BluePeriod.jpg',
        './assets/Series/GreatPretender.jpg',
        './assets/Series/Hilda.jpg',
        './assets/Series/jojo.jpg',
        './assets/Series/LeCupheadShow.jpg',
        './assets/Series/LegoNinjago.jpg',
        './assets/Series/YourName.jpg',
        './assets/Series/NGNL.jpg',
        './assets/Series/jojo.jpg',
        './assets/Series/AsterixetObelix.jpg',
        './assets/Series/FamilleLoud.jpg',
        './assets/Series/CodeLyoko.jpg',
        './assets/Series/Garfield.jpg',
        './assets/Series/TotalySpies.jpg',
        './assets/Series/VoyageVersLaLune.jpg'
        ];
      i= 0;
        var MyList = document.getElementById("dessins_animes")
        while (i < images.length) {
          i++;
          MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="' + images[randNumber("",images.length)] + '" class="w-72 rounded"></a></div></div>')
        }
  }