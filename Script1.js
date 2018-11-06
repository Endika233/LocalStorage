//// JavaScript source code
//let boton = document.getElementById("persona");//Lo guardas en variable para que no busque más de una vez
//if (boton !== null) {//Cuando no haya boton no hará esto
//    boton.addEventListener("click", getPerson);
//}
//let personaGuardado = JSON.parse(localStorage.getItem("persona"));//Lo volvemos a hacer objeto
//if (personaGuardado !== null) {
//    document.getElementById("mostrar").innerHTML = personaGuardado.name+" "+personaGuardado.age;//Escribir en el segundo HTML y cuando vuelves al primero
//}
//function getPerson() {
//    let name = document.getElementById("name").value;
//    let age = document.getElementById("age").value;
//    let persona = { name:name, age: age };
//    document.getElementById("mostrar").innerHTML = persona.name+" "+persona.age;
//    localStorage.setItem("persona", JSON.stringify(persona));//Se convierte a string para que el setItem pueda manejarlo
//    //SetItem guarda string no objetos
//}


////LocalStorage con NASA
//1 - Pedir al usuario nombre y apellido a través de unos input y un botón que lo ejecute.
//Tener un enlace para ir a la siguiente página y en ella pedir una fecha.Cuando dan al botón de confirmar fecha,
//    mostrar la imagen y descripción del API de la NASA APOD y mostrar el nombre y apellidos debajo de la foto.
let button1 = document.getElementById("insertPerson");
if (button1 !== null) {
    button1.addEventListener("click", insertPerson);
}
function insertPerson(){
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    person = { name: nombre, lastName: apellido };
    document.getElementById("show").innerHTML = person.name + " " + person.lastName;
    localStorage.setItem("person", JSON.stringify(person));
}
let button2 = document.getElementById("insertDate");
if (button2 !== null) {
    button2.addEventListener("click",insertDate)
}
function insertDate() {
    let url = "https://api.nasa.gov/planetary/apod?api_key=nKyS2XOABwbtJTEtgYHHynZ8dgwidv9MGAtPnVga&date=";
    let xhr = new XMLHttpRequest();
    let fecha = document.getElementById("date").value;
    let person = JSON.parse(localStorage.getItem("person"));
    url += fecha;
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let responseObject = JSON.parse(xhr.response);
            let img = responseObject.url;
            let explanation = responseObject.explanation;
            showAll(img, explanation, person.name, person.lastName)
        }       
    }
}
function showAll(image,explanation,name,lastName) {
    document.getElementById("showAll").innerHTML = "<img src='" + image + "'><p>" + explanation + "</p><p>" + name + "</p><p>" + lastName + "</p>";
}