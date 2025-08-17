function ProductCard ({ image, name, price, description }) {
    function handleClick() {
        console.log(`You have bought ${name} for the price of ${price}. Thank you for shopping with us!`)
    }

    return (
        <div className="prd-card">
            <img className="prd-img" src={image} alt="ProductImg" />
            <h2 className="prd-name">{name}</h2>
            <p className="prd-desc">{description}</p>
            <p className="prd-price">{price}</p>
            <button className="prd-button" onClick={handleClick}>Buy Now</button>
        </div>
    );
}

export default ProductCard;