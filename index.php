<?php
  function path_assets($value): string {
    return './assets/' . $value;
  }
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="<?php echo path_assets('js/application.js'); ?>" defer></script>
  <style>
    <?php include(path_assets('css/firstview.php')); ?>
  </style>
  <link rel="stylesheet" href="<?php echo path_assets('css/style.css'); ?>" media="print" onload="this.media='all'">
  <link rel="icon" href="https://github.githubassets.com/favicons/favicon.png" type="image/vnd.microsoft.icon">
</head>

<body>

  <div class="a">Hello.</div>
  <div class="b">Piyo!</div>
  <div class="c">
    <p>First</p>
    <p>Second</p>
  </div>

</body>

</html>