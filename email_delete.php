<?php
/**
 * Given an email ID, deletes that email and returns the ID in a JSON object
 */

require_once "config.php";

if (isset($_GET['id']) && is_numeric($_GET['id'])) {

	$query = "DELETE FROM emails WHERE id=?";
	$dbh = $pdo->prepare($query);
	$dbh->execute(array($_GET['id']));

	$obj = array('id' => $_GET['id']);
	echo json_encode($obj);

}