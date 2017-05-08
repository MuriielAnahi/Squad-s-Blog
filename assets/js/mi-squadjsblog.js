function Misquad(nombre, edad, hobbies, cment1){
	this.nombre=nombre;
	this.edad=edad;
	this.hobbies=hobbies;

}

function obtenerCment(){
    var inputName = document.getElementById("name");//no me imprime los nombres  //ahora siii
	var input = document.getElementById("cment");//ingres de comentarios


	var contCment = document.getElementsByClassName("Cment-List");

	contCment[0].innerHTML +=inputName.value+": "+ input.value + //despues de tanto buscar como poder imprimir los comentarios llegue a este codigo
 "<br>"; //logre poder hacerlo funcionar solo para el primer usuario 
 inputName.value="";
	input.value = "";

}
var i=0;

function contadoLike(){// contador de like maravilloso encntrado en https://iscelialejandro.wordpress.com/2014/01/04/un-contador-de-clicks/
    i++; 
     if (i == 1) {
document.getElementById("clicks").innerHTML = i;
} else{
document.getElementById("clicks").innerHTML = i;
 }
}


var may = new Misquad("Maybet", 15,["Juegos de RPG, leer, andar en bici"])
var mostrarmay = document.getElementById("may");
mostrarmay.innerHTML="<b>Nombre: </b>"+may.nombre+"<br> <b>Edad: </b>"+may.edad+" Años"+"<br><b>Hobbies :</b>"+"<li>"+may.hobbies+"</li>"+"<br>"+"<img src='assets/js/cat1.jpg' width='200'>";

var dul = new Misquad("Dulce", 18, "Cocinar, leer, subir montañas")
var mostrardul = document.getElementById("dul");
mostrardul.innerHTML="<b>Nombre: </b>"+dul.nombre+"<br> <b>Edad: </b>"+dul.edad+" Años"+"<br><b>Hobbies :</b>"+"<li>"+dul.hobbies+"</li>"+"<br>"+"<img src='assets/js/cat2.jpg' width='200'>";


var nan = new Misquad("Anayn", 27, "Dibujar, pasteleria, andar en bici")
var mostrarnan = document.getElementById("nan");
mostrarnan.innerHTML="<b>Nombre: </b>"+nan.nombre+"<br> <b>Edad: </b>"+nan.edad+" Años"+"<br><b>Hobbies :</b>"+"<li>"+nan.hobbies+"</li>"+"<br>"+"<img src='assets/js/cat3.jpg' width='200'>";

var car = new Misquad("Caro", 31, "Pintar, comer sushi, acariciar a su gatito")
var mostrarcar = document.getElementById("car");
mostrarcar.innerHTML="<b>Nombre: </b>"+car.nombre+"<br> <b>Edad: </b>"+car.edad+" Años"+"<br><b>Hobbies :</b>"+"<li>"+car.hobbies+"</li>"+"<br>"+"<img src='assets/js/cat4.jpg' width='200'>";

var sim = new Misquad("Simona", 29, "Ver netflix, escuchar musica, beber cerveza")
var mostrarsim = document.getElementById("sim");
mostrarsim.innerHTML="<b>Nombre: </b>"+sim.nombre+"<br> <b>Edad: </b>"+sim.edad+" Años"+"<br><b>Hobbies :</b>"+"<li>"+sim.hobbies+"</li>"+"<br>"+"<img src='assets/js/cat5.jpg' width='200'>";

var ana = new Misquad("Anais", 19, "Estar con la Amelia, ver netflix, estar con su pareja")
var mostrarana = document.getElementById("ana");
mostrarana.innerHTML="<b>Nombre: </b>"+ana.nombre+"<br> <b>Edad: </b>"+ana.edad+" Años"+"<br><b>Hobbies :</b>"+"<li>"+ana.hobbies+"</li>"+"<br>"+"<img src='assets/js/cat8.jpg' width='200'>";

var jos = new Misquad("Josefa", 21, "Bailar pop, ver series, codear")
var mostrarjos = document.getElementById("jos");
mostrarjos.innerHTML="<b>Nombre: </b>"+jos.nombre+"<br> <b>Edad: </b>"+jos.edad+" Años"+"<br><b>Hobbies :</b>"+"<li>"+jos.hobbies+"</li>"+"<br>"+"<img src='assets/js/cat7.jpg' width='200'>";

var mur = new Misquad("Muriel", 25, "Jugar pool, vagar en internet, fumar hierva")
var mostrarmur = document.getElementById("mur");
mostrarmur.innerHTML="<b>Nombre: </b>"+mur.nombre+"<br> <b>Edad: </b>"+mur.edad+" Años"+"<br><b>Hobbies :</b>"+"<li>"+mur.hobbies+"</li>"+"<br>"+"<img src='assets/js/cat6.jpg' width='200'>";



