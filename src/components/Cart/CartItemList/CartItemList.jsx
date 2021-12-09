import Item from '../CartItem';
const CartItemList = ({products, items}) =>{
    console.log("products: ", products) 
    return (
        <div>
            {products.map(product => {
                return(
                <Item 
                name = {product.name}
                description={product.description}
                id={product.id}
                stock = {product.stock}
                img = {product.img}
                />
                );
            })}
        </div>

    );
}

export default CartItemList;