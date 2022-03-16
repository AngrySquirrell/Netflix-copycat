const offset = 304

function goRight (container) {
    document.getElementById(container).scrollLeft += offset;
};
function goLeft (container) {
    document.getElementById(container).scrollLeft -= offset;
};

const images_for_you = [
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
    './assets/Series/Viking.jpg']; // 20
const images_japanese_animation = [];
const images_netflix_originals = [];
const images_films_sf = [];
const images_studios_ghibli = [];
const images_dessins_animes = [];

function random_array(iterations){
    var randomArray = [];
    for (let i = 0; i<iterations; i++){
        randomArray.push(Math.floor(Math.random()*iterations))
    }
    return randomArray
}

function attribute_for_you(number_of_images){
    let randArr = random_array(number_of_images)
    let index_for_you = [
        'for_you_1',
        'for_you_2',
        'for_you_3',
        'for_you_4',
        'for_you_5',
        'for_you_6',
        'for_you_7',
        'for_you_8',
        'for_you_9',
        'for_you_10',
        'for_you_11',
        'for_you_12',
        'for_you_13',
        'for_you_14'
    ]
    
    for (let i = 0; i < number_of_images; i++){
        console.log(images_for_you[randArr[i]])
        console.log(randArr[i])
        document.getElementsById(index_for_you[i]).src = images_for_you[randArr[i]]
    } 
}
attribute_for_you(10)