<?php /*

  This file is part of a child theme called Wherebananas.
  Functions in this file will be loaded before the parent theme's functions.
  For more information, please read https://codex.wordpress.org/Child_Themes.

  Add your own functions below this line.
  ========================================== */ 

function wpbeginner_display_gravatar() { 
	global $current_user;
	get_currentuserinfo();
	// Get User Email Address
	$getuseremail = $current_user->user_email;
	// Convert email into md5 hash and set image size to 32 px
	$usergravatar = 'http://www.gravatar.com/avatar/' . md5($getuseremail) . '?s=32';
	echo '<img src="' . $usergravatar . '" class="wpb_gravatar" />';
} 
