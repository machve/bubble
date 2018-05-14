


document.querySelectorAll("#app div").forEach(function (div) {
    // div.style.transform = "translate (50vw, 50vh)";
    div.addEventListener("mouseenter", function () {
        div.style.transform = `translate(${Math.random()*100}vw, ${Math.random()*100}vh)`;
        div.style.backgroundColor =`hsl(${Math.random()*100},${Math.random()*100}%, ${Math.random()*100}%)`;
    })
})