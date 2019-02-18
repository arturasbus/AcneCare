
function closeSide(){
    document.getElementById('side').style.left = '100%';
}

//Media Query function
function mediaQuery(){
    if (window.matchMedia("(max-width: 500px)").matches){

        document.getElementById('side').style.left = '0';

    }else if (window.matchMedia("(max-width: 767px)").matches){

        document.getElementById('side').style.left = '20%';
    }
    else{
        document.getElementById('side').style.left = '50%';     
    }
}

// When the user scrolls down 20px from the top of the document, show the button
document.getElementById('myBtn').onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.pageYOffset || document.documentElement.scrollTop) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}