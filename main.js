const searchButton = document.querySelector('.fas');
const inputArea = document.querySelector('.search-bar');

searchButton.addEventListener("click", () => {
    inputArea.classList.toggle("active");
})