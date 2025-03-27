//variables
let underlines = document.getElementsByClassName("vis-unerline")
let path = window.location.pathname;
let pageName = path.split("/").pop();
let currentPageUnderline

//get current page underline
for (let i of underlines){
    if (pageName == i.getAttribute("data-page")) currentPageUnderline = i
}

//place grey underline on current page
if (currentPageUnderline){
    currentPageUnderline.style.display = "none";
    currentPageUnderline.parentElement.style.backgroundColor = "rgba(126, 126, 126, 0.77)"
}
else alert("current page underline not found")

// fade stuff
function checkIfVisible(target){
    let eTop = target.offsetTop
    let eBottom = eTop + target.offsetHeight // distancia hasta la parte superior mas la altura del elm.
    
    let screenTop = window.pageYOffset
    let screenBottom = screenTop + window.innerHeight

    return(eTop < screenBottom && eBottom > screenTop)
}

let fadies = document.getElementsByClassName("fadee")
let expandies = document.getElementsByClassName("expand")

window.addEventListener("scroll", () => {
    for (let i of fadies){
        if (checkIfVisible(i)){
            i.style.opacity = "100%"
            i.style.transform = "scale(100%)"
        }
    }

    for (let i of expandies){
        if (checkIfVisible(i)){
            i.style.opacity = "100%"
            i.style.transform = "scale(100%)"
        }
    }
})