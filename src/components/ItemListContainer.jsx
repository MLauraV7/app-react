import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {
    const[data, setData]=useState([])
    const {categoryId} = useParams()
    useEffect(()=>{
        getProducts()
        .then((respuesta)=> {
            if(categoryId){
                setData(respuesta.filter((producto)=> producto.category === categoryId))
            }else{
                setData(respuesta)
            }
        })
        .catch((error)=> console.log(error))
    },[categoryId])
    return(
        <div>
            <h1 className="titulo">{props.titulo}</h1>
            <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer