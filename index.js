particlesJS.load('particles-js', 'assets/particles.json', function() {

});
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function() {
            var self = $(this);
            self.find(".typed").typed({
                typeSpeed: 1,
                stringsElement: self.find('.typed-strings')
            });
        },
        onLeave: function(){
            var self = $(this);
            setTimeout(function() {
                self.find(".typed").typed({
                    strings: ['']
                })
            }, 500);
        }
    });
    var elements = $(".typed");
    setInterval(function() {
        elements.toggle().toggle();
    }, 20)
});