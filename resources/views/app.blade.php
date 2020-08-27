<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="navbar-logo" content="{{ asset($s['logo']) }}"/>
    <meta property="og:title" content="{{ $s['og:title'] }}"/>
    <meta property="og:type" content="{{ $s['og:type'] }}"/>
    <meta property="og:url" content="{{ $s['og:url'] }}"/>
    <meta property="og:image" content="{{ $s['og:image'] }}"/>
    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:title" content="{{ $s['twitter:title'] }}"/>
    <meta name="twitter:description" content="{{ $s['twitter:description'] }}"/>
    <meta name="twitter:image" content="{{ asset($s['twitter:image']) }}"/>
    <meta name="description" content="{{ $s['description'] }}"/>
    <meta name="keywords" content="{{ $s['keywords'] }}"/>
    <meta property="fb:app_id" content="{{ $s['fbapp_id'] }}"/>

    <title>{{ $s['title'] }}</title>

    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700,900|Roboto+Mono:300,400,500">
    <link rel="stylesheet" href="{{ asset('fonts/icomoon/style.css') }}">

    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('fonts/icomoon/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/jquery-ui.css') }}">
    <link rel="stylesheet" href="{{ asset('fonts/icomoon/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/bootstrap-datepicker.css') }}">
    <link rel="stylesheet" href="{{ asset('css/animate.css') }}">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
          integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
          crossorigin="anonymous"/>
    <link rel="stylesheet" href="{{ asset('fonts/flaticon/font/flaticon.css') }}">
    <link rel="stylesheet" href="{{ asset('css/fl-bigmug-line.css') }}">


    <link rel="stylesheet" href="{{ asset('css/style.css') }}">


</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<script>var _settings = {!! json_encode($s) !!} </script>
<script src="{{ asset('js/app.js') }}"></script>

<script src="{{ asset('js/jquery-3.3.1.min.js') }}"></script>
<script src="{{ asset('js/jquery-migrate-3.0.1.min.js') }}"></script>
<script src="{{ asset('js/jquery-ui.js') }}"></script>
<script src="{{ asset('js/popper.min.js') }}"></script>
<script src="{{ asset('js/bootstrap.min.js') }}"></script>
<script src="{{ asset('js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('js/jquery.stellar.min.js') }}"></script>
<script src="{{ asset('js/jquery.countdown.min.js') }}"></script>
<script src="{{ asset('js/jquery.magnific-popup.min.js') }}"></script>
<script src="{{ asset('js/bootstrap-datepicker.min.js') }}"></script>

<script src="{{ asset('js/main.js') }}"></script>

</body>
</html>
