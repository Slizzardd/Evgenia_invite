const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const container = document.getElementById("container");
const buttons = document.getElementById("buttons");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const finalGif = document.getElementById("finalGif");

let scale = 1;
let offset = 0;
let step = 0;

/* NEIN — кнопка Ja растёт, Nein отъезжает */
noBtn.addEventListener("click", () => {
    scale += 0.3;
    offset += 20;

    yesBtn.style.transform = `scale(${scale})`;
    noBtn.style.transform = `translateX(${offset}px)`;

    if (scale >= 6) {
        noBtn.style.display = "none";
    }
});

/* JA — сценарии */
yesBtn.addEventListener("click", () => {
    step++;

    // Первый JA → меняем гифку
    if (step === 1) {
        title.textContent = "А суші теж будемо їсти? 🍣";

        // переключаем гифки
        image1.style.display = "none";
        image2.style.display = "block";

        // сброс трансформаций
        scale = 1;
        offset = 0;
        yesBtn.style.transform = "scale(1)";
        noBtn.style.transform = "translateX(0)";
        noBtn.style.display = "inline-block";
    }

    // Второй JA → финальная гифка
    else if (step === 2) {
        container.style.display = "none";
        finalGif.style.display = "block";
    }
});
