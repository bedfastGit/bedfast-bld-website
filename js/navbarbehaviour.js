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