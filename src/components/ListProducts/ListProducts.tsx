import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import useFetch from '../../hooks/useFetch';
import { ProductItem } from '../../types/typeApp';
import Product from './Product/Product';
import { Container } from 'react-bootstrap';

import './style.css'
import CustomSpinner from '../spinners/customSpinner';

const ListProducts = () => {

    const { dispatch } = useContext(CartContext);

    const { products, isLoading } = useFetch();
    

    const handleAddToCart = (product: ProductItem) => {
        dispatch({
            payload: product,
            type: 'ADD'
        });
    }

    if(isLoading) return <CustomSpinner />

    return (
        <>
        <Container className="mt-3 product-list">
        {
                products.map(product => (
                    <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}/>
                ))
            }
        </Container>
         
        </>
    )
}

export default ListProducts;
