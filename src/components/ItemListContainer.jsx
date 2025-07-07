import { useEffect, useState } from "react";
import { getProducts, productos } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { dataBase } from "../service/firebase";

const ItemListContainer = (props) => {
    const[data, setData]=useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState(false);
    
    //Firebase
    useEffect(()=>{
        setLoading(true)
        const productosColeccion = categoryId
        ? query(collection(dataBase, "productos"), where("category", "==", categoryId))
        : collection(dataBase, "productos")
        getDocs(productosColeccion)
        .then((respuesta)=>{
            const list = respuesta.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            })
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    //Promesa Mock Local
    //useEffect(()=>{
    //    setLoading(true);
    //    getProducts()
    //    .then((respuesta)=> {
    //        if(categoryId){
    //            setData(respuesta.filter((producto)=> producto.category === categoryId))
    //        }else{
    //            setData(respuesta)
    //        }
    //    })
    //    .catch((error)=> console.log(error))
    //    .finally(() => setLoading(false));
    // },[categoryId])
    
//SUBIR PROD UNA SOLA VEZ  
//     const subirData = () => {
//             console.log('click!')

//        const coleccionAgregar = collection(dataBase, "productos")
//        productos.map((productos) => addDoc(coleccionAgregar, productos))
//     }

return(
    <>
    {/*<button onClick={subirData}>Subir prods</button>*/}
    {
        loading 
        ? <LoaderComponent />
        :<div>
            <h1 className="titulo">{props.titulo}</h1>
            <ItemList data={data} />
        </div>
        }
    </>
    );
}
export default ItemListContainer