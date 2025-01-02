const form = document.getElementById("imovel-form");
const tipoImovel = document.getElementById("tipo-imovel");
const camposEspecificos = document.getElementById("campos-especificos");
const listaImoveis = document.getElementById("lista-imoveis");

// Função para obter imóveis do localStorage
function getImoveis() {
    const imoveis = localStorage.getItem("imoveis");
    return imoveis ? JSON.parse(imoveis) : [];
}

// Função para salvar imóveis no localStorage
function saveImoveis(imoveis) {
    localStorage.setItem("imoveis", JSON.stringify(imoveis));
}

// Atualizar lista de imóveis
function renderListaImoveis() {
    listaImoveis.innerHTML = "";
    const imoveis = getImoveis();

    imoveis.forEach((imovel, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            <div>
                <h5>${imovel.local}</h5>
                <p>${imovel.descricao}</p>
                <small><strong>Preço:</strong> R$${imovel.preco}</small>
            </div>
            <div>
                <button class="btn btn-warning btn-sm me-2" onclick="editarImovel(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="removerImovel(${index})">Remover</button>
            </div>
        `;

        listaImoveis.appendChild(li);
    });
}

// Função para atualizar campos específicos com base no tipo
function atualizarCamposEspecificos(tipo) {
    camposEspecificos.innerHTML = "";

    if (tipo === "casa") {
        camposEspecificos.innerHTML = `
            <div class="mb-3">
                <label for="comodos" class="form-label">Cômodos:</label>
                <input type="number" id="comodos" name="comodos" class="form-control">
            </div>
            <div class="mb-3">
                <label for="quartos" class="form-label">Quartos:</label>
                <input type="number" id="quartos" name="quartos" class="form-control">
            </div>
        `;
    } else if (tipo === "terreno") {
        camposEspecificos.innerHTML = `
            <div class="mb-3">
                <label for="planificado" class="form-label">Planificado:</label>
                <select id="planificado" name="planificado" class="form-select">
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>
            </div>
        `;
    }
}

tipoImovel.addEventListener("change", (e) => atualizarCamposEspecificos(e.target.value));

// Função para salvar imóvel
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const imovel = Object.fromEntries(formData);

    // Adiciona os novos imóveis ao localStorage
    const imoveis = getImoveis();
    imoveis.push(imovel);
    saveImoveis(imoveis);

    form.reset();
    atualizarCamposEspecificos("");
    renderListaImoveis();
});

// Função para remover imóvel
function removerImovel(index) {
    const imoveis = getImoveis();
    imoveis.splice(index, 1);
    saveImoveis(imoveis);
    renderListaImoveis();
}

// Função para editar imóvel
function editarImovel(index) {
    const imoveis = getImoveis();
    const imovel = imoveis[index];

    for (const key in imovel) {
        if (form[key]) {
            form[key].value = imovel[key];
        }
    }

    imoveis.splice(index, 1);
    saveImoveis(imoveis);
    renderListaImoveis();
}

renderListaImoveis();