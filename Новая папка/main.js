let counter = document.getElementById("counter");
let plusBtn = document.getElementById("plusBtn");
let resetBtn = document.getElementById("resetBtn");

let count = Number(localStorage.getItem("clickCount")) || 0;

counter.textContent = count;

plusBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
    localStorage.setItem("clickCount", count);
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
    localStorage.setItem("clickCount", count);
});