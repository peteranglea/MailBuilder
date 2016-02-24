<?php
/**
 * Adds new email to database given a name and destination folder
 *
 * Returns ID as JSON object if successful
 */

require_once "config.php";

if (isset($_GET['email_name']) && isset($_GET['folder']) && is_numeric($_GET['folder']) && isset($_GET['template']) && array_key_exists($_GET['template'], $TEMPLATES)) {
	
	// are we copying another email? if so, grab its template and content
	if (isset($_GET['email_copy']) && is_numeric($_GET['email_copy'])) {
		$query = "SELECT template, content FROM emails WHERE id = ?";
		$dbh = $pdo->prepare($query);
		$dbh->execute(array($_GET['email_copy']));
		$row = $dbh->fetch(PDO::FETCH_ASSOC);
		$template = $row['template'];
		$content = $row['content'];

	// otherwise use the provided template and its default content
	} else {
		$template = $_GET['template'];
		$content = $TEMPLATES[$_GET['template']]['default'];
	}

	// insert
	$query = "INSERT INTO emails(email_name, folder, template, content) VALUES (?,?,?,?)";
	$dbh = $pdo->prepare($query);
	$dbh->execute(array($_GET['email_name'], $_GET['folder'], $template, $content));

	// retrieve latest
	$query = "SELECT id FROM emails ORDER BY id DESC LIMIT 1";
	$id = $pdo->query($query)->fetchColumn();

	// update with hash
	$query = "UPDATE emails SET hash = ? WHERE id = ?";
	$dbh = $pdo->prepare($query);
	$dbh->execute(array(sha1($SALT . $id), $id));

	$obj = array('id' => $id);
	echo json_encode($obj);
	
}