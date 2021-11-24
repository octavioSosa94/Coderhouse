import Item from '../Item/Item';
const ItemList = ({products, items}) =>{
    console.log("products: ", products) 
    return (
        <div>
            {products.map(product => {
                return(
                <Item 
                name = {product.name}
                description={product.description}
                key = {product.id}
                stock = {product.stock}
                img = {product.img}
                />
                );
            })}
        </div>

    );
}

export default ItemList;