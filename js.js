$(document).ready (function() {
    pageID = $('.page-id').text();

    preveousPage = Number(pageID) -1;
    nextPage = Number(pageID) +1;

    // Multi-platform browser scroll
    setTimeout(function() {
        $('.container').on('wheel', function(e){
            wheel = e.originalEvent.wheelDelta;
            if( wheel > 50) {
                //scroll down & navigate
                window.location.href = getPageByID(preveousPage);
            } else if ( wheel < -50) {
                //scroll up & navigate
                    window.location.href = getPageByID(nextPage);
            }

            //prevent page fom scrolling
            return false;
        });
    }, 1000);

    var lastY;

    setTimeout(function() {
       $('.container').on('touchmove', function(e){
        var currentY = e.originalEvent.touches[0].clientY;
        if(currentY > lastY){
            // moved up
            window.location.href = getPageByID(preveousPage);
        } else if(currentY < lastY){
            // moved down
            window.location.href = getPageByID(nextPage);
        }
        lastY = currentY;
       });
    }, 1000 );

});


// Get location
function getPageByID(id){
    if(id === 1){
        return "index.html";
    } if (id === 2){
        return "transform.html";
    } if (id === 3){
        return "form.html";
    } else {
        return  window.location.href;
    }
}

// Toggle sidebar menu  
$('.sidebar').click(function (){
    $('.menu').toggleClass('open');
    if($('.menu').hasClass('open')){
        $('#sidebar').addClass('sidebar-wide');
        $('#sidebar').removeClass('sidebar-narrow');
    } else {
        $('#sidebar').removeClass('sidebar-wide')
        $('#sidebar').addClass('sidebar-narrow');
    }
});

function formSubmitted(e){
    e.preventDefault();

    // form-values
    var name = $('#name').val();
    var mobile = $('#mobile').val();
    var postCode = $('#postCode').val();
    var city = $('#city').val();

    // values as object
    var submitForm = {
        name: name,
        mobile: mobile,
        postCode: postCode,
        city: city
    }
    $('#form-button').blur()
    $('.form-item').val('');

    console.log(submitForm);
}