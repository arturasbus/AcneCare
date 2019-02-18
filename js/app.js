
function closeSide(){
    document.getElementById('side').style.left = '100%';
  
    
}

//Media Query function
function mediaQuery(){
    if (window.matchMedia("(max-width: 500px)").matches){

        document.getElementById('side').style.left = '0';
        document.getElementById('container').style.transform = 'translateX(-100%)';

    }else if (window.matchMedia("(max-width: 767px)").matches){

        document.getElementById('side').style.left = '20%';
        document.getElementById('container').style.transform = 'translateX(-100%)';
    }
    else{
        document.getElementById('side').style.left = '50%';
        document.getElementById('container').style.transform = 'translateX(-100%)';      
    }
}
