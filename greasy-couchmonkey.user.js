
// Guaka's CouchSurfing mods
// version 0.1 BETA!
// 2009-02-18
// Copyright (c) 2009, Kasper Souren
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey 0.3 or later: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Hello World", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Guaka's CouchSurfing Mod
// @namespace     http://guaka.org/projects/greasemonkey/
// @description   closer to guaka's idea of how couchsurfing.com should look and function
// @include       http://*couchsurfing.com/*
// ==/UserScript==


// Add jQuery
var GM_JQ = document.createElement('script');
GM_JQ.src = 'http://jquery.com/src/jquery-latest.js';
GM_JQ.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(GM_JQ);

// Check if jQuery's loaded
function GM_wait() {
    if(typeof unsafeWindow.jQuery == 'undefined') { window.setTimeout(GM_wait,100); }
    else { $ = unsafeWindow.jQuery; letsJQuery(); }
}
GM_wait();

// All your GM code must be inside this function
function letsJQuery() {
    //alert($); // check if the dollar (jquery) function works

    // improve layout
    $('body').css('background', '#eee');
    $('body').removeAttr('background');
    $('table tr:first').hide();
    
    /*
    $('#nlogobg').hide();
    $('#cornerimg').hide();
    $('a:contains("Help make CouchSurfing more secure")').hide();
    $('a:contains("Visit the Surf Shop")').hide();
    */
    //if on home page...
    
    // Hide getting verified box on home page
    $('div.communitybox:first').hide();
    $('div.generalbox:contains("CS Tips")').hide();
    $('div.personalbox:contains("referrals")').hide();
    $('div.generalbox:contains("Other useful information")').hide();
    $('strong:contains("Bandwidth")').hide();
    
    // Hide 10 tips
    $('div.generalbox:last').hide();
    
    
    //if on search page
    $('td td:contains("More information on vouching")').hide();
    $('td td:contains("More information on verification")').hide();
    $('td td:contains("Vouched")').hide();
    $('td td:contains("Verification Level")').hide();
    $('td td:contains("Ambassadors")').hide();
    $('div.form_intro').hide();
    
    //if on profile page
    // profile
    $('h2:contains("General Information")').hide().parent().parent().parent().parent()
	.css('background', '#f5f5f5')
	.css('-moz-border-radius-topleft', '0.8em')
	.css('-moz-border-radius-topright', '0.8em')
	;
    $('div.iconbox').hide();
    $("a:contains('Verified')").hide();
    $('h3:contains("Designations")').hide();
    //$('div.reference_to').show();  hide picture of profile you're visiting
    
    //group killfile!
    // $("div a:contains('Super Troll')").parent().parent().parent().hide();
}



