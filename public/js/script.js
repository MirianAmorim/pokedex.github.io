const closeText = document.querySelector("#close")
const text = document.querySelector("#text")

closeText.addEventListener("click", function (){
    text.style.display = "none"
})

setTimeout(() => {
    text.style.display = "none"
}, 5000)