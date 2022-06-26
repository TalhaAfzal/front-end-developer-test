
import React, { useEffect, useState } from "react";
import axios from "axios";


import { Card, Row, Col } from 'react-bootstrap'


const ProductCard = props => {
    let { imgSrc, name } = props.data;

    

    return (

        <div className="p-0 overflow-hidden h-100 shadow">
            <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img src={imgSrc} height={90} className='categoryImg' />
                <Card.Title className='txtname'>
                    {name}
                    {/* <h2>{categoryname}</h2> */}
                </Card.Title>
            </div>
        </div>
 





    )
}


export default ProductCard