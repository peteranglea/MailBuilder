<?php
/**
 * Given an email ID, returns the stored data for that email
 */
require_once "config.php";

if (isset($_GET['id']) && is_numeric($_GET['id'])) {

	$query = "SELECT * FROM emails WHERE id = ?";
	$dbh = $pdo->prepare($query);
	$dbh->execute(array((int)$_GET['id']));
	$email = $dbh->fetch(PDO::FETCH_ASSOC);

	echo json_encode($email);
}
?>