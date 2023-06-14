const products = [
    { nombre: "Mouse", precio: 50, id: "1", stock: 10, img: "https://m.media-amazon.com/images/I/61lCLrCtuhL._AC_UF894,1000_QL80_.jpg", idCat: "Periferals" },
    { nombre: "Teclado", precio: 100, id: "2", stock: 10, img: "https://m.media-amazon.com/images/I/71jAUlz7KPL.jpg", idCat: "Periferals" },
    { nombre: "Monitor", precio: 500, id: "3", stock: 10, img: "https://snpi.dell.com/snp/images/products/large/es-mx~210-BCYE/210-BCYE_V5.jpg", idCat: "Monitors" },
    { nombre: "Bocinas", precio: 1000, id: "4", stock: 10, img: "https://www.cyberpuerta.mx/img/product/M/CP-KRK-ROKIT5G4-fca08d.jpg", idCat: "Audio" }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === id)
            resolve(product)
        }, 2000)
    })
}

export const getProductsByCategory = (idCategory) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productsCategory = products.filter(prod => prod.idCat === idCategory)
            resolve(productsCategory);
        }, 100)
    })
}