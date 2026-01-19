<?php 

require_once 'app/Controllers/pages/AdminPageController.php';
require_once 'app/Controllers/pages/LoginPageController.php';
require_once 'app/Controllers/pages/HomePageController.php';

if ($_SERVER['REQUEST_URI'] == '/index.php') {
    $controller = new HomePageController();
    $controller->index();
    exit;
}

if ($_SERVER['REQUEST_URI'] == '/index.php/login') {
    $controller = new LoginPageController();
    $controller->index();
    exit;
}

if ($_SERVER['REQUEST_URI'] == '/index.php/admin') {
    $controller = new AdminPageController();
    $controller->index();
    exit;
}