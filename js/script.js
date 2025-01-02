// Lista de imóveis
const properties = [
    {
        image: "img/imovel1.jpg",
        title: "Casa Moderna",
        description: "Uma linda casa moderna com 3 quartos, 2 banheiros e uma piscina.",
        price: "R$ 750.000"
    },
    {
        image: "img/imovel2.jpg",
        title: "Apartamento no Centro",
        description: "Apartamento espaçoso com 2 quartos e vista para a cidade.",
        price: "R$ 500.000"
    },
    {
        image: "img/imovel3.jpg",
        title: "Chácara",
        description: "Chácara ampla com área verde e espaço para eventos.",
        price: "R$ 1.200.000"
    }
];

// Carregar imóveis no DOM
document.addEventListener("DOMContentLoaded", () => {
    const propertyList = document.getElementById("property-list");

    properties.forEach(property => {
        const propertyCard = `
            <div class="col-md-4">
                <div class="property">
                    <img src="${property.image}" alt="${property.title}">
                    <div class="property-info mt-3">
                        <h5>${property.title}</h5>
                        <p>${property.description}</p>
                        <p><strong>${property.price}</strong></p>
                    </div>
                </div>
            </div>
        `;
        propertyList.innerHTML += propertyCard;
    });
});
