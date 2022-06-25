/**
* This is compiled code, see readme in root directory for more details.
*/

$(document).ready(function(){$(".js-menu-button").on("click touchstart",function(e){e.preventDefault(),$.when($(".js-heart-menu, .js-heart-menu-button").removeClass("is-active")).done(function(){clearTimeout(void 0),setTimeout(function(){$("body").toggleClass("is-active")},150)})}),$(".js-heart-menu-button").on("click touchstart",function(e){e.preventDefault(),$.when($("body").removeClass("is-active")).done(function(){clearTimeout(void 0),setTimeout(function(){$(".js-heart-menu, .js-heart-menu-button").toggleClass("is-active")},150)})})}),$(window).on("resize",function(e){$(".js-heart-menu, .js-heart-menu-button").removeClass("is-active")});