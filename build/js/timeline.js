$(function(){function e(e,t){var s=e,a=t,o=s.siblings(),i=a.siblings(),n=s.offset(),r=a.offset(),l=o.offset(),h=i.offset(),d=n.top,p=r.top,c=Math.min(n.left,l.left),$=Math.min(r.left,h.left),v=s.outerWidth(!0)+o.outerWidth(!0)+6,f=a.outerWidth(!0)+i.outerWidth(!0)+6,u=s.height(),g=a.height(),_=$>=c&&$<=c+v&&p>=d&&p<=d+u,b=$+f>=c&&$+f<=c+v&&p>=d&&p<=d+u,m=$>=c&&$<=c+v&&p+g>=d&&p+g<=d+u,C=$+f>=c&&$+f<=c+v&&p+g>=d&&p+g<=d+u;return _||b||m||C}function t(){$(".wiki").scrollTop(0),$(".wiki img").each(function(){var e=$(this);if(e.parents().hasClass("thumb")){var t=$(".wiki .mw-parser-output").width(),s=e.width(),a=e.height()*(t/s);e.width(t),e.height(a),e.parents(".thumbinner").find(".thumbcaption").width(t)}})}function s(){var e=$(".wiki").scrollTop();Math.abs(p-e)<=c||(e>p&&e>v?$(".wiki #toc").hasClass("show-hide-content")||$(".navbar-fixed-top").removeClass("nav-down").addClass("nav-up"):$(".navbar-fixed-top").removeClass("nav-up").addClass("nav-down"),p=e)}function a(){var e=$(".authors.resiz").offset().top-7;$(".events .ui-resizable-handle").offset({top:e})}function o(){parseInt($(".years").css("left"));var e=$(document).scrollLeft();$(".years, .year-line").css({left:-e})}function i(){$("#mySidebar").toggleClass("open"),$("#chevrons").toggleClass("fa-chevron-right fa-chevron-left"),$("#mySidebar").width(u),$(".authors, .events").width(g+=u)}function n(){$("#mySidebar").toggleClass("open"),$("#chevrons").toggleClass("fa-chevron-left fa-chevron-right"),$("#mySidebar").width("5px"),$(".authors, .events").width(g-=u)}for(var r=1750;r<1900;r++){var l=$('<li class="year '+r+'"><span class="year_span">'+r+"</span></li>");$("ul.years").append(l),r%2!=0?$("ul.years li."+r).fadeTo(1,0).addClass("odd"):$("ul.years li."+r).addClass("even")}for(r=1750;r<1900;r++){var h=$('<li class="year_line_year '+r+'"><span class="year_line_year_span">'+r+"</span></li>");$(".year-line").append(h),r%2!=0?$(".year-line li."+r).fadeTo(1,0).addClass("year_odd"):$(".year-line li."+r).addClass("year_even")}$.getJSON("json_data/authors.json",function(e){$.each(e,function(e,t){var s=t.fname,a=t.lname,o=t.birth,i=t.death,n=t.m_top,r=s.replace(/\s+/g,"")+a.replace(/\s+/g,""),l=$('<div id="'+r+'" class="author '+r+'" data-birth="'+o+'" data-death="'+i+'" data-fname="'+s+'" data-lname="'+a+'"><div class="author_contents"><a>'+s+" "+a+' </a><span class="life_span">'+o+"-"+i+"</span></div></div>");$(".author_wrapper").append(l);var h=$("ul.years li."+o).offset().left,d=18*(i-o+1);$("."+r).css({position:"absolute",left:h,width:d,"background-color":"rgba(255, 0, 0, 0.5)","margin-top":n})})}).done(function(){var e=$(".author").map(function(){return parseInt($(this).css("margin-top"))}).get(),t=Math.max.apply(null,e);$(".author_wrapper").height(t);var s=$(".authors").height();$(".authors .year").height(s)}),$.getJSON("json_data/events_extract.json",function(e){$.each(e,function(e,t){var s=t.Year,a=t.Year_end,o=t.Event,i=t.m_top,n=$($.parseHTML(o)).text().replace(/[^a-zA-Z0-9]+/g," ").split(/\s+/).slice(0,5).join("_");if(s!==a)r=s+"-"+a;else var r=s;var l=$('<div data-year="'+s+'" data-year_end="'+a+'"><div id="'+n+'" class="event event_tooltip '+n+'"></div><div class="event_contents"><span class="event_year">'+r+' </span><span class="close-tooltip"><i class="fa fa-times fa-1" aria-hidden="true"></i></span><span class="event_text">'+o+"</span></div></div>");$(".events_wrapper").append(l);var h=$("ul.years li."+s).offset().left,d=($("ul.years li."+a).offset().left,18*(a-s+1));$("."+n).css({left:h,width:d,height:19,"margin-top":i})})}).done(function(){$(".event_tooltip").each(function(){var e=$(this).offset().left+parseInt($(this).width()),t=$(this).offset().top;$(this).siblings(".event_contents").css({left:e+6,"margin-top":t})}),$(".event_tooltip").click(function(){var e=$(this),t=$(this).parent().data("year"),s=$(this).parent().data("year_end"),a=$(this).offset().left,o=$(this).width();!e.hasClass("expose-event")||$(".expose-event").length>1?($(".expose-author").removeClass("expose-author"),$(".expose-event").removeClass("expose-event"),$(".expose-event-contents").removeClass("expose-event-contents"),e.addClass("expose-event"),e.siblings().addClass("expose-event-contents"),e.siblings().removeClass("hide-tooltip").addClass("show_tooltip"),$(".expose").removeClass("expose"),e.siblings().toggleClass("expose"),e.toggleClass("expose"),$("#overlay").fadeIn(300),$(".bring-to-front").removeClass("bring-to-front"),e.siblings(".event_contents").addClass("bring-to-front"),$(".vertical-line").css({display:"block",left:a,width:o}),$(".event_tooltip").not(e).each(function(){var e=$(this).parent().data("year"),a=$(this).parent().data("year_end");t>=e&&t<=a||e>=t&&e<=s?($(this).toggleClass("expose"),$(this).siblings().removeClass("hide-tooltip").addClass("show_tooltip").toggleClass("expose")):$(this).siblings().hasClass("event_contents")}),$(".author").each(function(){var e=$(this).data("birth"),a=$(this).data("death");(t>=e&&t<=a||e>=t&&e<=s)&&$(this).toggleClass("expose")})):(e.siblings().removeClass("show_tooltip").addClass("hide-tooltip"),$(".vertical-line").css({display:"none"}),e.removeClass("expose-event"),e.removeClass("expose-event-contents"),$(".expose-author").removeClass("expose-author"),$(".expose-author-rhombus").removeClass("expose-author-rhombus"),$(".expose").removeClass("expose"),$("#overlay").fadeOut(300))}),$(".event_contents").click(function(e){if("fa fa-times fa-1"!==e.target.className){var t=$(this);$(this).parent().data("year"),$(this).offset().left,$(this).siblings(".event_tooltip").width();$(".bring-to-front").removeClass("bring-to-front"),t.addClass("bring-to-front"),t.siblings(".event_tooltip").addClass("bring-to-front")}}),$(".event_text a").click(function(e){$("#mySidebar").hasClass("open")||i(),e.preventDefault();var s=$(this).attr("title");$.ajax({type:"GET",url:"https://en.wikipedia.org/w/api.php?action=parse&page="+s+"&prop=text&redirects=1&format=json&callback=?",contentType:"application/json; charset=utf-8",async:!1,dataType:"json",success:function(e,t,s){var a=e.parse.text["*"];$(".wiki").html(a)},error:function(e){}}).done(function(){$("#mySidebar .wiki .NavHead").append('<span class="NavHead-toggle"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>'),t()})}),$(".author").click(function(s){var a=$(this);if(this_birth=$(this).data("birth"),this_death=$(this).data("death"),line_position=$(this).offset().left,line_width=$(this).width(),a.hasClass("expose-author"))$(".vertical-line").css({display:"none"}),a.removeClass("expose-author"),$(".expose-author").removeClass("expose-author"),$(".expose").removeClass("expose"),$("#overlay").fadeOut(300),n();else{$("#mySidebar").hasClass("open")||i(),$(".expose-author").removeClass("expose-author"),$(".expose-event").removeClass("expose-event"),$(".expose-event-contents").removeClass("expose-event-contents"),a.addClass("expose-author"),$(".expose").removeClass("expose"),$(".bring-to-front").removeClass("bring-to-front"),$(this).toggleClass("expose"),$("#overlay").fadeIn(300),$(".vertical-line").css({display:"block",left:line_position,width:line_width}),$(".event_tooltip, .event_contents").each(function(){var e=$(this).parent().data("year"),t=$(this).parent().data("year_end");this_birth>=e&&this_birth<=t||e>=this_birth&&e<=this_death?($(this).toggleClass("expose"),$(this).hasClass("event_contents")&&$(this).removeClass("hide-tooltip").addClass("show_tooltip")):($(this).removeClass("expose"),$(this).hasClass("event_contents")&&$(this).removeClass("show_tooltip").addClass("hide-tooltip"))}),$(".author").not(a).each(function(){var e=$(this).data("birth"),t=$(this).data("death");(e>=this_birth&&e<=this_death||t<=this_death&&t>=this_birth||e<=this_birth&&t>=this_death)&&$(this).toggleClass("expose")});var o=a.data("fname"),l=a.data("lname");$.ajax({type:"GET",url:"https://en.wikipedia.org/w/api.php?action=parse&page="+o+" "+l+"&prop=text&redirects=1&format=json&callback=?",contentType:"application/json; charset=utf-8",async:!1,dataType:"json",success:function(e,t,s){if(void 0!==e.parse)var a=e.parse.text["*"];$(".wiki").html(a)},error:function(e){}}).done(function(){$("#mySidebar .wiki .NavHead").append('<span class="NavHead-toggle"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>'),t()})}var h=$(".show_tooltip");for(console.log("______________________________"),r=0;r<h.length;r++){var d=$(h[r]),p=parseInt($(d).css("margin-top")),c=$(d).siblings(".event_tooltip");for(console.log("first_top: "+p),j=r+1;j<h.length;j++){var v=$(h[j]),f=(parseInt($(v).css("margin-top")),$(v).siblings(".event_tooltip"));console.log("first: "+d.siblings().attr("id")),console.log("second: "+v.siblings().attr("id")),e($(d),$(v))||e($(d),$(f))||e($(c),$(v))||e($(c),$(f))?(console.log("OVERLAP"),console.log($(d).siblings(".event_tooltip").attr("id")+" overlaps with "+$(v).siblings(".event_tooltip").attr("id")),$(v).css({"margin-top":p+20}),$(v).siblings(".event_tooltip").css({"margin-top":p+20})):console.log("DONT OVERLAP")}}}),$(document).click(function(e){0===$(e.target).closest(".event_tooltip, .event_contents, .author, .sidebar, .about, .info-button, .about-text").length&&($(".vertical-line").css({display:"none"}),$(".expose-author").removeClass("expose-author"),$(".expose-event").removeClass("expose-event"),$(".expose-event-contents").removeClass("expose-event-contents"),$(".expose").removeClass("expose"),$("#overlay").fadeOut(300)),0===$(e.target).closest(".about, .info-button, .about-text").length&&$(".about").removeClass("visible").addClass("hidden").hide()}),$(".close-tooltip").click(function(){$(this).parent().removeClass("show_tooltip").addClass("hide-tooltip")}),$(".event").parent().draggable({axis:"y",cursor:"move",containment:".events"}),a()}),$("#mySidebar .wiki").on("click","a",function(e){if("#"!==$(this).attr("href").charAt(0)){e.preventDefault();var s=$(this).attr("title");$.ajax({type:"GET",url:"https://en.wikipedia.org/w/api.php?action=parse&page="+s+"&prop=text&redirects=1&format=json&callback=?",contentType:"application/json; charset=utf-8",async:!1,dataType:"json",success:function(e,t,s){var a=e.parse.text["*"];$.parseHTML(a);$(".wiki").html(a)},error:function(e){}}).done(function(){$("#mySidebar .wiki .NavHead").append('<span class="NavHead-toggle"><i class="fa fa-chevron-down" aria-hidden="true"></i></span>'),t()})}}),$("#mySidebar .wiki").on("click",".NavHead",function(){$(this).siblings(".NavContent").toggleClass("show-hide-content"),$(this).find(".NavHead-toggle i").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up")}),$("#mySidebar").on("click",".contents-toggle",function(){$(".wiki #toc").toggleClass("show-hide-content")}),$(".wiki #toc").hasClass("show-hide-content")&&$(".navbar-fixed-top").addClass("nav-down");var d,p=0,c=30,v=$(".navbar-fixed-top").outerHeight();for($(".wiki").on("scroll",function(e){d=!0}),setInterval(function(){d&&(s(),d=!1)},250),$(".resiz").not(":last").resizable({handles:"s",minHeight:40,maxHeight:parseInt($(window).height())-40,start:function(){this.other=$(this).next(),this.startHeight=this.other.height()},resize:function(e,t){var s=t.element.resizable("option","minHeight"),o=t.size.height-t.originalSize.height;o>this.startHeight-s&&(o=this.startHeight,t.size.height=t.originalSize.height+o-s),this.other.height(Math.max(40,this.startHeight-o)),a()}}),r=1700;r<2050;r+=10)$("."+r).css({"background-color":"rgba(0, 0, 0, 0.08)","font-weight":"bold","font-size":".7em"}),r%100==0&&$("."+r).css({"font-size":".9em"});var f=$(".years").width();$(".events, .authors, .works, .year-line, #overlay").width(f),$(document).scroll(function(){o()});var u=.33*$(window).width()-5,g=$(".authors, .events").width();$(".sidebar_button").click(function(){$("#mySidebar").hasClass("open")?n():i()}),$(".sidebar_button").mouseenter(function(){$(this).find("#chevrons").css("color","#f7f7f7")}).mouseleave(function(){$(this).find("#chevrons").css("color","#434343")}),$(".info-button").click(function(){$(".about").hasClass("hidden")?$(".about").removeClass("hidden").addClass("visible").show():$(".about").removeClass("visible").addClass("hidden").hide()}),$(".close-about").click(function(){$(".about").removeClass("visible").addClass("hidden").hide()})});