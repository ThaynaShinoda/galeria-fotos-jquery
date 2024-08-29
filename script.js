$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit',function(e){
        e.preventDefault()
        const urlNovaImagem = $('#input-url').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${urlNovaImagem}"/>`).appendTo(novoItem) //pega o urlNovaImagem e adiciona no novoItem
        $(`
            <div class="overlay-imagem-link">
                <a href="${urlNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)
        $(novoItem).insertBefore('ul li:first-child') 
        $(novoItem).fadeIn(1000)
        $('#input-url').val('')
    })
})