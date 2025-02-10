$( document ).ready(function() {

    var url = window.location.href;
    var anchor = url.substring(url.indexOf("#") + 1);
    console.log(anchor);
    if(anchor.length < 15){
        console.log('ok');
        $('.main-link').removeClass("active");
        $('.target').hide();
        $('a[target="' + anchor + '"]').addClass('active');
        $('#' + anchor).show();
    } else {
        $('a[target="programme"]').addClass('active');
        $('#programme').show(); 
    }

    $('a').click(function(){
        var target = $(this).attr('target');

        let newUrl = window.location.href.split('#')[0] + '#' + target; // Ajoute l'ancre à l'URL
        history.pushState(null, '', newUrl); // Met à jour l'URL sans recharger la page


        $('.target').hide();
        $('.main-link').removeClass("active");
        $(this).addClass("active");
        $('#' + target).show();
    })
});