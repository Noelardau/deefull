import ajax from "./reqAjax.js";

// pour recevoir le commentaire en temps reels
setInterval(function(){
    ajax.getComments($('#comments'))

},100)

// ajout de commentaire par click
ajax.addComments($('button'))



// ajout de commentaire en tapant sur entrez
ajax.addCommentsKey($('textarea'),'Enter')


