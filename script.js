document.addEventListener("DOMContentLoader", function(event) {
    let myHeader = document.getElementById("header-id")

    setTimeout(() => {
        myHeader.classList.remove("hidden");
    }, 3000)
});