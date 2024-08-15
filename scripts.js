async function loadContent(fileName) {
    try {
        // Obtém a área onde o conteúdo será carregado
        const contentArea = document.getElementById('content-area');

        // Fetch o conteúdo do arquivo HTML
        const response = await fetch(fileName);
        if (!response.ok) {
            throw new Error(`Falha ao carregar o conteúdo de ${fileName}`);
        }

        // Obtém o conteúdo como texto
        const content = await response.text();

        // Atualiza o conteúdo da área
        contentArea.innerHTML = content;
    } catch (error) {
        console.error('Erro ao carregar o conteúdo:', error);
        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = `<p>Erro ao carregar o conteúdo. Tente novamente mais tarde.</p>`;
    }
}
