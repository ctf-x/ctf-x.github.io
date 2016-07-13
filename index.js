particlesJS.load('particles-js', 'assets/particles.json', function() {

});
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function() {
            var self = $(this);
            self.find(".typed").typed({
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
});