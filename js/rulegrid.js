(function(){

    $('#box').on('click', function(){
        console.log('Number of columns: ' + Math.round( this.childElementCount /2 )  );
    });

    $('.column').on('click', function(){
        $(this).css('background-color','red');
    });

    $('.column').dblclick(function() {
        $(this).next().remove();
        $(this).remove();

    });

})();
