/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

function downloadPDF() {
  // URL of the PDF file
  var pdfUrl = 'resume.pdf'; // Replace with the actual URL of your PDF

  // Create a temporary link element
  var link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'resume.pdf'; // Default name for the downloaded file

  // Append the link to the body (it needs to be in the DOM to work)
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Remove the link from the DOM
  document.body.removeChild(link);
}
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.filters a');
    const contentDivs = document.querySelectorAll('.content > div');

    function updateContent(filter) {
        // Remove active class from all links and content divs
        links.forEach(link => link.classList.remove('active'));
        contentDivs.forEach(div => div.classList.remove('active'));

        // Add active class to the link with the matching filter
        document.querySelector(`.filters a[data-filter="${filter}"]`).classList.add('active');

        // Show the content divs that match the filter
        document.querySelectorAll(`.content > div${filter}`).forEach(div => div.classList.add('active'));
    }

    // Set default filter
    updateContent('.new');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const filter = this.getAttribute('data-filter');
            updateContent(filter);
        });
    });
});
