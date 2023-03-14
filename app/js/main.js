const hamburger = document.getElementById('hamburger');
const hamburgerspan = document.getElementsByClassName("hamburger_span");
const navLinks = document.getElementById('nav');
const body = document.getElementById('body');

        
        document.onclick = function(e){
            if(e.target.id !=='hamburger' && e.target.className !=="hamburger_span")
            {
                hamburger.classList.remove('open')
                navLinks.classList.remove('active')
                body.classList.remove("fixed-class")
            }
        }
        
        hamburger.onclick = function(){
            hamburger.classList.toggle('open')
            navLinks.classList.toggle('active')
            body.classList.toggle("fixed-class")
        }

