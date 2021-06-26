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

// function listpop(){
//     document.getElementById('listing-popup1').classList.toggle('active');
// };

function listpop2(){
    document.getElementById('listing-popup2').classList.toggle('active');
};

function listpop3(){
    document.getElementById('listing-popup3').classList.toggle('active');
};

function listpop4(){
    document.getElementById('listing-popup4').classList.toggle('active');
};

function creditpop(){
    document.getElementById('checkout-pupup').classList.toggle('active');
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
            $(this).parent('.card').toggleClass('active');
        }
        else {
            if($(this).attr('id') == "categoriesFilter"){
                return false;
            }

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



$(document).on('click', '[popup]', function(){
    var id = $(this).attr("popup")
    $(id).addClass("active")
})


$(document).on('click', '[popup-close]', function(){
    var id = $(this).attr("popup-close")
    $(id).removeClass("active")
})
  
$(document).on('click', '.close-popup', function(){
    $(this).parents('.custom-modal-wrapper').removeClass("active")
})


$(document).on('click', '.input-spinner .increment', function(){
    var a = $(this).parent('.input-spinner').find('input').val();
    a = parseInt(a);

    $(this).parent('.input-spinner').find('input').val(a+1);
})

$(document).on('click', '.input-spinner .decrement', function(){
    var a = $(this).parent('.input-spinner').find('input').val();
    a = parseInt(a);

    $(this).parent('.input-spinner').find('input').val(a == 0 ? 0 : a-1);
})

var data=1;
document.getElementById("number").innerText=data;
function decrement(){
    data=data-1;
    document.getElementById("number").innerText=data;
}
function increment(){
    data=data+1;
    document.getElementById("number").innerText=data;
}

var data=1;
document.getElementById("quantity").innerText=data;
function decrement(){
    data=data-1;
    document.getElementById("quantity").innerText=data;
}
function increment(){
    data=data+1;
    document.getElementById("quantity").innerText=data;
}


