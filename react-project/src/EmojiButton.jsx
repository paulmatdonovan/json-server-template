import React from "react";

function EmojiButton({ emoji, label }) {
    return (
        <button>
            <span role="img">{emoji}</span>
            {label}
        </button>
    );
}
export default EmojiButton;
