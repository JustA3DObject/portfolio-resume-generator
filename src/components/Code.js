const Code = () => {
  return (
    <div className="Code">
      <pre className="broder rounded bg-light p-3">{`<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="{FullName}" />
        <meta property="og:title" content="{FullName}'s Portfolio" />
        <meta property="og:site_name" content="{FullName}'s Portfolio" />
        <meta property="og:url" content="{URL}" />
        <meta property="og:description" content="{Description}" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="{Thumbnail}" />
        <meta name="title" content="{FullName}'s Portfolio" />
        <meta name="description" content="{Description}" />
        <meta name="keywords" content="{KeyWords}" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="{URL}" />
        <meta property="twitter:title" content="{FullName}'s Portfolio" />
        <meta property="twitter:description" content="{Description}" />
        <meta property="twitter:image" content="{Thumbnail}" />
        <title>Portfolio_AuthorName's Portfolio</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="https://startbootstrap.github.io/startbootstrap-resume/css/styles.css" rel="stylesheet" />
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">{FullName}</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="{Thumbnail}" alt="{FullName}" /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                </ul>
            </div>
        </nav>
        <!-- Page Content-->
        <div class="container-fluid p-0">
            <!-- About-->
            <!-- Experience-->
            <!-- Education-->
            <!-- Skills-->
            <!-- Interests-->
            <!-- Awards-->
    </body>
</html>`}</pre>
    </div>
  );
};

export default Code;