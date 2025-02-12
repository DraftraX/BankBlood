window.onload = function() {
    if (!sessionStorage.getItem('newsModalShown')) {
        var modal = document.getElementById('newsModal');
        var closeBtn = document.getElementById('closeBtn');

        modal.classList.add('show');

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
    