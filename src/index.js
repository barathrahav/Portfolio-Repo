// Add the "active" class to the corresponding nav link based on the current section
$(document).ready(function () {
    // Get the current active section based on the scroll position
    function getActiveSection() {
        var sections = $('section');
        var scrollPosition = $(document).scrollTop();

        for (var i = 0; i < sections.length; i++) {
            var currentSection = sections[i];
            var sectionTop = $(currentSection).offset().top;
            var sectionHeight = $(currentSection).height();

            if (scrollPosition >= sectionTop - 1 && scrollPosition < sectionTop + sectionHeight - 1) {
                return currentSection;
            }
        }

        // If no active section found, return the first section
        return sections[0];
    }

    // Update the active section on scroll
    $(document).scroll(function () {
        var activeSection = getActiveSection();
        var activeSectionId = $(activeSection).attr('id');

        // Remove the "active" class from all nav links
        $('.navbar-nav .nav-link').removeClass('active');

        // Add the "active" class to the corresponding nav link
        $('a[href="#' + activeSectionId + '"]').addClass('active');
    });
});