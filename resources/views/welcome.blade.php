<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        {{-- <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
        <script src="{{ asset('/js/app.js') }}"></script> --}}
        <link href="/css/app.css" rel="stylesheet">
        @vite(['src/main.js', 'resources/css/app.css'])
        <link rel="shortcut icon" type="image/x-icon" href="{{ asset('build/assets/HeroImage.png') }}">
        <meta name="google-site-verification" content="efg2XUb3x3NC7DsUUkEtjtQ2k5ewYAMGt-rkqAjlQDM" />
    </head>
    <body class="antialiased">
       <div id="app"></div>
       <script>
        window.Laravel = {
            csrfToken: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
         };
     </script>
    </body>
</html>
