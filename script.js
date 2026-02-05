const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const container = document.getElementById("container");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");

const finalScreen = document.getElementById("finalScreen");

let scale = 1;
let offset = 0;
let step = 0;

/* Ні — Так росте, Ні відʼїжджає */
noBtn.addEventListener("click", () => {
    scale += 0.3;
    offset += 20;

    yesBtn.style.transform = `scale(${scale})`;
    noBtn.style.transform = `translateX(${offset}px)`;

    if (scale >= 6) {
        noBtn.style.display = "none";
    }
});

/* Так — сценарій */
yesBtn.addEventListener("click", () => {
    step++;

    if (step === 1) {
        title.textContent =
            "А ти розумієш, що якщо ти будеш хворіти, то в суботу ми нікуди не поїдемо? 🥲";
        image1.style.display = "none";
        image2.style.display = "block";
    }

    else if (step === 2) {
        title.textContent = "Чи хочеш ти одужати? 🤧";
        image2.style.display = "none";
        image3.style.display = "block";
    }

    else if (step === 3) {
        title.textContent =
            "А ти знала, що не тільки ліки допомагають одужати? 😏";
        image3.style.display = "none";
        image4.style.display = "block";
    }

    else if (step === 4) {
        container.style.display = "none";
        finalScreen.style.display = "flex";
        return;
    }

    // сброс для следующего этапа
    scale = 1;
    offset = 0;
    yesBtn.style.transform = "scale(1)";
    noBtn.style.transform = "translateX(0)";
    noBtn.style.display = "inline-block";
});
