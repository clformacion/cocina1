
function inventario(){
   const pollo=50;
   let compras;
   let ventas;
   let existencia;
   compras=prompt("Cantidad de Kg de pollo comprados");
   ventas=prompt("Cantidad de Kg de pollo vendidos");

   existencia=pollo+Number(compras)-ventas;
   document.getElementById("demo").innerHTML=compras;
   document.getElementById("demo2").innerHTML=ventas;
   document.getElementById("demo3").innerHTML=existencia;
}


function Login(){

    var usuario=document.login.usuario.value;
    var password=document.login.password.value;
    if(usuario=="carlos" && password=="1234"){
        window.location.href="inicio.html";
    }else{
        alert("usuario no registrado");
    }

}

function costo(){

const vino=50;
document.getElementById("demo4").innerHTML="***********************" +"<br>"+"el costo del vino es: "+ vino;


}

function ingresos(){
const vino=50;
let Up;
let Ip;
let precio;
precio=prompt("precio actual del vino");
Up=prompt("Unidades a calcular");
let Mc=vino-precio;
Ip=Mc*Up;
document.getElementById("demo4").innerHTML="Sus Ingresos Previstos son: " + Ip;


}