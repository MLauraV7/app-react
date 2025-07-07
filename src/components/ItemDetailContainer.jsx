import React, { useEffect, useState } from 'react';
import { getProducts } from '../mock/AsyncMock';
import ItemDetail from './ItemDetail';
import { Link, useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { collection, doc, getDoc } from "firebase/firestore";
import { dataBase } from '../service/firebase';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const { id } = useParams();

  //FIREBASE
  useEffect(()=>{
    setLoading(true)
    const productosColeccion = collection(dataBase, "productos")
    const docRef = doc(productosColeccion, id)
    getDoc(docRef)
    .then((respuesta)=>{
      if(respuesta.data()){
        setDetail({id:respuesta.id, ...respuesta.data()})
      }else{
        setInvalid(true)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [])

  //MOCK LOCAL
  //useEffect(() => {
  //  setLoading(true);
  //  getProducts()
  //    .then((res) => setDetail(res.find((item) => item.id === (id))))
  //    .catch((error) => console.log(error))
  //    .finally(() => setLoading(false));
  //}, [id]);
  
  if(invalid){
    return <div>
      <h1>El producto no existe</h1>
      <Link to= "/" className='btn'>Ir a Home</Link>
    </div>
  }

  return (
    <>
      {loading ? <LoaderComponent /> : <ItemDetail detail={detail} />}
    </>
  );
};

export default ItemDetailContainer;