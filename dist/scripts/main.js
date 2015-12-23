'use strict';
var FEelementControl = {
    calcRowHeight: function calcRowHeight() {
        var rightSLide = $('.right-slide');
        if ($(window).width() > 768) {
            var slideHeight = $('#myCarousel').height();
            rightSLide.height(slideHeight);
        } else {
            rightSLide.removeAttr('style');
        }
    }
};

$(window).load(function () {
    FEelementControl.calcRowHeight();
});

$(window).on('resize', function () {
    FEelementControl.calcRowHeight();
});
//# sourceMappingURL=main.js.map
