<?php
/**
 * CONFIGURATION SETTINGS
 */

# Create a unique salt here and don't change it
$SALT = 'abc123';

# Set up database
$dbinfo['host'] = 'localhost';
$dbinfo['user'] = 'mailuser';
$dbinfo['pass'] = 'mailpass';
$dbinfo['name'] = 'mailbuilder';

# Templates directory (this should probably stay as-is)
$TEMPLATE_DIR = "templates";

# Default name for new emails
$EMAIL_DEFAULT_NAME = date('Y-m-d') . " New Email";

##
## Stop editing here... That's it!
##





/**
 * INITIALIZATION
 */

# Turn on output buffering.
ob_start();

# Connect to database server.
try {
	$pdo = new PDO('mysql:host='.$dbinfo['host'].';dbname='.$dbinfo['name'], $dbinfo['user'], $dbinfo['pass']);
	$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$pdo->setAttribute(PDO::ATTR_CASE, PDO::CASE_LOWER);
	$pdo->setAttribute(PDO::ATTR_ORACLE_NULLS, PDO::NULL_EMPTY_STRING);
} catch (PDOException $e) {
	die ("Error: Couldn't connect to database server.");
}


/**
 * EMAIL TEMPLATE SCAN
 */

$TEMPLATES = array();

# Generate templates array by scanning through the templates directory
$dir = $TEMPLATE_DIR . "/";
$dir_contents = scandir($dir);

foreach ($dir_contents as $dir_name) {
	// if this is an actual directory, look inside
	if (is_dir($dir . $dir_name) && substr($dir_name, 0, 1) != ".") {
		// check for required default.json and info.json files
		if (file_exists($dir . $dir_name . "/default.json") && file_exists($dir . $dir_name . "/info.json")) {
			$template = json_decode(file_get_contents($dir . $dir_name . "/info.json"));
			$default = file_get_contents($dir . $dir_name . "/default.json");

			$TEMPLATES[$dir_name] = array(
				'name' => $template->name,
				'default' => $default
			);

			// check for a help file to include on the edit screen
			$helpFile = $dir . $dir_name . "/help.md";
			if (file_exists($helpFile)) {
				$TEMPLATES[$dir_name]['helpFile'] = $helpFile;
			}
		}
	}
}

?>