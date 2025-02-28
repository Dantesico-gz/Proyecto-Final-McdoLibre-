document.addEventListener("DOMContentLoaded", function() {
    var categoriesList = document.getElementById("categories-list");
    var categoriesSpan = document.querySelector(".categories > span");

    categoriesSpan.addEventListener("click", function() {
        if (categoriesList.style.display === "block") {
            categoriesList.style.display = "none";
        } else {
            categoriesList.style.display = "block";
        }
    });

    document.addEventListener("click", function(event) {
        if (!categoriesSpan.contains(event.target) && !categoriesList.contains(event.target)) {
            categoriesList.style.display = "none";
        }
    });
});