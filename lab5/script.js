var colors = ["blue", "grey", "black", "white", "red", "green", "yellow", "orange", "pink", "violet"];
    function IdFunction() {
        document.getElementById("first").style.color =colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("first").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

    function SelectorFunction() {
        document.querySelector(".second").style.color =colors[Math.floor(Math.random() * colors.length)];
        document.querySelector(".second").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }

    var scale = 1;

    function AddFunction(){
        document.getElementById("Img").innerHTML="<img src ='https://budport.com.ua/assets/upload/userfiles/0off_fotoNOVOSTI/11_385.jpg'>";     
    }

    function IncreaseFunction(){
        scale +=0.1;
        document.getElementById("Img").style.transform = `scale(${scale})`;
    }

    function DecreaseFunction() {
        if( scale > 1){
        scale -=0.1;
        document.getElementById("Img").style.transform = `scale(${scale})`;
        }
    }

    function DeleteFunction() {
        document.getElementById("Img").innerHTML ="";
        document.getElementById("Img").style.transform = "scale(1)"; 
        scale = 1;       
    }