$(document).ready(function(){
    
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle')
    })

    

    AOS.init({
        duration:1000,
        delay:400,
    });
   
  



});


$('.custom1').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    items:1,
    margin:10,
    stagePadding:30,
    smartSpeed:450
});




var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        768:{
            items:2,
        },

        1000:{
            items:3,
        }
}












});




$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[5000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})




$(document).ready(function() {
    $('.box').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery: {
            enabled: true
        },
        
  

    });


});




// 
// $('.facility').magnificPopup({
    // delegate: 'a',
    // type: 'image',
//   });
// 





