document.querySelectorAll('.btnprincipal').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.passo').forEach(passo => passo.classList.remove('ativo'));
        const proximoPasso = document.getElementById('passo-' + this.getAttribute('data-proximo'));
        if (proximoPasso) {
            proximoPasso.classList.add('ativo');
        }
    });
});