var english = document.getElementById('en_click'),
    dutch = document.getElementById('nl_click'),
    en_txt = document.querySelectorAll('#fr'),
    nl_txt = document.querySelectorAll('#en'),
    nb_en = en_txt.length,
    nb_nl = nl_txt.length;

english.addEventListener('click', function() {
    langue(english,dutch);
}, false);

dutch.addEventListener('click', function() {
    langue(dutch,english);
}, false);

function langue(langueOn,langueOff){
    if (!langueOn.classList.contains('current_lang')) {
        langueOn.classList.toggle('current_lang');
        langueOff.classList.toggle('current_lang');
    }
    if(langueOn.innerHTML == 'En'){
        afficher(en_txt, nb_en);
        cacher(nl_txt, nb_nl);
    }
    else if(langueOn.innerHTML == 'Nl'){
        afficher(nl_txt, nb_nl);
        cacher(en_txt, nb_en);
    }
}

function afficher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'block';
    }
}
function cacher(txt,nb){
    for(var i=0; i < nb; i++){
        txt[i].style.display = 'none';
    }
}
function init(){
    langue(english,dutch);
}
init();