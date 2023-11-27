//pega cada elemento de botão e armazena cada uma em uma variável
var bt1 = document.querySelector('#bt1');
var bt2 = document.querySelector('#bt2');
var bt3 = document.querySelector('#bt3');
var bt4 = document.querySelector('#bt4');
var bt5 = document.querySelector('#bt5');
var bt6 = document.querySelector('#bt6');

//pega as imagem de cada área e armazena cada uma em uma variável
var img1 = document.getElementById('short');
var img2 = document.getElementById('camiseta');
var img3 = document.getElementById('top');

//pega o elemento de audio
var audio = document.getElementById('audio');

//cria uma função pra toca e deixa em loop o audio
function tocar() {
    audio.loop = true;
    audio.play();
}

//quando tiver um click em quanquer parte do site é começa a tocar a musica
document.addEventListener('click', function(event) {
    tocar()
});

//armazena cada link das imagens em um vetor
var short = ['https://i.pinimg.com/564x/86/0d/cf/860dcf6af981d21d64246e6eeb0af688.jpg', 'https://i.pinimg.com/564x/88/97/c4/8897c428f71ff288e819cd15ada95830.jpg'];

var camiseta = ['https://i.pinimg.com/564x/14/5a/7e/145a7e83f482ba33ca48467e6a432dcb.jpg', 'https://i.pinimg.com/564x/38/69/2c/38692c404c2fb8414e9fff6bc4d1f914.jpg'];

var cropped = ['https://i.pinimg.com/564x/0b/a0/07/0ba007de2e4c60c84e31770202732bea.jpg', 'https://i.pinimg.com/564x/5e/f3/c7/5ef3c70f0b94b76f43270d40a9e8272e.jpg']

//cria variável para contralar a função de passar()
x = 0;
y = 0;
z = 0;

//função para mudar a imagem
function passar(img, lista, nunber){
    if (nunber == 0){
        img.src = lista[1];
        nunber = 1;
    }
    else{
        img.src = lista[0];
        nunber = 0;
    }
    return nunber;
}

//quando tiver um click em um botão mudará a sua respectiva imagem
bt1.addEventListener('click', function(){
    x = passar(img1, short, x);
})
bt2.addEventListener('click', function(){
    x = passar(img1, short, x);
})
bt3.addEventListener('click', function(){
    y = passar(img2, camiseta, y);
})
bt4.addEventListener('click', function(){
    y = passar(img2, camiseta, y);
})
bt5.addEventListener('click', function(){
    z = passar(img3, cropped, z);
})
bt6.addEventListener('click', function(){
    z = passar(img3, cropped, z);
})