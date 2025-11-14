var formulario = document.getElementById("form");

function calcular (){
    var consulta = formulario.consulta.value;
    var tiposConsulta = formulario.tiposConsulta.value;
    var tipoPago = formulario.tipoPago.value;

    var total = 0

        if(formulario.receta.checked == true){
    total += 1000; }   

        if(formulario.ejercicio.checked == true){
    total += 1000; }   
    
        if(formulario.revista.checked == true){
    total += 150; }      


            if(tiposConsulta == "1") {
    total = total + 200;     } 

            if(tiposConsulta == "2") {
    total = total + 1000;     } 



        if(consulta == "consulta1") {
    total = total + 850;}

       else if(consulta == "seguimiento") {
    total = total + 700;}

        else if(consulta == "paqs3") {
    total = total + 2000;}

        else if(consulta == "parejas") {
    total = total + 5000;}

        else{
    alert("Por favor selecciona una tipo de consulta");
    return; } 


            //if(tipoPago == "3"){
    //total = total;     } 

            //if(tipoPago == "4"){
    //total = total * 0.06;     } 

            //if(tipoPago == "5"){
    //total = total * 0.03;     } 
    


     formulario.total.value = total + tipoPago;  
    document.getElementById('total').innerText = total;

        console.info("total");
        
}