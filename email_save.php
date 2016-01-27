<?php
/**
 * Saves an email given a valid email ID with content and/or title and/or folder
 */

require_once "config.php";

if (isset($_REQUEST['id']) && is_numeric($_REQUEST['id'])) {

	// is this a valid email?
	$dbh = $pdo->prepare('SELECT id FROM emails WHERE id=?');
	$dbh->execute(array($_REQUEST['id']));
	$email = $dbh->fetch(PDO::FETCH_ASSOC);
	if ($email) {

		// what are we saving?
		$properties = array();

		if (isset($_REQUEST['content'])) $properties['content'] = $_REQUEST['content'];
		if (isset($_REQUEST['email_name'])) $properties['email_name'] = $_REQUEST['email_name'];
		if (isset($_REQUEST['folder'])) $properties['folder'] = $_REQUEST['folder'];

		if (!empty($properties)) {
			$query = "UPDATE emails SET ";
			foreach ($properties as $key => $value) {
				$query .= $key . " = ?, ";
			}
			$query .= "date_updated = now() where id = " . $email['id'];
		
			try {
				$pdo->beginTransaction();
				$dbh = $pdo->prepare($query);
				$dbh->execute(array_values($properties));
				$pdo->commit();

				echo json_encode(array('success' => true));

			} catch (PDOException $e) {
				$pdo->rollBack();
				echo json_encode(array('success' => false, 'message' => $e->getMesage()));
			}
		
		} else {
			echo json_encode(array('success' => false, 'message' => "Nothing saved"));
		}

	} else {
		echo json_encode(array('success' => false, 'message' => "Invalid Email ID"));
	}
} else {
	echo json_encode(array('success' => false, 'message' => "Invalid Email ID"));
}

?>