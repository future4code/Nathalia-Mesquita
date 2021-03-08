const preenchePost = () => {
    let valorInputTitulo = document.getElementById('titulo-post')
    let localImpressaoTitulo = document.getElementById('container-de-titulo')
        localImpressaoTitulo.innerHTML += `<p>${valorInputTitulo.value}<p>`
        valorInputTitulo.value = ''
    let valorInputAutor = document.getElementById('autor-post')
    let localImpressaoAutor = document.getElementById('container-de-autor')
        localImpressaoAutor.innerHTML += `<p>${valorInputAutor.value}<p>`
        valorInputAutor.value = ''
    let valorInputConteudo = document.getElementById('conteudo-post')
    let localImpressaoConteudo = document.getElementById('container-de-conteudo')
        localImpressaoConteudo.innerHTML += `<p>${valorInputConteudo.value}<p>`
        valorInputConteudo.value = ''
    //const arrayPost = [valorInputTitulo, valorInputAutor, valorInputConteudo]
    // const arrayPost = []
    // console.log(arrayPost)
}



