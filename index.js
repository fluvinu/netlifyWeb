let checkbox = document.getElementById("checkbox");
checkbox.addEventListener( "change", () => {
   if ( checkbox.checked ) {
        let aboutMe=document.getElementById("aboutme")
        let Sec=document.getElementById("sec");
        let H1=document.getElementById("h1");
        let footersec = document.getElementById(" ");  // or provide the correct id if it exists
    
        let navbar = document.getElementById("navbar");
        let navart = document.querySelector(".navart");

     navbar.style.background = "black";
     navbar.style.color = "white";
     navart.style.background = "black";
     navart.style.color = "white";
     
     footersec.style.background = "black";
     footersec.style.color = "white";
        H1.style.background="#3d3d3d";
        H1.style.color="white"
        Sec.style.background="#3d3d3d"
        aboutMe.style.background="black";
        aboutMe.style.color="white"
   } else {
    let x=document.getElementById("aboutme")
    let y=document.getElementById("sec")
    let H1=document.getElementById("h1");
    let footersec = document.getElementById(" ");  // or provide the correct id if it exists
    
    let navbar = document.getElementById("navbar");
    let navart = document.querySelector(".navart");
        
    navbar.style.background = "white";
    navbar.style.color = "black";
    navart.style.background = "white";
    navart.style.color = "black";

    footersec.style.background = "white";
    footersec.style.color = "black";
        footersec.style.background="white";
        footersec.style.color="black"
        H1.style.background="white";
        H1.style.color="black"
        y.style.background="white"
        x.style.background="white";
        x.style.color="black"
   }
});