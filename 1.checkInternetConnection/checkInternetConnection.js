// make a div ssection for out msg
let element = document.createElement("div")

// add our element to the top of this content
document.querySelector(".content").prepend(element)

// show online msg anf use bootstrap classes
window.addEventListener('online', (event) => {
    element.textContent = "Online"
    element.className = "alert"
    element.classList.add("alert-success")
});

// show offline msg anf use bootstrap classes
window.addEventListener('offline', (event) => {
    element.textContent = "Offline"
    element.className = "alert"
    element.classList.add("alert-danger")
});