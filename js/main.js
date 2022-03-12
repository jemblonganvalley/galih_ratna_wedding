
window.addEventListener("load", async ()=>{
    var bMusic = new Audio('https://stafaband123.com/app.php?id=338290153')
	let pl = await bMusic.play()
})


let menu_icon = document.getElementById("menu_icon")
let close_icon = document.getElementById("close_icon")

menu_icon.addEventListener("click" , ()=>{
    let menu = document.getElementById("menu")
    menu.style.display = "flex"
})

close_icon.addEventListener("click", ()=>{
    let menu = document.getElementById("menu")
    menu.style.display = "none"
})

function closeMenu(){
    let menu = document.getElementById("menu")
    menu.style.display = "none"
}
