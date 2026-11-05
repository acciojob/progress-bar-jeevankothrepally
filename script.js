//your JS code here. If required.
let circles = document.querySelectorAll(".circle");

let prev = document.getElementById("prev");
let next = document.getElementById("next");

let progress = document.getElementById("progress");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;
    update();
});

prev.addEventListener("click", () => {
    currentActive--;
    update();
});

function update() {

    circles.forEach((circle, index) => {

        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }

    });

    progress.style.width =
        ((currentActive - 1) / (circles.length - 1)) * 100 + "%";

    prev.disabled = currentActive === 1;

    next.disabled = currentActive === circles.length;
}