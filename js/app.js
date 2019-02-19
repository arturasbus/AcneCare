
// const side = document.getElementById('side');
// const btn = document.getElementById("topBtn");

// // Back to top
// btn.addEventListener("click", toTop);

// function toTop(){
//   side.scrollTop = 0;
// }

// Close side panel
function closeSide(){
    document.getElementById('side').style.left = '100%';
    document.getElementById('topBtn').style.display = 'none';
}

//Opens side panel depend on screen size
function mediaQuery(){
    if (window.matchMedia("(max-width: 500px)").matches){

        document.getElementById('side').style.left = '0';
        document.getElementById('topBtn').style.display = 'block'; 

    }else if (window.matchMedia("(max-width: 767px)").matches){

        document.getElementById('side').style.left = '20%';
        document.getElementById('topBtn').style.display = 'block'; 
    }
    else{
        document.getElementById('side').style.left = '50%'; 
        document.getElementById('topBtn').style.display = 'block';    
    }
}


