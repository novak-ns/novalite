const hamburger = document.getElementById('hamburger');
const hamburgerspan = document.getElementsByClassName("hamburger_span");
const navLinks = document.getElementById('nav');
const body = document.getElementById('body');
const search = document.getElementById('search-bar-search');
        
        search.onclick = function(e){
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



        $(document).ready(function(){
  
          $('.contact').on('click', function(e) {
            e.preventDefault();
            $('.tooltip').addClass("open");
            $('body').addClass("fixed-class");
            $('body').addClass("active");
          });
      
          $('.close').on('click', function(e) {
            e.preventDefault();
            $('.tooltip').removeClass("open");
            $('body').removeClass("fixed-class");
            $('body').removeClass("active");
          });

          $('.send').on('click', function(e) {
            e.preventDefault();
            $('.tooltip').removeClass("open");
            $('body').removeClass("fixed-class");
            $('body').removeClass("active");
          });

          $('.exit').on('click', function(e) {
            e.preventDefault();
            $('.tooltip').removeClass("open");
            $('body').removeClass("fixed-class");
            $('body').removeClass("active");
          });
        });



