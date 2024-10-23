import React, { useState, useEffect } from 'react';
import './Products.css'; 
import PopUp from './PopUp';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        // Fetch para pedir los productos
        fetch('/products.json')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error loading products:', error));
    }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    // para poder cerrar la ventana popup del producto
    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <div className="product-grid">
                {/*crea html para los productos guiandose por la id de cada uno, y utilizando la informacion de 
                las propiedades de los objetos presentados en el json*/}
            {products.map(product => (
                <div key={product.id} className="product-card"
                onClick={() => handleProductClick(product)}>
                    
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                </div>
            ))}
        </div>
        {selectedProduct && (
                <PopUp product={selectedProduct} onClose={handleClosePopup} />
            )}

        </div>
    );
};

export default Products;
