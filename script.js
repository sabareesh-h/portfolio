<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Gradient Background</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="animated-gradient"></div>
    <script src="script.js"></script>
</body>
</html>
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
}

.animated-gradient {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #4d4d4d, #3c3c3c, #1e1e1e, #111111,#000000);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    z-index: -1;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% 
}

.glassy-overlay{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.05);
    backdrop-filter:blur(50px);
    pointer-events: none;
    z-index: -1;
}
.container{
    position: absolute;
    top: 0;
    z-index: 100000;
}