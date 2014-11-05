(function(a){a.flexslider=function(c,b){var d=a(c);a.data(c,"flexslider",d);d.init=function(){d.vars=a.extend({},a.flexslider.defaults,b);a.data(c,"flexsliderInit",true);d.container=a(".slides",d).first();d.slides=a(".slides:first > li",d);d.count=d.slides.length;d.animating=false;d.currentSlide=d.vars.slideToStart;d.animatingTo=d.currentSlide;d.atEnd=(d.currentSlide==0)?true:false;d.eventType=("ontouchstart" in document.documentElement)?"touchstart":"click";d.cloneCount=0;d.cloneOffset=0;d.manualPause=false;d.vertical=(d.vars.slideDirection=="vertical");d.prop=(d.vertical)?"top":"marginLeft";d.args={};d.transitions="webkitTransition" in document.body.style;if(d.transitions){d.prop="-webkit-transform"}if(d.vars.controlsContainer!=""){d.controlsContainer=a(d.vars.controlsContainer).eq(a(".slides").index(d.container));d.containerExists=d.controlsContainer.length>0}if(d.vars.manualControls!=""){d.manualControls=a(d.vars.manualControls,((d.containerExists)?d.controlsContainer:d));d.manualExists=d.manualControls.length>0}if(d.vars.randomize){d.slides.sort(function(){return(Math.round(Math.random())-0.5)});d.container.empty().append(d.slides)}if(d.vars.animation.toLowerCase()=="slide"){if(d.transitions){d.setTransition(0)}d.css({overflow:"hidden"});if(d.vars.animationLoop){d.cloneCount=2;d.cloneOffset=1;d.container.append(d.slides.filter(":first").clone().addClass("clone")).prepend(d.slides.filter(":last").clone().addClass("clone"))}d.newSlides=a(".slides:first > li",d);var m=(-1*(d.currentSlide+d.cloneOffset));if(d.vertical){d.newSlides.css({display:"block",width:"100%","float":"left"});d.container.height((d.count+d.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){d.css({position:"relative"}).height(d.slides.filter(":first").height());d.args[d.prop]=(d.transitions)?"translate3d(0,"+m*d.height()+"px,0)":m*d.height()+"px";d.container.css(d.args)},100)}else{d.args[d.prop]=(d.transitions)?"translate3d("+m*d.width()+"px,0,0)":m*d.width()+"px";d.container.width((d.count+d.cloneCount)*200+"%").css(d.args);setTimeout(function(){d.newSlides.width(d.width()).css({"float":"left",display:"block"})},100)}}else{d.transitions=false;d.slides.css({width:"100%","float":"left",marginRight:"-100%"}).eq(d.currentSlide).fadeIn(d.vars.animationDuration)}if(d.vars.controlNav){if(d.manualExists){d.controlNav=d.manualControls}else{var e=a('<ol class="flex-control-nav"></ol>');var s=1;for(var t=0;t<d.count;t++){e.append("<li><a>"+s+"</a></li>");s++}if(d.containerExists){a(d.controlsContainer).append(e);d.controlNav=a(".flex-control-nav li a",d.controlsContainer)}else{d.append(e);d.controlNav=a(".flex-control-nav li a",d)}}d.controlNav.eq(d.currentSlide).addClass("active");d.controlNav.bind(d.eventType,function(i){i.preventDefault();if(!a(this).hasClass("active")){(d.controlNav.index(a(this))>d.currentSlide)?d.direction="next":d.direction="prev";d.flexAnimate(d.controlNav.index(a(this)),d.vars.pauseOnAction)}})}if(d.vars.directionNav){var v=a('<ul class="flex-direction-nav"><li><a class="prev" href="#">'+d.vars.prevText+'</a></li><li><a class="next" href="#">'+d.vars.nextText+"</a></li></ul>");if(d.containerExists){a(d.controlsContainer).append(v);d.directionNav=a(".flex-direction-nav li a",d.controlsContainer)}else{d.append(v);d.directionNav=a(".flex-direction-nav li a",d)}if(!d.vars.animationLoop){if(d.currentSlide==0){d.directionNav.filter(".prev").addClass("disabled")}else{if(d.currentSlide==d.count-1){d.directionNav.filter(".next").addClass("disabled")}}}d.directionNav.bind(d.eventType,function(i){i.preventDefault();var j=(a(this).hasClass("next"))?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.keyboardNav&&a("ul.slides").length==1){function h(i){if(d.animating){return}else{if(i.keyCode!=39&&i.keyCode!=37){return}else{if(i.keyCode==39){var j=d.getTarget("next")}else{if(i.keyCode==37){var j=d.getTarget("prev")}}if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}}}}a(document).bind("keyup",h)}if(d.vars.mousewheel){d.mousewheelEvent=(/Firefox/i.test(navigator.userAgent))?"DOMMouseScroll":"mousewheel";d.bind(d.mousewheelEvent,function(y){y.preventDefault();y=y?y:window.event;var i=y.detail?y.detail*-1:y.originalEvent.wheelDelta/40,j=(i<0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(j)){d.flexAnimate(j,d.vars.pauseOnAction)}})}if(d.vars.slideshow){if(d.vars.pauseOnHover&&d.vars.slideshow){d.hover(function(){d.pause()},function(){if(!d.manualPause){d.resume()}})}d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed)}if(d.vars.pausePlay){var q=a('<div class="flex-pauseplay"><span></span></div>');if(d.containerExists){d.controlsContainer.append(q);d.pausePlay=a(".flex-pauseplay span",d.controlsContainer)}else{d.append(q);d.pausePlay=a(".flex-pauseplay span",d)}var n=(d.vars.slideshow)?"pause":"play";d.pausePlay.addClass(n).text((n=="pause")?d.vars.pauseText:d.vars.playText);d.pausePlay.bind(d.eventType,function(i){i.preventDefault();if(a(this).hasClass("pause")){d.pause();d.manualPause=true}else{d.resume();d.manualPause=false}})}if("ontouchstart" in document.documentElement){var w,u,l,r,o,x,p=false;d.each(function(){if("ontouchstart" in document.documentElement){this.addEventListener("touchstart",g,false)}});function g(i){if(d.animating){i.preventDefault()}else{if(i.touches.length==1){d.pause();r=(d.vertical)?d.height():d.width();x=Number(new Date());l=(d.vertical)?(d.currentSlide+d.cloneOffset)*d.height():(d.currentSlide+d.cloneOffset)*d.width();w=(d.vertical)?i.touches[0].pageY:i.touches[0].pageX;u=(d.vertical)?i.touches[0].pageX:i.touches[0].pageY;d.setTransition(0);this.addEventListener("touchmove",k,false);this.addEventListener("touchend",f,false)}}}function k(i){o=(d.vertical)?w-i.touches[0].pageY:w-i.touches[0].pageX;p=(d.vertical)?(Math.abs(o)<Math.abs(i.touches[0].pageX-u)):(Math.abs(o)<Math.abs(i.touches[0].pageY-u));if(!p){i.preventDefault();if(d.vars.animation=="slide"&&d.transitions){if(!d.vars.animationLoop){o=o/((d.currentSlide==0&&o<0||d.currentSlide==d.count-1&&o>0)?(Math.abs(o)/r+2):1)}d.args[d.prop]=(d.vertical)?"translate3d(0,"+(-l-o)+"px,0)":"translate3d("+(-l-o)+"px,0,0)";d.container.css(d.args)}}}function f(j){d.animating=false;if(d.animatingTo==d.currentSlide&&!p&&!(o==null)){var i=(o>0)?d.getTarget("next"):d.getTarget("prev");if(d.canAdvance(i)&&Number(new Date())-x<550&&Math.abs(o)>20||Math.abs(o)>r/2){d.flexAnimate(i,d.vars.pauseOnAction)}else{d.flexAnimate(d.currentSlide,d.vars.pauseOnAction)}}this.removeEventListener("touchmove",k,false);this.removeEventListener("touchend",f,false);w=null;u=null;o=null;l=null}}if(d.vars.animation.toLowerCase()=="slide"){a(window).resize(function(){if(!d.animating&&d.is(":visible")){if(d.vertical){d.height(d.slides.filter(":first").height());d.args[d.prop]=(-1*(d.currentSlide+d.cloneOffset))*d.slides.filter(":first").height()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else{d.newSlides.width(d.width());d.args[d.prop]=(-1*(d.currentSlide+d.cloneOffset))*d.width()+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}})}d.vars.start(d)};d.flexAnimate=function(g,f){if(!d.animating&&d.is(":visible")){d.animating=true;d.animatingTo=g;d.vars.before(d);if(f){d.pause()}if(d.vars.controlNav){d.controlNav.removeClass("active").eq(g).addClass("active")}d.atEnd=(g==0||g==d.count-1)?true:false;if(!d.vars.animationLoop&&d.vars.directionNav){if(g==0){d.directionNav.removeClass("disabled").filter(".prev").addClass("disabled")}else{if(g==d.count-1){d.directionNav.removeClass("disabled").filter(".next").addClass("disabled")}else{d.directionNav.removeClass("disabled")}}}if(!d.vars.animationLoop&&g==d.count-1){d.pause();d.vars.end(d)}if(d.vars.animation.toLowerCase()=="slide"){var e=(d.vertical)?d.slides.filter(":first").height():d.slides.filter(":first").width();if(d.currentSlide==0&&g==d.count-1&&d.vars.animationLoop&&d.direction!="next"){d.slideString="0px"}else{if(d.currentSlide==d.count-1&&g==0&&d.vars.animationLoop&&d.direction!="prev"){d.slideString=(-1*(d.count+1))*e+"px"}else{d.slideString=(-1*(g+d.cloneOffset))*e+"px"}}d.args[d.prop]=d.slideString;if(d.transitions){d.setTransition(d.vars.animationDuration);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.slideString+",0)":"translate3d("+d.slideString+",0,0)";d.container.css(d.args).one("webkitTransitionEnd transitionend",function(){d.wrapup(e)})}else{d.container.animate(d.args,d.vars.animationDuration,function(){d.wrapup(e)})}}else{d.slides.eq(d.currentSlide).fadeOut(d.vars.animationDuration);d.slides.eq(g).fadeIn(d.vars.animationDuration,function(){d.wrapup()})}}};d.wrapup=function(e){if(d.vars.animation=="slide"){if(d.currentSlide==0&&d.animatingTo==d.count-1&&d.vars.animationLoop){d.args[d.prop]=(-1*d.count)*e+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}else{if(d.currentSlide==d.count-1&&d.animatingTo==0&&d.vars.animationLoop){d.args[d.prop]=-1*e+"px";if(d.transitions){d.setTransition(0);d.args[d.prop]=(d.vertical)?"translate3d(0,"+d.args[d.prop]+",0)":"translate3d("+d.args[d.prop]+",0,0)"}d.container.css(d.args)}}}d.animating=false;d.currentSlide=d.animatingTo;d.vars.after(d)};d.animateSlides=function(){if(!d.animating){d.flexAnimate(d.getTarget("next"))}};d.pause=function(){clearInterval(d.animatedSlides);if(d.vars.pausePlay){d.pausePlay.removeClass("pause").addClass("play").text(d.vars.playText)}};d.resume=function(){d.animatedSlides=setInterval(d.animateSlides,d.vars.slideshowSpeed);if(d.vars.pausePlay){d.pausePlay.removeClass("play").addClass("pause").text(d.vars.pauseText)}};d.canAdvance=function(e){if(!d.vars.animationLoop&&d.atEnd){if(d.currentSlide==0&&e==d.count-1&&d.direction!="next"){return false}else{if(d.currentSlide==d.count-1&&e==0&&d.direction=="next"){return false}else{return true}}}else{return true}};d.getTarget=function(e){d.direction=e;if(e=="next"){return(d.currentSlide==d.count-1)?0:d.currentSlide+1}else{return(d.currentSlide==0)?d.count-1:d.currentSlide-1}};d.setTransition=function(e){d.container.css({"-webkit-transition-duration":(e/1000)+"s"})};d.init()};a.flexslider.defaults={animation:"fade",slideDirection:"horizontal",slideshow:true,slideshowSpeed:7000,animationDuration:600,directionNav:true,controlNav:true,keyboardNav:true,mousewheel:false,prevText:"Previous",nextText:"Next",pausePlay:false,pauseText:"Pause",playText:"Play",randomize:false,slideToStart:0,animationLoop:true,pauseOnAction:true,pauseOnHover:false,controlsContainer:"",manualControls:"",start:function(){},before:function(){},after:function(){},end:function(){}};a.fn.flexslider=function(b){return this.each(function(){if(a(this).find(".slides > li").length==1){a(this).find(".slides > li").fadeIn(400)}else{if(a(this).data("flexsliderInit")!=true){new a.flexslider(this,b)}}})}})(jQuery);/* Activating slider */ 
jQuery(window).load(function() {
				jQuery('.flexslider').flexslider({slideshowSpeed:5000,animationDuration: 600});
	});/*
 * Delayed loading of gravatars
 */
jQuery(window).load(function() {
    jQuery('img[data-gravatar-hash]').each(function(){
	    var hash = jQuery(this).attr('data-gravatar-hash');
	    var img_url = 'http://www.gravatar.com/avatar/'+hash;
	    jQuery(this).attr('src',img_url);
	 });
});


/* Image width in the posts can be max 550px */
	jQuery(window).load(function() {
		jQuery('article .wp-caption img').each(function() {
			current_width 			= jQuery(this).width();
			current_resized_width 	= jQuery(this).attr('width');
			current_height 			= jQuery(this).height();
			content_width 			= jQuery('#content').width() - 40;
			

			aspect_ratio = current_width/current_height;
			if(current_width > content_width && current_resized_width>content_width) {
				jQuery(this).removeAttr('width');
				jQuery(this).removeAttr('height');
			
				new_height = content_width/aspect_ratio;
				jQuery(this).width(content_width+'px');
				jQuery(this).height(new_height);
				jQuery(this).addClass( 'resized aligncenter' )

			}
		});
	});
	
	/* Image width in the posts can be max 550px */
	jQuery(window).load(function() {
		jQuery('.wp-caption').each(function() {
			jQuery(this).removeAttr('width');
			current_width = jQuery(this).width();
			current_height = jQuery(this).height();
			content_width=jQuery('#content').width()-30-10;
			
			
			aspect_ratio = current_width/current_height;
			if(current_width > content_width+10) {
				new_height = (content_width+10)/aspect_ratio;
				jQuery(this).width(content_width+10+'px');
				jQuery(this).addClass( 'resized aligncenter' )

			}
		});
	});

	jQuery(window).load(function() {
		jQuery('article img').each(function() {
			current_width 			= jQuery(this).width();
			padding_border_width 	= jQuery(this).outerWidth() - current_width;
			current_resized_width 	= jQuery(this).attr('width');
			current_height 			= jQuery(this).height();
			content_width 			= jQuery('#content').width() - 20 - padding_border_width;
			
			aspect_ratio = current_width/current_height;
			if(current_width > content_width && current_resized_width>content_width) {
				jQuery(this).removeAttr('width');
			jQuery(this).removeAttr('height');
			
				new_height = content_width/aspect_ratio;
				jQuery(this).width(content_width+'px');
				jQuery(this).height(new_height);
				jQuery(this).addClass( 'resized aligncenter' )

			}
		});
	});
	
/*	-----------------------------------------------------------------------------------*/

	jQuery(function($) {
		
	/*-----------------------------------------------------------------------------------
	  Tabs shortcode
	-----------------------------------------------------------------------------------*/
		
		if ( jQuery( '.shortcode-tabs').length ) {	
			
			jQuery( '.shortcode-tabs').each( function () {
			
				var tabCount = 1;
			
				jQuery(this).children( '.tab').each( function ( index, element ) {
				
					var idValue = jQuery(this).parents( '.shortcode-tabs').attr( 'id' );
				
					var newId = idValue + '-tab-' + tabCount;
				
					jQuery(this).attr( 'id', newId );
					
					jQuery(this).parents( '.shortcode-tabs').find( 'ul.tab_titles').children( 'li').eq(index).find( 'a').attr( 'href', '#' + newId );
					
					tabCount++;
				
				});
			
				var thisID = jQuery(this).attr( 'id' );
			
				jQuery(this).tabs( { fx: { opacity: 'toggle', duration: 200 } } );
			
			});


		} // End IF Statement
		
	/*-----------------------------------------------------------------------------------
	  Toggle shortcode
	-----------------------------------------------------------------------------------*/
		
		if ( jQuery( '.shortcode-toggle').length ) {	
			
			jQuery( '.shortcode-toggle').each( function () {
				
				var toggleObj = jQuery(this);
				
				toggleObj.closedText = toggleObj.find( 'input[name="title_closed"]').attr( 'value' );
				toggleObj.openText = toggleObj.find( 'input[name="title_open"]').attr( 'value' );
				
				// Add logic for the optional excerpt text.
				if ( toggleObj.find( 'a.more-link.read-more' ).length ) {
					toggleObj.readMoreText = toggleObj.find( 'a.more-link.read-more' ).text();
					toggleObj.readLessText = toggleObj.find( 'a.more-link.read-more' ).attr('readless');
					toggleObj.find( 'a.more-link.read-more' ).removeAttr('readless');
					
					toggleObj.find( 'a.more-link' ).click( function () {
						
						var moreTextObj = jQuery( this ).next( '.more-text' );
						
						moreTextObj.animate({ opacity: 'toggle', height: 'toggle' }, 300).css( 'display', 'block' );
						moreTextObj.toggleClass( 'open' ).toggleClass( 'closed' );
						
						if ( moreTextObj.hasClass( 'open') ) {
						
							jQuery(this).text(toggleObj.readLessText);
						
						} // End IF Statement
						
						if ( moreTextObj.hasClass( 'closed') ) {
						
							jQuery(this).text(toggleObj.readMoreText);
						
						} // End IF Statement
						
						return false;
					});
				}
				
				toggleObj.find( 'input[name="title_closed"]').remove();
				toggleObj.find( 'input[name="title_open"]').remove();
				
				toggleObj.find( 'h4.toggle-trigger a').click( function () {
				
					toggleObj.find( '.toggle-content').animate({ opacity: 'toggle', height: 'toggle' }, 300);
					toggleObj.toggleClass( 'open' ).toggleClass( 'closed' );
					
					if ( toggleObj.hasClass( 'open') ) {
					
						jQuery(this).text(toggleObj.openText);
					
					} // End IF Statement
					
					if ( toggleObj.hasClass( 'closed') ) {
					
						jQuery(this).text(toggleObj.closedText);
					
					} // End IF Statement
					
					return false;
				
				});
						
			});


		} // End IF Statement
		
	}); // jQuery()
	

/* Load the Share Buttons */
jQuery(window).load(function(){
    var shareCode = jQuery('#share-post').html();
    jQuery('div.share').html(shareCode);
    
    /* digg button */
    (function() {
        var s = document.createElement('SCRIPT'), s1 = document.getElementsByTagName('SCRIPT')[0];
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'http://widgets.digg.com/buttons.js';
        s1.parentNode.insertBefore(s, s1);
      })();
});

/* add arrow to the drop down */
function Mx_nav(){
    jQuery(".nav li ul").prev().addClass('add-arrow')
    jQuery(".nav li ul li ul").prev().removeClass('add-arrow').addClass('add-arrow-right')
}   
jQuery(window).load(function(){                   
	    Mx_nav();
});
/* Responsive nav and widgets */
function swift_640_mobile(){
	jQuery(function ($){
		if(window.outerWidth<640){
			$('.pull,.pull_w').remove()
			/* Hide the nav and widgets to start with */
			$('.nav,.widget').hide()
			jQuery(window).load(function(){
				$('.add-arrow').removeClass('add-arrow')
				$('.add-arrow-right').removeClass('add-arrow-right')
			})
			/* Add the menu click area */
			if ($('#above-logo').length && $('#below-logo').length){
				$('#below-logo').prepend('<div class="pull alignleft" data="above-logo">&nbsp;</div>')
				$('#below-logo').prepend('<div class="pull alignright" data="below-logo">&nbsp;</div>')
			}else if($('#above-logo').length){
				$('#branding .div-content').append('<div class="pull alignright" data="above-logo">&nbsp;</div>')
			}else if($('#below-logo').length){
				$('#below-logo').append('<div class="pull alignright" data="below-logo">&nbsp;</div>')
			}
			/* Append a class to nav*/

			$('.pull').click(function(){
				$("#"+$(this).attr("data")+" .nav").slideToggle()
			})	

			/* Now the widgets */
			$('.widget').each(function(){
				title = $(this).find('.widget-title').html();
				if(!title){
					title ="Show";
				}
				id=$(this).attr('ID')
				$(this).before('<div class="pull_w" data="'+id+'">'+title+'</div>')
			});
			jQuery('.pull_w').click(function(){
				jQuery("#"+jQuery(this).attr("data")).slideToggle()
			});
		}else{
			$('.nav,.widget').show()
			$('.pull,.pull_w').remove()
		}
	});
}
jQuery(function ($) {
	$(document).ready(function(){
		swift_640_mobile();
		$(window).resize(function(){
				swift_640_mobile();
		});
	});

});