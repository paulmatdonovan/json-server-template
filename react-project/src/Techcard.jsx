import { useState } from "react";
import Emojibutton from "./EmojiButton";

function Techcard({
    name,
    attributes,
    price,
    image = "https://hnau.imgix.net/media/catalog/product/a/u/au_407_3.jpg?auto=compress&auto=format&fill-color=FFFFFF&fit=fill&fill=solid&w=992&h=558",
}) {
    const [inCart, setInCart] = useState(false);

    function handleClick() {
        setInCart(!inCart);
    }

    const techLis = attributes.map((attribute) => {
        return <li key={attribute}> {attribute}</li>;
    });

    return (
        <div className="card">
            <h2>{name}</h2>
            <img src={image} />
            <h3>Features</h3>
            <ul>{techLis}</ul>
            <h4>Price {price}</h4>
            <div onClick={handleClick}>
                {inCart ? (
                    <Emojibutton emoji="🛒" label="Remove from cart" />
                ) : (
                    <Emojibutton emoji="🛒" label="Add to cart" />
                )}
            </div>
        </div>
    );
}

export default Techcard;
