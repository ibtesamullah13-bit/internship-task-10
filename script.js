
let count = 0;

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseFiveBtn = document.getElementById("increaseFiveBtn");

function updateCounter() {
    counter.innerText = count;

    if (count > 0) {
        counter.style.color = "green";
    } else if (count < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "#64748b";
    }
}

increaseBtn.addEventListener("click", function () {
    count = count + 1;
    updateCounter();
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count = count - 1;
        updateCounter();
    }
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});

increaseFiveBtn.addEventListener("click", function () {
    count = count + 5;
    updateCounter();
});
