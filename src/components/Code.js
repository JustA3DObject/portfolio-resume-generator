// Object that contains all the variable names used to generate output code
const Code = ({
  FullName,
  Thumbnail,
  URL,
  Description,
  KeyWords,
  FirstName,
  LastName,
  Address,
  Phone,
  Email,
  Socials,
  Experience,
  Education,
  Skills,
  Interests,
  Awards,
}) => {
  // Meta contains all the socials and their links for creating redirecting link and icons in output code
  const Meta = {
    Facebook: ["facebook-f", "https://fb.me/"],
    WhatsApp: ["whatsapp", "https://wa.me/"],
    Instagram: ["instagram", "https://instagr.am/"],
    Twitter: ["twitter", "https://twitter.com/"],
    LinkedIn: ["linkedin-in", "https://linkedin.com/in/"],
    GitHub: ["github", "https://github.com/"],
    StackOverflow: ["stack-overflow", "https://stackoverlow.com/u/"],
  };
  // Return contains the code that will be generate as output to the user
  return (
    <div className="Code">
      <pre className="broder rounded bg-light p-3">{`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="author" content="${FullName}">
        <meta property="og:title" content="${FullName}'s Portfolio">
        <meta property="og:site_name" content="${FullName}'s Portfolio">
        <meta property="og:url" content="${URL}">
        <meta property="og:description" content="${Description}">
        <meta property="og:type" content="website">
        <meta property="og:image" content="${Thumbnail}">
        <meta name="title" content="${FullName}'s Portfolio">
        <meta name="description" content="${Description}">
        <meta name="keywords" content="${KeyWords}">
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="${URL}">
        <meta property="twitter:title" content="${FullName}'s Portfolio">
        <meta property="twitter:description" content="${Description}">
        <meta property="twitter:image" content="${Thumbnail}">
        <title>${FullName}'s Portfolio</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico">
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css">
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="https://startbootstrap.github.io/startbootstrap-resume/css/styles.css" rel="stylesheet">
    </head>
    <body id="page-top">
        <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none">${FullName}</span>
                <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="${Thumbnail}" alt="${FullName}"></span>
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
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">
                        ${FirstName}
                        <span class="text-primary">${LastName}</span>
                    </h1>
                    <div class="subheading mb-5">
                        ${Address} &bull; ${Phone} &bull;
                        <a href="mailto:name@email.com">${Email}</a>
                    </div>
                    <p class="lead mb-5">${Description}</p>
                    <div class="social-icons">
                        ${Object.keys(Socials).map(
                          (soc) =>
                            `<a class="social-icon" href="${Meta[soc][1]}${Socials[soc]}"><i class="fab fa-${Meta[soc][0]}"></i></a>`
                        ).join(`
                        `)}
          </div>
                </div>
            </section>
        <hr class="m-0">
            <!-- Experience-->
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Position</h3>
                            <div class="subheading mb-3">Company</div>
                            <p>Job desciption</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Work period</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Position</h3>
                            <div class="subheading mb-3">Company</div>
                            <p>Job desciption</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Work period</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Position</h3>
                            <div class="subheading mb-3">Company</div>
                            <p>Job desciption</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Work period</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Position</h3>
                            <div class="subheading mb-3">Company</div>
                            <p>Job desciption</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Work period</span></div>
                    </div>
                </div>
            </section>
        <hr class="m-0">
            <!-- Education-->
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University/College/School</h3>
                            <div class="subheading mb-3">Course</div>
                            <div>Speciality</div>
                            <p>GPA</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Study period</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">University/College/School</h3>
                            <div class="subheading mb-3">Course</div>
                            <div>Speciality</div>
                         <p>GPA</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Study period</span></div>
                    </div>
                </div>
            </section>
        <hr class="m-0">
            <!-- Skills-->
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-angular"></i></li>
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                        <li class="list-inline-item"><i class="fab fa-less"></i></li>
                        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                        <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
                        <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Field-1
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Field-2
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Field-3
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Field-4
                        </li>
                    </ul>
                </div>
            </section>
        <hr class="m-0">
            <!-- Interests-->
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <p>Paragraph-1</p>
                    <p class="mb-0">Paragraph-2</p>
                </div>
            </section>
        <hr class="m-0">
            <!-- Awards-->
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Awards & Certifications</h2>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Award-1
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Award-2
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Award-3
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Award-4
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Award-5
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Award-6
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            Award-7
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="https://github.com/JustA3DObject/portfolio-resume-generator/blob/main/src/components/Javascript.js"></script>
    </body>
</html>`}</pre>
    </div>
  );
};

export default Code;
