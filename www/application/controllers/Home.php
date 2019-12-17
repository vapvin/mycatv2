<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {
	function __construct () {
		parent::__construct();
		session_start();
	}

	public function index () {
		$this->load->view('template/header');
		$this->load->view('main/index');
		$this->load->view('template/footer');
	}
}
