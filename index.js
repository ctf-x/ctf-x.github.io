particlesJS.load('particles-js', 'assets/particles.json', function() {

});
$(document).ready(function() {
    var visited = [];
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function(x, idx) {
            if($.inArray(idx, visited) !== -1)
                return;
            visited.push(idx);

            var self = $(this);
            self.find(".typed").typed({
                typeSpeed: -1,
                stringsElement: self.find('.typed-strings')
            });
        },

        onLeave: function(index, nextIndex, direction) {
            if($.inArray(nextIndex, visited) !== -1)
                return;
            var height = $(document).height();
            var bounce = new Bounce();
            bounce
                .translate({
                    from: { x: 0, y: 0 },
                    to: { x: 0, y: -height / 2.5 },
                    duration: 1000,
                    delay: 1000
                })
                .scale({
                    from: { x: 1, y: 1 },
                    to: { x: 0.7, y: 0.7 },
                    duration: 1000,
                    delay: 1000
                })
                .applyTo($('.rise'));
        }
    });

    // Ghetto fix to solve animation glitch
    var elements = $(".typed");
    setInterval(function() {
        elements.toggle().toggle();
    }, 20)
});