$(document).ready(function(){
    $(this).scrollTop(0);
    window.onresize = () => { window.location.reload()}

   let section_black_bg='rgb(29, 29, 29)'; 
   let section_white_bg='rgb(233, 233, 234)'; 
   let black_color = 'rgb(24, 24, 24)';
   let white_color = 'rgb(255, 255, 255)';
   let cyan_color = 'rgb(0, 255, 255)';
   let item_border_radius = '20px'; 
   let imgIndex= 0;
   let arrows_hover_bg = 'rgba(255, 255, 255, .1)';
   let arrows_hover_color = 'rgba(255, 255, 255, 1)';
   let arrows_hover_fsize = '.55rem';
   let arrows_orig_bg = 'rgba(255, 255, 255, .05)';
   let arrows_orig_color = 'rgba(255, 255, 255, .5)';
   let arrows_orig_fsize = '.65rem';

 // list item click
 // sideNav_listItem.on('click',function(){
 //     // active trigger find
 //     let active_listItem = $(this).closest('.sidebar-cont').find('.menu li.active');
 //     active_listItem.removeClass('active');
 //     $(this).addClass('active');
 // });

 // Change background color of list item when scrolled
 let sideNav_listItem = $('.sidebar-cont .menu li');
 window.addEventListener('scroll',()=>{
     var windowSize = $(window).scrollTop();
     let active_listItem = $(sideNav_listItem).closest('.sidebar-cont').find('.menu li.active');
     active_listItem.removeClass('active');

     if(parseInt($('#skills').offset().top) <= windowSize && parseInt($('#projects').offset().top) > windowSize){
          $('.sidebar-cont .menu li:eq(1)').addClass('active');
     }
     else if(parseInt($('#projects').offset().top) <= windowSize && parseInt($('#experience').offset().top) > windowSize){
         $('.sidebar-cont .menu li:eq(2)').addClass('active');
     }
     else if(parseInt($('#experience').offset().top) <= windowSize && parseInt($('#education').offset().top) > windowSize){
         $('.sidebar-cont .menu li:eq(3)').addClass('active');
     }

     else if(parseInt($('#education').offset().top) <= windowSize && parseInt($('#contact').offset().top) > windowSize){
         $('.sidebar-cont .menu li:eq(4)').addClass('active');
     }

     else if(parseInt($('#contact').offset().top) <= windowSize){
         $('.sidebar-cont .menu li:eq(5)').addClass('active');
     }
     else{
         $('.sidebar-cont .menu li:eq(0)').addClass('active');
     }

 });
   //Resume button
   $('.arr-btn-cont button').click(function() {
         window.open('./files/Renzo-Ompad-Resume.pdf');
   });

   //display modals
   $('#pos-btn').click(function() {
         $('.pos-system').fadeIn(500).css('display', 'flex');
         $('html').css('overflow', 'hidden');
   });
   $('#mobile-exam-checker-btn').click(function() {
         $('.mobile-exam-checker-app').fadeIn(500).css('display', 'flex');
         $('html').css('overflow', 'hidden');
   });
   $('#ygc-database-system-moreInfo-btn').click(function() {
         $('.ygc-db-system').fadeIn(500).css('display', 'flex');
         $('html').css('overflow', 'hidden');
   });
   $('#WSAP-founder-portfolio-moreInfo-btn').click(function() {
         $('.wsap-founder-portfolio').fadeIn(500).css('display', 'flex');
         $('html').css('overflow', 'hidden');
   });
  
   //modal close btn
   $('.fa-square-xmark').click(function() {
         $('.pos-system').fadeOut(500);
         $('.mobile-exam-checker-app').fadeOut(500);
         $('.ygc-db-system').fadeOut(500);
         $('.wsap-founder-portfolio').fadeOut(500)
         $('html').css('overflow', 'visible');
   });

   //visit website button
   $('#ygc-database-system-visitWebsite-btn').click(function() {
         window.open('http://yusongroupofcompanies.com/');   
   });
   $('#WSAP-founder-portfolio-visitWebsite-btn').click(function() {
         window.open('https://tjyuson.com/');   
   });

   //platform links 
   $('.platform-cont:nth-of-type(1)').click(function() {
         window.open('https://www.linkedin.com/in/renzo-ompad-73a35a256/');   
   });
   $('.platform-cont:nth-of-type(2)').click(function() {
         window.open('https://github.com/ozner16');   
   });
   $('.platform-cont:nth-of-type(3)').click(function() {
         window.open('https://web.facebook.com/ompad.renzo1/');   
   });
   $('.platform-cont:nth-of-type(4)').click(function() {
         window.open('https://twitter.com/ozner_dapmo');
   });
   $('.platform-cont:nth-of-type(5)').click(function() {
         window.open('https://www.instagram.com/ozner016/');   
   });
   
   
   // projects image click & arrows click
   let pos_system = 'pos-system';
   let mobile_exam_checker_app = 'mobile-exam-checker-app';
   let ygc_db_system = 'ygc-db-system';
   let wsap_founder_portfolio = 'wsap-founder-portfolio';

   $('.popup-image .close-btn').click(function(){
               $('.popup-image').css('display','none');
               $('.modal-content .image-container').css('overflow','auto');
   });

   function proj_modal(proj_name, total_images){
         $('.'+ proj_name +' .image-container .image').click(function(){
               let image_src = $('img',this).map(function() { return $(this).attr('src') }).get();
               imgIndex = $(this).index();
               $('.popup-image').css('display','block');
               $('.modal-content .image-container').css('overflow','hidden');
               $('.popup-image img').attr('src', image_src);

               if(imgIndex == 0 ){
                     $('.modal-content .popup-image .left-arrow').css('display','none');
                     $('.modal-content .popup-image .right-arrow').css('display','flex'); 
               }
               else if(imgIndex < (total_images - 1) ){
                     $('.modal-content .popup-image .left-arrow').css('display','flex');
                     $('.modal-content .popup-image .right-arrow').css('display','flex');                      
               }
               else{
                     $('.modal-content .popup-image .left-arrow').css('display','flex');
                     $('.modal-content .popup-image .right-arrow').css('display','none');
               }
               //    console.log(imgIndex)
         });
   
   // image slider arrows
   //left
         $('.'+ proj_name +' .popup-image .left-arrow').click(function(){
        
               if(imgIndex > 0 ){
                     imgSrc = $('.'+ proj_name +' .image-container img:eq('+ (imgIndex - 1) +')').attr('src');
                     $('.popup-image img').attr('src', imgSrc);
                     $('.modal-content .popup-image .left-arrow').css('display','flex');
                     $('.modal-content .popup-image .right-arrow').css('display','flex'); 
                     imgIndex = imgIndex - 1;
                     // console.log(imgIndex)
               }
               if(imgIndex == 0){
                     $('.modal-content .popup-image .left-arrow').css('display','none');
                     $('.modal-content .popup-image .right-arrow').css('display','flex'); 
               }
                          
         });

   //right
         $('.'+ proj_name +' .popup-image .right-arrow').click(function(){
               
               if(imgIndex < (total_images - 1)){
                     imgSrc = $('.'+ proj_name +' .image-container img:eq('+ (imgIndex + 1) +')').attr('src');
                     $('.popup-image img').attr('src', imgSrc);
                     $('.modal-content .popup-image .left-arrow').css('display','flex');
                     $('.modal-content .popup-image .right-arrow').css('display','flex'); 
                     imgIndex = imgIndex + 1;
                     // console.log(imgIndex)
               }
               if(imgIndex == (total_images - 1)){
                     $('.modal-content .popup-image .left-arrow').css('display','flex');
                     $('.modal-content .popup-image .right-arrow').css('display','none'); 
               }

         });

   }
   proj_modal(pos_system, 18);
   proj_modal(mobile_exam_checker_app, 43);
   proj_modal(ygc_db_system, 21);
   proj_modal(wsap_founder_portfolio, 13);
   
   //keyboard arrows event 
   var tId = 0;
   function hold_leftArrow_bg() {
         $('.modal-content .popup-image .left-arrow').css({'background':arrows_orig_bg,'color':arrows_orig_color,'font-size':arrows_hover_fsize}); 
   }
   function hold_rightArrow_bg() {
         $('.modal-content .popup-image .right-arrow').css({'background':arrows_orig_bg,'color':arrows_orig_color,'font-size':arrows_hover_fsize}); 
   }

   //left-arrow
   function proj_keyboard_left_arrow(proj_name){
         if(imgIndex > 0 ){
               imgSrc = $('.'+ proj_name +' .image-container img:eq('+ (imgIndex - 1) +')').attr('src');
               $('.'+ proj_name +' .popup-image img').attr('src', imgSrc);
               $('.modal-content .popup-image .left-arrow').css({'display':'flex', 'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});
               $('.modal-content .popup-image .right-arrow').css('display','flex'); 
               setTimeout(function(){
                     $('.modal-content .popup-image .left-arrow').css({'background':arrows_orig_bg,'color':arrows_orig_color,'font-size':arrows_orig_fsize});  
               }, 100);
               $('.modal-content .popup-image .left-arrow').hover(function() {
                     $(this).css({'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});
               }, function() {
                     $(this).css({'background':arrows_orig_bg,'color':arrows_orig_color,'font-size':arrows_orig_fsize});
               });

               // hold arrow func
               $('.modal-content .popup-image .left-arrow').on('mousedown', function() {
                     tId = setTimeout(hold_leftArrow_bg, 0);
               }).on('mouseup', function() {
                     // $('.modal-content .popup-image .left-arrow').css({'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});
                     setTimeout(function(){
                           $('.modal-content .popup-image .left-arrow').css({'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});  
                     }, 0);
                     $('.modal-content .popup-image .left-arrow').hover(function() {
                            $(this).css({'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});
                     }, function() {
                           $(this).css({'background':arrows_orig_bg,'color':arrows_orig_color,'font-size':arrows_orig_fsize});
                     });
                     clearTimeout(tId);
               });

               imgIndex = imgIndex - 1;
               // console.log(imgIndex)
               }
               if(imgIndex == 0){
                     setTimeout(function(){
                           $('.modal-content .popup-image .left-arrow').css('display','none');
                     }, 100);
                     $('.modal-content .popup-image .right-arrow').css('display','flex'); 
               }    
   }
   //right-arrow
   function proj_keyboard_right_arrow(proj_name, total_images){
         if(imgIndex < (total_images - 1) ){
               imgSrc = $('.'+ proj_name +' .image-container img:eq('+ (imgIndex + 1) +')').attr('src');
               $('.'+ proj_name +' .popup-image img').attr('src', imgSrc);
               $('.modal-content .popup-image .left-arrow').css('display','flex');
               $('.modal-content .popup-image .right-arrow').css({'display':'flex', 'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});
               setTimeout(function(){
                     $('.modal-content .popup-image .right-arrow').css({'background':arrows_orig_bg,'color':arrows_orig_color,'font-size':arrows_orig_fsize});  
               }, 100);
               $('.modal-content .popup-image .right-arrow').hover(function() {
                     $(this).css({'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});
               }, function() {
                     $(this).css({'background':arrows_orig_bg,'color':arrows_orig_color,'font-size':arrows_orig_fsize});
               });

               // hold arrow func
               $('.modal-content .popup-image .right-arrow').on('mousedown', function() {
                     tId = setTimeout(hold_rightArrow_bg, 0);
               }).on('mouseup', function() {
                     // $('.modal-content .popup-image .right-arrow').css({'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});
                     setTimeout(function(){
                           $('.modal-content .popup-image .right-arrow').css({'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});  
                     }, 0);
                     $('.modal-content .popup-image .right-arrow').hover(function() {
                            $(this).css({'background':arrows_hover_bg,'color':arrows_hover_color,'font-size':arrows_hover_fsize});
                     }, function() {
                           $(this).css({'background':arrows_orig_bg,'color':arrows_orig_color,'font-size':arrows_orig_fsize});
                     });
                     clearTimeout(tId);
               });
             
               imgIndex = imgIndex + 1;
               // console.log(imgIndex)
         }
         if(imgIndex == (total_images - 1)){
               $('.modal-content .popup-image .left-arrow').css('display','flex');
               setTimeout(function(){
                     $('.modal-content .popup-image .right-arrow').css('display','none'); 
               }, 100);
               
         }
   }
   $(document).keydown(function(e){
         // left arrow
         if (e.which == 37 && $('.'+ pos_system +'').css('display') == 'flex') { 
               proj_keyboard_left_arrow(pos_system);
         }
         else if(e.which == 37 && $('.'+ mobile_exam_checker_app +'').css('display') == 'flex'){
               proj_keyboard_left_arrow(mobile_exam_checker_app);
         }
         else if(e.which == 37 && $('.'+ ygc_db_system +'').css('display') == 'flex'){
               proj_keyboard_left_arrow(ygc_db_system);
         }
         else if(e.which == 37 && $('.'+ wsap_founder_portfolio +'').css('display') == 'flex'){
               proj_keyboard_left_arrow(wsap_founder_portfolio);
         }

         //right arrow
         if (e.which == 39 && $('.'+ pos_system +'').css('display') == 'flex') { 
               proj_keyboard_right_arrow(pos_system, 18);
         }
         else if(e.which == 39 && $('.'+ mobile_exam_checker_app +'').css('display') == 'flex'){
               proj_keyboard_right_arrow(mobile_exam_checker_app, 43);
         }
         else if(e.which == 39 && $('.'+ ygc_db_system +'').css('display') == 'flex'){
               proj_keyboard_right_arrow(ygc_db_system, 21);
         }
         else if(e.which == 39 && $('.'+ wsap_founder_portfolio +'').css('display') == 'flex'){
               proj_keyboard_right_arrow(wsap_founder_portfolio, 13);
         }
   });

   // start of small screens nav bar func
   $('.nav-small-screen .fa-bars').click(function() {
         $('.menu-small-screen').css('right','0'); 
   });
   $('.menu-small-screen > .header-cont .fa-xmark').click(function() {
         $('.menu-small-screen').css('right','-55%'); 
   });

   // First we get the viewport height/width and we multiple it by 1% to get a value for a vh unit
   let vh = window.innerHeight * 0.01;
   let vw = window.innerWidth * 0.01;

   // Then we set the value in the --vh custom property to the root of the document
   document.documentElement.style.setProperty('--vh', `${vh}px`);
   document.documentElement.style.setProperty('--vw', `${vw}px`);

   // console.log($('#about img').css('width'));
   console.log($('#about').css('height'));
   console.log($('.nav-small-screen').css('height'));
   console.log('window inner width: '+ window.innerWidth);
   console.log('window inner height: '+ window.innerHeight);

   });