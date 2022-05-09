//galery
//tangkap

        const gambarBesar = document.querySelector('.gambar-besar-item');
        const thumnail =  document.querySelector('.thumbnail');
        const thumbs = document.querySelectorAll('.thumb');

//end tangkap

thumnail.addEventListener('click' , function (e) {
    //cara saya
    /* let attbr = e.target.getAttribute('src');
    gambarBesar.setAttribute('src' , attbr); */
    //end cara saya

    //cara pak dika
        if (e.target.className == 'thumb') {
            gambarBesar.src = e.target.src;
            gambarBesar.classList.add('fade');
        }
        setTimeout(() => {
            gambarBesar.classList.remove('fade');
        }, 500);
            
        thumbs.forEach(function(thumb){
           thumb.className = 'thumb' ;
        });

        e.target.classList.add('active')

    //end cara pak dika
})