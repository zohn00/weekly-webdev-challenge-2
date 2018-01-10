var otwarte=0;

$(function($)
       {
    $.scrollTo(0);    
    $('#menuAbout').click(function(){
        $.scrollTo($('#AboutUs'), 500);
        
    });
    $('#menuServices').click(function(){$.scrollTo($('#SubscribeToUs'), 500);});
    $('#menuGallery').click(function(){$.scrollTo($('#Gallery'), 500);});
    $('#menuBlog').click(function(){$.scrollTo($('#Blog'), 500);});
    $('#menuContact').click(function(){$.scrollTo($('#Contact'), 500);});
    $('#menuHome').click(function(){$.scrollTo($('#home'), 500);});
        }
 );

$(window).scroll(function()
{   if($(this).scrollTop==0){}
    if($(this).scrollTop()>30){
        $('#menu').css('background-color','#f9f8fb');
    }else{if(otwarte==0){$('#menu').css('background-color','transparent');}}
    
}
);

$(function($){
    
    $('#menuButton').click(function(){
        $('#menu').css('background-color','#f9f8fb');
       if(otwarte==0) otwarte+=1;
        else otwarte-=1;
    });
    
}
 );