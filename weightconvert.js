let kilograms=document.getElementById("kilograms");
let pounds=document.getElementById("pounds");

kilograms.addEventListener("click",function(){
    let intt=document.getElementById("input").value;
    document.getElementById("output").value=intt/2.20462 + "KG";
    

})

pounds.addEventListener("click",function(){
    var intt=document.getElementById("input").value;
    document.getElementById("output").value=intt*2.20462 + "Pounds";


})