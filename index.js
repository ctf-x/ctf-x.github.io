particlesJS.load('particles-js', 'assets/particles.json', function() {

});
$(document).ready(function() {
    var visited = [];
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'right',
        afterLoad: function(x, idx) {
            console.log(visited);
            if($.inArray(idx, visited) !== -1)
                return;
            visited.push(idx);
            var self = $(this);
            self.find(".typed").typed({
                typeSpeed: -1,
                stringsElement: self.find('.typed-strings')
            });
        }
    });
    var elements = $(".typed");
    setInterval(function() {
        elements.toggle().toggle();
    }, 20)
});