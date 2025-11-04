
const btn = document.querySelector('.btnDarkMode');
const $body = document.body;
const imagemTema = document.querySelector('.imagem-tema');


btn.addEventListener('click', btnDarkMode);

function btnDarkMode() {
    const btnCircle = document.querySelector('.circle');

    btn.classList.toggle('eventBtn');
    btnCircle.classList.toggle('eventBtnCircle');
    
    
    renderDarkMode();

    atualizarIconeTema(); 
}


function renderDarkMode() {

    
    const [
        $info,
        $menuItem,
        $menuItemH3,
        $instagram,
        $menuItemP,
        $menuItemPrice,
        $fotos,
        $icone_tradução 
    ] = [
        document.querySelector('.info'),
        document.querySelectorAll('.menu-item'),
        document.querySelectorAll('.menu-item-h3'),
        document.querySelector('.instagram'),
        document.querySelectorAll('.menu-item-p'),
        document.querySelectorAll('.price'),
        document.querySelectorAll('.fotos'),
        document.querySelectorAll('.icone_tradução'),
    ];

 
    $body.classList.toggle("black");
    $body.classList.toggle('darkModeSecondaryText');
    $info.classList.toggle('darkModeContrast');
    $instagram.classList.toggle('darkModeMainText');

    $menuItem.forEach(item => { item.classList.toggle('darkModeContrast') });
    $menuItemH3.forEach(item => { item.classList.toggle('darkVioletText') });
    $menuItemP.forEach(tag => { tag.classList.toggle('darkModeMainText') });
    $menuItemPrice.forEach(tag => { tag.classList.toggle('darkModeMainText') });
    $fotos.forEach(tag => { tag.classList.toggle('darkModeContrast') });
    $icone_tradução.forEach(item => { item.classList.toggle('darkModeContrast') });
}


function atualizarIconeTema() {
  
    if ($body.classList.contains('black')) {
        imagemTema.src = '../imagem/icone_tradução(1).png';
    } else {
        imagemTema.src = '../imagem/icone_traduçao.png'; 
    }
}

window.onload = atualizarIconeTema;