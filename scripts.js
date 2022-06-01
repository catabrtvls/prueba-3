const datos = [
    {
        picsum: "https://picsum.photos/id/225/900/600",
        title: "Calidez",
        text: "Amor en todo lo que hacemos.",
    },
    {
        picsum: "https://picsum.photos/id/25/900/600",
        title: "Japón",
        text: "Inspiración en la cultura nipona.",
    },
    {
        picsum: "https://picsum.photos/id/312/900/600",
        title: "Dulzor",
        text: "Los mejores ingredientes.",
    },

    {
        picsum: "https://picsum.photos/id/1080/900/600",
        title: "Natural",
        text: "Materias primas seleccionadas.",
    },

    {
        picsum: "https://picsum.photos/id/360/900/600",
        title: "Colores",
        text: "Suaves y tonalidades pasteles.",
    },

    {
        picsum: "https://picsum.photos/id/365/900/600",
        title: "Delicadeza",
        text: "Para lograr los mejores productos.",
    }
];

//
datos.forEach((d, i) => {
    if (i % 2 == 0) {

        document.getElementById("trabajos").innerHTML +=
            '<div class="container fluid p-0"><div class="row g-0"><div class="col-lg-6"><a class="portfolio-item" href="#!"><div class="caption"><div class="caption-content"><div class="h2">' +
            d.title +
            '</div><p class="mb-0">' +
            d.text +
            '</p></div></div><img class="img-fluid" src="' +
            d.picsum +
            '"/></a></div>';

          } else {
              // impar
              document.querySelector("#trabajos").innerHTML +=
              '<div class=container><div class="row g-0"><div class="col-lg-6"><a class="portfolio-item" href="#!"><div class="caption"><div class="caption-content"><div class="h2">' +
              d.title +
              '</div><p class="mb-0">' +
              d.text +
              '</p></div></div><img class="img-fluid" src="' +
              d.picsum +
              '"/></a></div>';
          }
      });

window.addEventListener("DOMContentLoaded", (event) => {
    const sidebarWrapper = document.getElementById("sidebar-wrapper");
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector(".menu-toggle");
    menuToggle.addEventListener("click", (event) => {
        event.preventDefault();
        sidebarWrapper.classList.toggle("active");
        _toggleMenuIcon();
        menuToggle.classList.toggle("active");
    });

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll("#sidebar-wrapper .js-scroll-trigger"));
    scrollTriggerList.map((scrollTrigger) => {
        scrollTrigger.addEventListener("click", () => {
            sidebarWrapper.classList.remove("active");
            menuToggle.classList.remove("active");
            _toggleMenuIcon();
        });
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector(".menu-toggle > .fa-bars");
        const menuToggleTimes = document.body.querySelector(".menu-toggle > .fa-xmark");
        if (menuToggleBars) {
            menuToggleBars.classList.remove("fa-bars");
            menuToggleBars.classList.add("fa-xmark");
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove("fa-xmark");
            menuToggleTimes.classList.add("fa-bars");
        }
    }

    // Scroll to top button appear
    document.addEventListener("scroll", () => {
        const scrollToTop = document.body.querySelector(".scroll-to-top");
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    });
});

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
}

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += 0.1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
}
