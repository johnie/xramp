<?php
/*
 * TEMPLATE NAME: Front page
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;
$context['about'] = Timber::get_post(35);
$context['mission'] = Timber::get_post(44);
$context['vision'] = Timber::get_post(46);
Timber::render('front.twig', $context);
