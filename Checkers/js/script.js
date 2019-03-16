
function choosedCell(element) {
        if (element.classList.contains("whiteChecker")) {
            element.classList.remove("whiteChecker");
        } else {
            element.classList.add("whiteChecker");
        }
}