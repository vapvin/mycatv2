<?php
defined('BASEPATH') OR exit('No direct script access allowed');

$active_group = 'default';
$query_builder = TRUE;
$host = 'animal.somethingoranything.com';
$db_name = 'animal';

$db['default'] = array(
	'dsn'			=> 'mysql:host='.$host.';dbname='.$db_name,
	//'hostname'		=> 'localhost',
	'username'		=> 'animal',
	'password'		=> 'toyproject123!@',
	'database'		=> $db_name,
	'dbdriver'		=> 'pdo',
	'dbprefix'		=> '',
	'pconnect'		=> FALSE,
	'db_debug'		=> (ENVIRONMENT !== 'production'),
	'cache_on'		=> FALSE,
	'cachedir'		=> '',
	'char_set'		=> 'utf8',
	'dbcollat'		=> 'utf8_general_ci',
	'swap_pre'		=> '',
	'encrypt'		=> FALSE,
	'compress'		=> FALSE,
	'stricton'		=> FALSE,
	'failover'		=> array(),
	'save_queries'	=> TRUE
);
