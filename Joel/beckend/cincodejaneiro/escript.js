let paragrafos = document.getElementByIdTagName("p")
console.log(paragrafos.length)
document.getElementById("resulgeral").innerHTML += `A quantidade total é : $(paragrafos.length)`