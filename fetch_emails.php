<?php
/**
 * Given a folder id, returns JSON of the emails in that folder
 */
require_once "config.php";

if (isset($_GET['folder']) && is_numeric($_GET['folder'])) {

	$query = "SELECT id, template, email_name, date_updated, hash FROM emails WHERE folder = ? ORDER BY date_updated DESC LIMIT 50";
	$dbh = $pdo->prepare($query);
	$dbh->execute(array((int)$_GET['folder']));
	$emails = $dbh->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($emails);
}
?>