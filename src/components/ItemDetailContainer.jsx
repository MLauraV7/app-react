import React, { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncMock';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()

  useEffect(()=>{
    getProducts()
    .then((res)=> setDetail(res.find((item)=> item.id === id)))
    .catch((error)=> console.log(error))
  },[])
  return (
    <>
    <ItemDetail detail= {detail}/>
    </>
  )
}

export default ItemDetailContainer