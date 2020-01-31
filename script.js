var w;
var h;
var list = document.querySelector("nav ul")
var items = list.querySelectorAll("li")
console.log(items)

function getElementWidth(element) {
    let w = element.offsetWidth
    return w
}
function getElementNetWidth(element) {
    let styles = window.getComputedStyle(element);
    return parseInt(styles.width);
}

function calculateWhitespace() { }

function onResize() {
    let element = document.querySelector('.progress-container')
    w = getElementWidth(element);
    h = window.innerHeight
}

function elementClicked(e) {
    let index = [...items].indexOf(e.target);
}

function getWidthsOfElements(arrayOrNodeList) {
    let newArray = [...arrayOrNodeList].map(element => getElementWidth(element))
    return newArray
}

let itemWidths = getWidthsOfElements(items);
console.log(itemWidths)
let firstItemWidth = getElementNetWidth(items[0])
console.log(firstItemWidth)

window.addEventListener("click", elementClicked)
window.addEventListener("resize", onResize);
onResize()