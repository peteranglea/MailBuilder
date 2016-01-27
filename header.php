<?php
require_once "config.php";

?>
<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MailBuilder</title>
    <link rel="stylesheet" href="node_modules/foundation-sites/dist/foundation.css">
    <link rel="stylesheet" href="foundation-icons/foundation-icons.css">
    <link rel="stylesheet" href="css/app.css">
  </head>
  <body>
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">MailBuilder</li>
          <li><a href="index.php">My Emails</a></li>
          <li><a data-open="new_email" id="new_email_link">New Email</a></li>
        </ul>
      </div>
    </div>

    <!-- NEW EMAIL MODAL -->
    <div id="new_email" class="reveal small" data-reveal>
      <h2>Create new email</h2>
      <p><label>Email name <input type="text" name="email_name" value="<?php echo $EMAIL_DEFAULT_NAME;?>"/></label></p>

      <?php
      $query = "SELECT * FROM folders ORDER BY name ASC";
      $folders = $pdo->query($query)->fetchAll(PDO::FETCH_ASSOC);
      ?>
      <p><label>File under... 
        <select name="folder">
          <option value=""></option>
          <?php
          foreach ($folders as $folder) {
           echo "<option value='" . $folder['id'] . "'>" . $folder['name'] . "</option>\n";
          }
          ?>
        </select></label></p>

      <p><label>Template
        <select name="template">
          <option value=""></option>
          <?php
          foreach ($TEMPLATES as $key => $template) {
           echo "<option value='" . $key . "'>" . $template['name'] . "</option>\n";
          }?>
        </select></label></p>

      
      <p><a class="button" href="javascript:;">Create Email</a></p>
      <button class="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <!-- COPY EMAIL MODAL -->
    <div id="new_email_copy" class="reveal small" data-reveal>
      <h2>Copy email</h2>
      
      <input type="hidden" name="email_copy" value="" />
      <input type="hidden" name="template" value="" />
      <p><label>Email name <input type="text" name="email_name" value=""/></label></p>

      <p><label>File under... 
        <select name="folder">
          <option value=""></option>
          <?php
          foreach ($folders as $folder) {
            echo "<option value='" . $folder['id'] . "'>" . $folder['name'] . "</option>\n";
          }
          ?>
        </select></label></p>

      <p><a class="button" href="javascript:;">Create Email</a></p>
      <button class="close-button" data-close aria-label="Close modal" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
