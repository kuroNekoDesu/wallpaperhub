<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Language" content="en" />
        <meta name="viewport" content="width=1180" />
        <title><?php if(isset($title)) echo $title . ' · ' ?>wallpaperhub.cf</title>
        <link href="<?= url('/css/app.css') ?>" type="text/css" rel="stylesheet" />
        <link href="<?= url('/images/favicon.png') ?>" type="image/png" rel="shortcut icon" />
        <link href="//fonts.googleapis.com/css?family=Roboto:300,400" type="text/css" rel="stylesheet" />
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" type="text/css" rel="stylesheet" />
    </head>
    <body>
        <div id="root"></div>
        <script src="<?= url('/js/app.js') ?>" type="text/javascript"></script>
    </body>
</html>
