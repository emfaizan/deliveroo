$(document).on('click', '.footer-box h4', function(){
    $(this).parent('.footer-box').toggleClass('active')
});

function main(){
    document.getElementById('main-menu').classList.toggle('active');
}

function restaurent(){
    document.getElementById('restaurent-filters').classList.toggle('active');
}

function restaudish(){
    document.getElementById('restaurent-dishes').classList.toggle('active');
}

function checkout(){
    document.getElementById('basket-overview-panel').classList.toggle('active');
};

$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#gototop').fadeIn();
        } else{
            $('#gototop').fadeOut();
        }
    });

    $('#gototop').click(function(){
        $('html ,body').animate({scrollTop : 0},800);
    });

    $(document).on('click', "#open-filter", function(){
        $("#accordion").addClass("active");
    });

    
    $(document).on('click', "#close-filter", function(){
        $("#accordion").removeClass("active");
    });

    $(document).on('click', ".filters-accordian .card-header", function(){
        if($(window).width() > 992){
            $(this).next('div').toggle();
        }
        else {
            if($('.filters-accordian').hasClass('section-active')){
                $('.filters-accordian .card').show();
                $(this).parent('.card').removeClass("opened");
                $('.filters-accordian').removeClass("section-active");
            }
            else {
                $('.filters-accordian').addClass("section-active");
                $('.filters-accordian .card').hide();
                $(this).parent('.card').show();
                $(this).parent('.card').addClass("opened");
            }
        }
    });
});

