window.onload = function() {
    if (!sessionStorage.getItem('newsModalShown')) {
        var modal = document.getElementById('newsModal');
        var closeBtn = document.getElementsByClassName('close')[0];

        modal.classList.add('show');  // Añadir clase para mostrar el modal

        closeBtn.onclick = function() {
            modal.classList.remove('show');
            sessionStorage.setItem('newsModalShown', 'true');
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.classList.remove('show');
                sessionStorage.setItem('newsModalShown', 'true');
            }
        };
    }
};
