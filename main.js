let light = document.querySelector("#light")
let onbtn = document.querySelector("#onbtn")
let offbtn = document.querySelector("#offbtn")

onbtn.addEventListener("click", function(){
    light.style.backgroundColor = "blue"
    onbtn.style.backgroundColor = "black"
    offbtn.style.backgroundColor = ""
})


offbtn.addEventListener("click", function(){
    light.style.backgroundColor = "red"
    offbtn.style.backgroundColor = "black"
     onbtn.style.backgroundColor = ""
})