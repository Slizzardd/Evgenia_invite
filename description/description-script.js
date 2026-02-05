const categories = {
insomnia: {
        title: "Продукти для боротьби з безсонням",
        products: [
            {
                title: "Тепле молоко 🥛",
                image: "https://catalog-cdn.detmir.st/media/76dfgYd-eT9XWiys5WySwHAI3xzFL4kqIwjf_1cyQUk=.jpeg",
                description: {
                    ua: [
                        "Містить триптофан → прекурсор серотоніну та мелатоніну, що регулюють циркадні ритми та сон.",
                        "Кальцій та білки сприяють зниженню нейрональної збудливості та м’язовому розслабленню.",
                        "Теплий напій покращує вегетативний баланс та суб’єктивне відчуття комфорту перед сном."
                    ],
                    de: [
                        "Enthält Tryptophan → Vorstufe von Serotonin und Melatonin, die circadiane Rhythmen und Schlaf regulieren.",
                        "Kalzium und Proteine tragen zur Reduktion neuronaler Erregbarkeit und zur Muskelentspannung bei.",
                        "Das warme Getränk verbessert die vegetative Balance und das subjektive Komfortgefühl vor dem Schlafen."
                    ]
                }
            },
            {
                title: "Банани 🍌",
                image: "https://pngicon.ru/file/uploads/banany.png",
                description: {
                    ua: [
                        "Багаті на магній та калій → сприяють релаксації скелетних та гладких м’язів.",
                        "Вітамін B6 → кофактор у синтезі серотоніну, що підтримує регуляцію настрою та сну.",
                        "Спостерігається м’яка стабілізація автономної нервової системи та зниження психофізіологічного напруження."
                    ],
                    de: [
                        "Reich an Magnesium und Kalium → fördern die Entspannung der Skelett- und glatten Muskulatur.",
                        "Vitamin B6 → Cofaktor bei der Serotoninsynthese, unterstützt die Stimmungs- und Schlafregulation.",
                        "Beobachtet wird eine sanfte Stabilisierung des autonomen Nervensystems und Reduktion psychophysiologischer Anspannung."
                    ]
                }
            },
            {
                title: "Мед 🍯",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS12_Ah5u-pZ_ItaoW26OnpB7Lz5lXQMjjamA&s",
                description: {
                    ua: [
                        "Підвищує глікемію → забезпечує мозок енергією, знижуючи активацію стресових центрів.",
                        "М’яко обволікає слизову горла, зменшуючи подразнення та стимуляцію nociceptor-ів.",
                        "Сприяє релаксації та фізіологічному переходу в сон."
                    ],
                    de: [
                        "Erhöht die Glykämie → versorgt das Gehirn mit Energie und reduziert die Aktivierung der Stresszentren.",
                        "Umhüllt sanft die Hals-Schleimhaut, reduziert Reizungen und die Stimulation der Nozizeptoren.",
                        "Fördert Entspannung und den physiologischen Übergang in den Schlaf."
                    ]
                }
            },
            {
                title: "Трав'яні чаї 🌿",
                image: "https://aquamarket.ua/22913-product_category/beskid-100-g-chaj-trav-yanij-lisova-yagoda-z-ivan-chayem.jpg",
                description: {
                    ua: [
                        "Ромашка (Matricaria chamomilla) → апігенін зв’язується з GABA_A-рецепторами, знижуючи нейрональну збудливість та локальне запалення.",
                        "Меліса (Melissa officinalis) → адаптогенний ефект, зменшує активність симпатичної нервової системи та психофізіологічне збудження.",
                        "Липа (Tilia spp.) → полісахариди обволікають слизову, знижують стимуляцію хеморецепторів та подразнення епітелію.",
                        "Комбінація → сприяє зниженню стресу та фізіологічному підготовленню організму до сну."
                    ],
                    de: [
                        "Kamille (Matricaria chamomilla) → Apigenin bindet an GABA_A-Rezeptoren, reduziert neuronale Erregbarkeit und lokale Entzündungen.",
                        "Melisse (Melissa officinalis) → adaptogene Wirkung, reduziert Aktivität des sympathischen Nervensystems und psychophysiologische Erregung.",
                        "Linde (Tilia spp.) → Polysaccharide umhüllen die Schleimhaut, reduzieren Chemorezeptor-Stimulation und Epithelreizung.",
                        "Kombination → unterstützt die Stressreduktion und die physiologische Vorbereitung des Körpers auf den Schlaf."
                    ]
                }
            },
            {
                title: "Свічки з лавандою або ваніллю 🕯️",
                image: "https://content.rozetka.com.ua/goods/images/big_tile/297024553.jpg",
                description: {
                    ua: [
                        "Лаванда → ароматерапевтичний ефект: знижує рівень кортизолу, стимулює парасимпатичну активність, зменшує тривожність.",
                        "Ваніль → м’яко заспокоює, покращує настрій через сенсорну стимуляцію лимбічної системи.",
                        "Запахи служать сенсорним сигналом для мозку, сприяють активації релаксаційних центрів та підготовці до сну."
                    ],
                    de: [
                        "Lavendel → Aromatherapieeffekt: senkt Cortisol, stimuliert parasympathische Aktivität, reduziert Angst.",
                        "Vanille → beruhigt sanft, verbessert die Stimmung durch sensorische Stimulation des limbischen Systems.",
                        "Gerüche dienen als sensorisches Signal für das Gehirn, fördern die Aktivierung von Entspannungszentren und die Schlafvorbereitung."
                    ]
                }
            }
        ]
    },
    throat: {
        title: "Продукти для боротьби з подразненням горла",
        products: [
                    {
                title: "Тепла вода + мед 💧",
                image: "https://waterguide.com.ua/media/images/Medova_voda_zranku_3.width-800.jpg",
                description: {
                    ua: [
                        "Тепла вода + мед → забезпечує гідратацію слизової оболонки глотки та знижує механічну подразливість рецепторів.",
                        "Мед утворює тонкий в'язкий захисний шар, що перешкоджає дії тригерів подразнення.",
                        "Допомагає зменшити відчуття ксеростомії та сприяє фізіологічному зволоженню епітелію."
                    ],
                    de: [
                        "Warmwasser + Honig → hydratisiert die Schleimhaut des Pharynx und reduziert mechanische Reizbarkeit der Rezeptoren.",
                        "Honig bildet eine dünne viskose Schutzschicht, die die Wirkung von Reizstoffen verhindert.",
                        "Hilft, das Gefühl von Xerostomie zu reduzieren und unterstützt die physiologische Hydratation des Epithels."
                    ]
                }
            },
            {
                title: "Мед + крапля лимона 🍯🍋",
                image: "https://img.freepik.com/premium-photo/fresh-lemon-with-leaf-honey-with-honey-dipper-isolated-white-wall-ingredient-summer-beverage-concept_34435-4068.jpg?semt=ais_hybrid&w=740&q=80",
                description: {
                    ua: [
                        "Мед + лимон → забезпечує демульсійний ефект, обволікаючи слизову та знижуючи стимуляцію nociceptor-ів.",
                        "Лимон містить лимонну кислоту та флавоноїди, які мають легку антисептичну дію.",
                        "Комбінація сприяє зменшенню локальної запальної відповіді та покращує мукоцидну функцію."
                    ],
                    de: [
                        "Honig + Zitrone → bietet einen demulzierenden Effekt, umhüllt die Schleimhaut und reduziert die Stimulation der Nozizeptoren.",
                        "Zitrone enthält Zitronensäure und Flavonoide mit mild antiseptischer Wirkung.",
                        "Die Kombination reduziert die lokale Entzündungsreaktion und verbessert die mukoziliäre Funktion."
                    ]
                }
            },
            {
                title: "Чай з ромашкою, липою, мелісою 🍵",
                image: "https://aquamarket.ua/22913-product_category/beskid-100-g-chaj-trav-yanij-lisova-yagoda-z-ivan-chayem.jpg",
                description: {
                    ua: [
                        "Ромашка (Matricaria chamomilla) → містить апігенін, що зв’язується з GABA_A-рецепторами, знижуючи нейрональну збудливість та локальне запалення слизової.",
                        "Меліса (Melissa officinalis) → проявляє адаптогенний ефект, зменшує активність симпатичної нервової системи та суб’єктивне відчуття дискомфорту.",
                        "Липа (Tilia spp.) → полісахариди та флавоноїди обволікають епітелій, зменшуючи хеморецепторну стимуляцію та подразнення слизової."
                    ],
                    de: [
                        "Kamille (Matricaria chamomilla) → enthält Apigenin, das an GABA_A-Rezeptoren bindet, die neuronale Erregbarkeit und lokale Entzündung der Schleimhaut reduziert.",
                        "Melisse (Melissa officinalis) → wirkt adaptogen, reduziert die Aktivität des sympathischen Nervensystems und das subjektive Unwohlsein.",
                        "Linde (Tilia spp.) → Polysaccharide und Flavonoide umhüllen das Epithel, reduzieren chemische Rezeptorstimulation und Schleimhautreizungen."
                    ]
                }
            }
        ]
    }
};


const productsContainer = document.getElementById("productsContainer");
const productsList = document.getElementById("productsList");
const categoryTitle = document.getElementById("categoryTitle");

document.getElementById("insomniaBtn").addEventListener("click", () => {
    renderCategory("insomnia");
});

document.getElementById("throatBtn").addEventListener("click", () => {
    renderCategory("throat");
});

function renderCategory(catKey) {
    const category = categories[catKey];
    categoryTitle.textContent = category.title;
    productsList.innerHTML = ""; // очищаем контейнер

    category.products.forEach(product => {
        const item = document.createElement("div");
        item.classList.add("product");

        item.innerHTML = `
            <div class="product-header">
                <img src="${product.image}" alt="">
                <div class="product-text">
                    <h3>${product.title}</h3>
                    <p>Натисни, щоб дізнатися більше</p>
                </div>
            </div>

            <div class="product-details">
                <div class="lang-buttons">
                    <button data-lang="ua">Перекласти українською</button>
                    <button data-lang="de">Ins Deutsche übersetzen</button>
                </div>

                <ul class="description-list">
                    ${product.description.ua.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;

        const descriptionList = item.querySelector(".description-list");
        const langButtons = item.querySelectorAll(".lang-buttons button");

        langButtons.forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const lang = btn.dataset.lang;
                descriptionList.innerHTML = product.description[lang].map(item => `<li>${item}</li>`).join('');
            });
        });

        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });

        productsList.appendChild(item);
    });

    productsContainer.style.display = "block";
}
