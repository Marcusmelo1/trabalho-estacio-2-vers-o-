const btn = document.querySelector(".btnDarkMode");

function btnDarkMode() {
  const btnCircle = document.querySelector(".circle");
  btn.classList.toggle("eventBtn")
  btnCircle.classList.toggle("eventBtnCircle")
  renderDarkMode()
}

function renderDarkMode() {

  const [
    $body,
    $sectionRestaurants,
    $card,
    $features,
    $feature,
    $footer,
    $txtTittle,
    $paragraph,
    $sectionRestaurantsTittle,
    $nameRestaurant,
    $infoRestaurant,
    $tittleFeature,
    $infoFeature
  ] = [
    document.querySelector("body"),
    document.querySelector(".restaurantes"),
    document.querySelectorAll(".card"),
    document.querySelector(".features"),
    document.querySelectorAll(".feature"),
    document.querySelector("footer"),
    document.querySelector(".subtitulo"),
    document.querySelector(".paragraph"),
    document.querySelector(".restaurantes > h2"),
    document.querySelectorAll(".nameRestaurant"),
    document.querySelectorAll(".infoRestaurant"),
    document.querySelectorAll(".tittleFeature"),
    document.querySelectorAll(".infoFeature")
  ]
  
  $body.classList.toggle("black")
  $sectionRestaurants.classList.toggle("darkModeContrast")
  $card.forEach(tag => {
    tag.classList.toggle("black")
  })
  $features.classList.toggle("black")
  $feature.forEach(tag => {
    tag.classList.toggle("darkModeContrast")
  })
  $footer.classList.toggle("darkModeContrast")
  $txtTittle.classList.toggle("darkModeMainText")
  $paragraph.classList.toggle("darkModeSecondaryText")
  $sectionRestaurantsTittle.classList.toggle("darkModeMainText")
  $nameRestaurant.forEach(tag => {
    tag.classList.toggle("darkModeMainText")
  })
  $infoRestaurant.forEach(tag => {
    tag.classList.toggle("darkModeSecondaryText")
  })
  $tittleFeature.forEach(tag => {
    tag.classList.toggle("darkModeMainText")
  })
  $infoFeature.forEach(tag => {
    tag.classList.toggle("darkModeSecondaryText")
  })
}

btn.addEventListener("click", () => {
  btnDarkMode()
})

// Preciso ter uma variavel que seja o controle do modo escuro, para ser armazenado no localstorage para
// identificar no site inteiro quando estiver no modo escuro.