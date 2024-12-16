function vedanth(){
    alert("hai iam vedanth")
}

function clickbth(){
    console.log("hello there")
    
}



let imgTag=document.getElementById("kl")

function image(){
   imgTag.style.borderRadius="50%"
   imgTag.style.boxShadow="5px 5px 5px 5px orange"
}


function image(){
 imgTag.src="https://pbs.twimg.com/media/FscfMUeaIAEc3CW.jpg:large"
 imgTag.style.borderRadius="50%"
   imgTag.style.boxShadow="5px 5px 5px 5px blue"


}



let prabaimg=document.getElementById("darling")

prabaimg.onclick=function(){
    prabaimg.src="https://www.cinejosh.com/newsimg/newsmainimg/krishnam-raju-with-prabhas_b_1602211048.jpg"
}



let hoverbtn=document.getElementById("hover")

hoverbtn.onmouseover=function(){
    hoverbtn.style.fontFamily="cursive"
    hoverbtn.style.fontSize="50px"
    hoverbtn.style.backgroundColor="salmon"
    hoverbtn.style.color="white"
    hoverbtn.style.borderRadius="20px"

}




let clickbtn=document.getElementById("click")

clickbtn.onclick=function(){
  clickbtn.style.fontFamily="cursive"
  clickbtn.style.fontSize="50px"
  clickbtn.style.backgroundColor="blue"
  clickbtn.style.color="white"
  clickbtn.style.borderRadius="20px"

}



let dblclickbtn=document.getElementById("dblclick")

dblclickbtn.ondblclick=function(){
    dblclickbtn.style.fontFamily="cursive"
    dblclickbtn.style.fontSize="50px"
    dblclickbtn.style.backgroundColor="black"
    dblclickbtn.style.color="white"
    dblclickbtn.style.borderRadius="20px"

}




let input=document.querySelector("input");

input.onkeypress=function(){
    document.body.style.backgroundColor="salmon"
}




let input=document.querySelector("input");

input.onkeydown=function(){
    document.body.style.backgroundColor="salmon"
}



let input=document.querySelector("input");

input.onkeyup=function(){
    document.body.style.backgroundColor="salmon"
}