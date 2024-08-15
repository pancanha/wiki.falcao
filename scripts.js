function loadContent(contentId) {
    // Objeto que contém o conteúdo a ser carregado
    const contents = {
        content1: 'Conteúdo da Página 1',
        content2: 'Conteúdo da Página 2',
        content3: 'Conteúdo da Página 3',
        content4: 'Conteúdo da Página 4',
        content5: 'Conteúdo da Página 5',
        content6: 'Conteúdo da Página 6',
        content7: 'Conteúdo da Página 7',
        content8: 'Conteúdo da Página 8',
        content9: 'Conteúdo da Página 9',
        content10: 'Conteúdo da Página 10'
    };
    
    // Obtém a área onde o conteúdo será carregado
    const contentArea = document.getElementById('content-area');
    
    // Atualiza o conteúdo da área
    contentArea.innerHTML = `<p>${contents[contentId]}</p>`;
}
