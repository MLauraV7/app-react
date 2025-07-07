export const productos=[
    {
        name: 'Abrigo “Petro Pop”',
        description: 'Un diseño alegre en azul petróleo. Este abrigo es ideal para personalidades juguetonas, con un corte moderno y material liviano.',
        stock:11,
        price:12000,
        category:'ofertas',
        img:'/img-02.png',
    },
    {
        name: 'Abrigo “Camel Kids”',
        description: 'Divertido y funcional, este abrigo en tono camel combina comodidad y estilo. El diseño con capucha lo hace ideal para climas frescos.',
        stock:10,
        price:15000,
        category:'mas vendidos',
        img:'/img-03.png'
    },
    {
        name: 'Abrigo “Osito Chocolate”',
        description: 'Un modelo adorable con capucha y orejitas, en color marrón claro. Inspirado en los ositos de peluche, convierte a tu mascota en el centro de todas las miradas.',
        stock:8,
        price:10000,
        category:'nuevos',
        img:'/img-04.png',
    }
]
let error = false
export const getProducts = () =>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                 reject('Hubo un error, intente más tarde');
            } else {
                resolve(productos);
            }
        }, 1000)
    })
}