<?php require_once "header.php";?>
<div id="titlebar">
	<div>
		<p>Choose an email</p>
	</div>
</div>

<div id="email_viewer">
	<div id="folder_list">
		<?php
		$query = "SELECT * FROM folders ORDER BY name ASC";
		$folders = $pdo->query($query)->fetchAll(PDO::FETCH_ASSOC);
		?>
		<ul>
			<?php
			foreach ($folders as $folder) {
				echo "<li><a href='javascript:;' data-folder-id='" . $folder['id'] . "'>" . $folder['name'] . "</a></li>\n";
			}
			?>
		</ul>
	</div>
	<div id="email_list">
		<!-- someday i'll program an email search
		<div>
			<input type="search" name="search" placeholder="Search" />
		</div> -->
		<ul></ul>
	</div>
	<div id="email_preview">
		<iframe src="iframe.php"></iframe>
	</div>
</div>

<?php require_once "footer.php";?>