// Write your code here!
const element  = document.querySelector("main")
element.remove()

// create newHeader
const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")
console.log(newHeader)
newHeader.textContent = "susan is the champion" 