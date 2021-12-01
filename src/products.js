const products = [
    { id: 1, name: 'Pelota Futbol', price: '$ 2.500,00', img:'https://www.goalinn.com/f/131/1311591/adidas-balon-futbol-tango-rosario.jpg', stock: 10},
    { id: 2, name: 'Pelota Rugby', price: '$ 3.000,00', img:'https://d2r9epyceweg5n.cloudfront.net/stores/254/987/products/pelotapumas_11-62e6343916278d482c16051444721353-640-0.jpg', stock: 20},
    { id: 3, name: 'Pelota Basquet', price: '$ 2.000,00', img:'https://pelotadebasquet.com/wp-content/uploads/2019/06/Spalding-Streetball.jpg', stock: 30}
]

export const getProducts = () => {    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)        
    })
}