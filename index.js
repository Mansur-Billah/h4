for( var i=0; i<3; i++){ 
document.querySelectorAll(".mybutton")[i].addEventListener("click", function(){
var text= this.innerHTML;
console.log(text)

switch (text) {
    case "a":
        var audioa= new Audio ("audio/A.mp3.mp3")
        audioa.play();
        break; 

         case "b":
        var audioa= new Audio ("audio/b.mp3")
        audioa.play();
        break;

        case "c":
            var audioa= new Audio ("audio/A.mp3.mp3")
            audioa.play();
            break;

    
}
});
}