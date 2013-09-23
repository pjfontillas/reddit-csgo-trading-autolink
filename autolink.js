(function () {
    console.log('Turning flair into links...');
    $(".tagline > .flair").each(function () {
        var element = $(this);
        var url = element.html();
        var link = [
            '<a href="', url, '">', url, '</a>'
        ].join('');
        element.html(link);
    });
})();
