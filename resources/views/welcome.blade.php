<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ScheduleMaker</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&family=Roboto:wght@500;900&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&family=Poppins:wght@300&family=Roboto:wght@500;900&display=swap"
        rel="stylesheet">
    <link href="{{asset('css/app.css')}}" rel="stylesheet" />

</head>

<body>
    <div id="app"></div>
    <script src="{{asset('js/app.js')}}"></script>
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>

    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
</body>

</html>