let x;
document.getElementById("Q").onclick = function(){
    x = document.getElementById("P").value;
    for(let counter =1; counter<= 10; counter++){
        document.getElementById("S").innerHTML += x + " " + "x" + " " + counter + "=";
        document.getElementById("S").innerHTML += x*counter;
        document.getElementById("S").innerHTML += "<br>";
    }
}
document.getElementById("T").onclick = function(){
    document.getElementById("S").innerHTML =" ";    
}