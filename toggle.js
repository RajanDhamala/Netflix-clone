
let currentVisibleElement = null;
let currentParentElement = null;

function toggleContent(e, parentClass, content) {
    e.preventDefault();

    const parentElement = document.querySelector(parentClass);

    if (currentVisibleElement && currentParentElement) {
        currentParentElement.removeChild(currentVisibleElement);
        currentVisibleElement = null;
        currentParentElement = null;
    }
    if (parentElement !== currentParentElement) {
        const newElement = document.createElement("h1");
        newElement.innerHTML = content;
        newElement.setAttribute("class", "text-white text-[20px] col-span-2 mt-3 duration-200 mx-5");
        parentElement.appendChild(newElement);
        currentVisibleElement = newElement;
        currentParentElement = parentElement;
    }
}
document.querySelector(".parent1").addEventListener("click", (e) => {
    toggleContent(e, ".parent1", "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.");
});

document.querySelector(".parent2").addEventListener("click", (e) => {
    toggleContent(e, ".parent2", "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 2.99 to USD 9.99 a month. No extra costs, no contracts");
});

document.querySelector(".parent3").addEventListener("click", (e) => {
    toggleContent(e, ".parent3", "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.");
});

document.querySelector(".parent4").addEventListener("click", (e) => {
    toggleContent(e, ".parent4", "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.");
});

document.querySelector(".parent5").addEventListener("click", (e) => {
    toggleContent(e, ".parent5", "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.");
});

document.querySelector(".parent6").addEventListener("click", (e) => {
    toggleContent(e, ".parent6", "You can watch on Netflix by downloading the app on your device and signing in with your account.");
});

document.querySelector(".parent7").addEventListener("click", (e) => {
    toggleContent(e, ".parent7", "Netflix offers a wide range of kids' shows and movies, and it has parental controls to ensure a safe viewing experience.");
});