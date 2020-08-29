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


</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<script>var _settings = {!! json_encode($s) !!} </script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
