let light = document.querySelector("#light")
let onbtn = document.querySelector("#onbtn")
let offbtn = document.querySelector("#offbtn")

onbtn.addEventListener("click", function(){
    light.style.backgroundColor = "yellow"
    onbtn.style.backgroundColor = "black"
    offbtn.style.backgroundColor = ""
})


offbtn.addEventListener("click", function(){
    light.style.backgroundColor = "white"
    offbtn.style.backgroundColor = "black"
    onbtn.style.backgroundColor = ""
})