 const escolhas = document.querySelectorAll(".escolha")
    escolhas.forEach(tags=> {
    tags.addEventListener("click", (e) => {
        e.preventDefault()  
        
        console.log(tags)

    } )
 
})