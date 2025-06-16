const productos=[
    {
        id: '01',
        name: 'Abrigo “Lila Nube”',
        description: 'Diseño elegante en tonos neutros con acentos lila, ideal para las mascotas más delicadas. Brinda calidez y comodidad, perfecto para días frescos.',
        stock:15,
        price:8000,
        category:'nuevos',
        img:'../public/img-01.png',
    },
    {
        id: '02',
        name: 'Abrigo “Petro Pop”',
        description: 'Un diseño alegre en azul petróleo. Este abrigo es ideal para personalidades juguetonas, con un corte moderno y material liviano.',
        stock:11,
        price:12000,
        category:'ofertas',
        img:'../public/img-02.png',
    },
    {
        id: '03',
        name: 'Abrigo “Camel Kids”',
        description: 'Divertido y funcional, este abrigo en tono camel combina comodidad y estilo. El diseño con capucha lo hace ideal para climas frescos.',
        stock:10,
        price:15000,
        category:'mas vendidos',
        img:'../public/img-03.png'
    },
    {
        id: '04',
        name: 'Abrigo “Osito Chocolate”',
        description: 'Un modelo adorable con capucha y orejitas, en color marrón claro. Inspirado en los ositos de peluche, convierte a tu mascota en el centro de todas las miradas.',
        stock:8,
        price:10000,
        category:'nuevos',
        img:'../public/img-04.png',
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