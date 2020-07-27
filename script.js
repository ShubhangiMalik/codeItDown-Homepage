$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});


const reviewContainer = document.getElementById("reviewContainer")
const reviewScrollWidth = reviewContainer.scrollWidth

window.addEventListener("load", () => {
  self.setInterval(() => {
    if (reviewContainer.scrollLeft !== reviewScrollWidth) {
      reviewContainer.scrollTo(reviewContainer.scrollLeft + 1, 0);
    }
  }, 80);
})