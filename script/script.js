$(document).ready(function() {
    let currentIndex = 0;
    const items = $('.carousel-item');
    const itemCount = items.length;
    const indicators = $('.indicator');

    function showItem(index) {
        const transformValue = `translateX(-${index * 100}%)`;
        $('.carousel-inner').css('transform', transformValue);
        items.removeClass('active');
        items.eq(index).addClass('active');
        updateIndicators(index);
    }

    function updateIndicators(index) {
        indicators.removeClass('active');
        indicators.eq(index).addClass('active');
    }

    $('.next').click(function(event) {
        event.preventDefault();
        currentIndex = (currentIndex + 1) % itemCount;
        showItem(currentIndex);
    });

    $('.prev').click(function(event) {
        event.preventDefault();
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        showItem(currentIndex);
    });

    indicators.click(function() {
        const index = $(this).data('index');
        currentIndex = index;
        showItem(currentIndex);
    });

    showItem(currentIndex);
});
