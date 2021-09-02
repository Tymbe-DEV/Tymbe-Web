AOS.init(
    {
        once: true,
    }
);

$(".navbar-toggler").click(function() {

    var openIcon = document.getElementById('navbarOpenIcon');
    var closeIcon = document.getElementById('navbarCloseIcon');

    if($('.navbar-toggler').hasClass('collapsed')){       
        closeIcon.setAttribute("hidden", true);
        openIcon.removeAttribute("hidden");
        setTimeout(function(){ $('.navbar').css('border-radius', '100px') }, 200);
        

    }
    else{
       
        $('.navbar').css('border-radius', '25px');
        openIcon.setAttribute("hidden", true);
        closeIcon.removeAttribute("hidden");
    }
    
    

  }
);
