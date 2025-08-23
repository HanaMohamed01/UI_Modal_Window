'use strict';

const button = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const visible = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

for(let i = 0 ; i < button.length ; i++ )
button[i].addEventListener('click' , visible );

const hide = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

    close.addEventListener("click", hide );
    overlay.addEventListener('click' , hide );


    document.addEventListener('keydown', function(e){
        if (e.key == 'Escape')
        {
            if (!modal.classList.contains('hidden')){
                hide();
            }
        }
    })