<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Email Preview</title>
	<script src="node_modules/jquery/dist/jquery.js"></script>
	<script>
	function updatePreview() {
		var mailDocument = parent.mailDocument || [];
		$('body').html(parent.generatePreview());
	}
	</script>
</head>
<body>

</body>
</html>