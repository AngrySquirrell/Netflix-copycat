const offset = 304

function goRight (container) {
    document.getElementById(container).scrollLeft += offset;
};
function goLeft (container) {
    document.getElementById(container).scrollLeft -= offset;
};


window.onload = function () { 

        //FOR YOU

    console.log(Math.floor(Math.random() * 10));
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
        './assets/Series/SkyHighSurvival.jpg',
        './assets/Series/Viking.jpg'
    ];
  var i = 0;
    var MyList = document.getElementById("for_you")
    while (i < 10) {
      i++;
      MyList.innerHTML += ('afterend', '<div><div class="w-72 "><a href="#"><img src="' + images[Math.floor(Math.random() * images.length)] + '" class="w-72 rounded"></a></div></div>')
    }

        //JAPANESE ANIMATION

    console.log(Math.floor(Math.random() * 10));
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
    while (i < 10) {
      i++;
      MyList.innerHTML += ('afterend', '<div><div class="w-72 "><a href="#"><img src="'+ images[Math.floor(Math.random() * images.length)] + '" class="w-72 rounded"></a></div></div>')
    }

        //FILMS DE SF

    console.log(Math.floor(Math.random() * 10));
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
    while (i < 10) {
        i++;
        MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="' + images[Math.floor(Math.random() * images.length)] + '" class="w-72 rounded"></a></div></div>')
    } 

        //STUDIOS  GHIBLI

    console.log(Math.floor(Math.random() * 10));
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
        while (i < 10) {
          i++;
          MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="' + images[Math.floor(Math.random() * images.length)] + '" class="w-72 rounded"></a></div></div>')
        }

        //Dessins Animes

    console.log(Math.floor(Math.random() * 10));
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
        './assets/Series/AstérixetObélix.jpg',
        './assets/Series/FamilleLoud.jpg',
        './assets/Series/CodeLyoko.jpg',
        './assets/Series/Garfield.jpg',
        './assets/Series/TotalySpies.jpg',
        './assets/Series/VoyageVersLaLune.jpg'
        ];
      i= 0;
        var MyList = document.getElementById("dessins_animes")
        while (i < 10) {
          i++;
          MyList.innerHTML += ('afterend', '<div><div class="w-72"><a href="#"><img src="' + images[Math.floor(Math.random() * images.length)] + '" class="w-72 rounded"></a></div></div>')
        }
  }