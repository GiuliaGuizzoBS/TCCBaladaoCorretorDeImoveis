document.addEventListener("DOMContentLoaded", () => {
    const propertyList = document.getElementById("property-list");

    // Função para obter os imóveis do localStorage
    function getImoveis() {
        const imoveis = localStorage.getItem("imoveis");
        return imoveis ? JSON.parse(imoveis) : [];
    }

    // Função para renderizar os imóveis na página inicial
    function renderImoveis() {
        const imoveis = getImoveis();
        propertyList.innerHTML = ""; // Limpa a lista de imóveis

        if (imoveis.length === 0) {
            propertyList.innerHTML = "<p>Nenhum imóvel encontrado.</p>";
        } else {
            imoveis.forEach((imovel) => {
                const col = document.createElement("div");
                col.className = "col-md-4 mb-4";
        
                col.innerHTML = `
                    <div class="card h-100">
                        <img src="${imovel.imagem || 'https://via.placeholder.com/150'}" class="card-img-top" alt="Imagem do imóvel">
                        <div class="card-body">
                          <h5 class="card-title"><strong>${imovel.titulo}</strong></h5>
                            <p class="card-text">${imovel.local}</p>
                            <p class="card-text">${imovel.descricao}</p>
                            <p class="card-text-valor"><strong> R$ ${imovel.preco}</strong></p>
                            <p class="card-text-comodos"> 
                            ${imovel.quartos ? `Quartos: ${imovel.quartos}` : ''}
                            ${imovel.banheiros ? ` | Banheiros: ${imovel.banheiros}` : ''}
                            ${imovel.andares ? ` | Andares: ${imovel.andares}` : ''}</p>
                            <p class="card-text">${imovel.tamanho}m²</p>
                        </div>
                    </div>
                `;
        
                propertyList.appendChild(col);
            });
        }
    }

    // Chamada inicial para renderizar os imóveis ao carregar a página
    renderImoveis();
});
// 
