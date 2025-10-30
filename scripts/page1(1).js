const btn = document.querySelector('.btnDarkMode')

btn.addEventListener('click', btnDarkMode)

function btnDarkMode() {
    const btnCircle = document.querySelector('.circle');
    btn.classList.toggle('eventBtn')
    btnCircle.classList.toggle('eventBtnCircle')
    renderDarkMode()
}

function renderDarkMode() {

  const [
    $body,
    $info,
    $menuItem,
    $menuItemH3,
    $instagram,
    $menuItemP,
    $menuItemPrice,

  ] = [
    document.querySelector("body"),
    document.querySelector('.info'),
    document.querySelectorAll('.menu-item'),
    document.querySelectorAll('.menu-item-h3'),
    document.querySelector('.instagram'),
    document.querySelectorAll('.menu-item-p'),
    document.querySelectorAll('.price'),

  ]
  
  $body.classList.toggle("black")
  $body.classList.toggle('darkModeSecondaryText')
  $info.classList.toggle('darkModeContrast')
  $instagram.classList.toggle('darkModeMainText')
  $menuItem.forEach(item => {
    item.classList.toggle('darkModeContrast')
  })
  $menuItemH3.forEach(item => {
    item.classList.toggle('darkVioletText')
  })

  $menuItemP.forEach(tag => {
    tag.classList.toggle('darkModeMainText')
  })

  $menuItemPrice.forEach(tag => {
    tag.classList.toggle('darkModeMainText')
  })

}


 

