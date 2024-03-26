function changeText() {
  var changingText = document.getElementById("changingText");
  var textArray = [
    "Computer Engineer",
    "Frontend Developer",
    "Backend Developer",
  ];
  var randomIndex = Math.floor(Math.random() * textArray.length);
  changingText.innerHTML = textArray[randomIndex];
}

setInterval(changeText, 3000);

document.getElementById("anasayfa-link").addEventListener("click", function () {
  document.querySelector("myMain").scrollIntoView({ behavior: "smooth" });
});

var fullText = document.querySelector(".myArticle p").textContent;

// İlk olarak 358 karakter göster
var shortText = fullText.slice(0, 358);
document.querySelector(".myArticle p").textContent = shortText;

// "Devamını Oku" linkini ekle
var readMore = document.createElement("span");
readMore.textContent = "Devamını okuyunuz...";
readMore.classList.add("read-more");
document.querySelector(".myArticle").appendChild(readMore);

// "Devamını Oku" linkine tıklandığında tam metni göster
readMore.addEventListener("click", function () {
  document.querySelector(".myArticle p").textContent = fullText;
  readMore.style.display = "none"; // "Devamını Oku" linkini gizle
});
