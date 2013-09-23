(function () {
    console.log('Turning flair into links...');
    $(document).on('mouseover', '.tagline > .flair', function () {
        var element = $(this);
        if (!element.hasClass('autolinked')) {
            element.addClass('autolinked');
            var url = element.html();
            var link = [
                '<a href="', url, '">', url, '</a>'
            ].join('');
            element.html(link);
        }
    });
})();
