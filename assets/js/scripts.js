AOS.init(
    {
        once: true,
    }
);

$(".navbar-toggler").click(function() {
    console.log('click');
    $('.navbar').css('border-radius', '25px');
  }
);
