// V1.0 的七種固定餐點；畫面與抽選共用同一份資料。
const meals = [
  { name: "咖哩飯", emoji: "🍛", description: "濃郁醬香，暖心又飽足" },
  { name: "牛肉麵", emoji: "🍜", description: "一碗熱湯，滿滿幸福" },
  { name: "水餃", emoji: "🥟", description: "一口一顆，簡單滿足" },
  { name: "漢堡", emoji: "🍔", description: "大口咬下，快樂加倍" },
  { name: "披薩", emoji: "🍕", description: "起司牽絲，好心情開始" },
  { name: "便當", emoji: "🍱", description: "飯菜齊全，日常好夥伴" },
  { name: "義大利麵", emoji: "🍝", description: "捲起麵條，享受這一餐" },
];

const mealList = document.querySelector("#meal-list");
const decideButton = document.querySelector("#decide-button");
const welcomeArt = document.querySelector("#welcome-art");
const resultEmoji = document.querySelector("#result-emoji");
const resultCaption = document.querySelector("#result-caption");
const resultName = document.querySelector("#result-name");
const resultDescription = document.querySelector("#result-description");

// 使用原生 DOM API 顯示餐點，不需框架或外部套件。
meals.forEach((meal) => {
  const item = document.createElement("li");
  item.className = "meal-option";

  const icon = document.createElement("span");
  icon.className = "meal-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = meal.emoji;

  const copy = document.createElement("div");
  const name = document.createElement("h3");
  name.className = "meal-name";
  name.textContent = meal.name;

  const description = document.createElement("p");
  description.className = "meal-description";
  description.textContent = meal.description;

  copy.append(name, description);
  item.append(icon, copy);
  mealList.append(item);
});

decideButton.addEventListener("click", () => {
  // 每次都從全部七種餐點抽選，允許連續抽到相同餐點。
  const randomIndex = Math.floor(Math.random() * meals.length);
  const selectedMeal = meals[randomIndex];

  welcomeArt.setAttribute("hidden", "");
  resultEmoji.hidden = false;
  resultEmoji.textContent = selectedMeal.emoji;
  resultCaption.textContent = "今天就吃這個！";
  resultName.textContent = selectedMeal.name;
  resultDescription.textContent = "就決定是它了，開動吧！";

  Array.from(mealList.children).forEach((item, index) => {
    item.classList.toggle("is-selected", index === randomIndex);
  });
});
