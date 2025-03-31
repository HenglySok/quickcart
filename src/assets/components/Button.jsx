import React from 'react'

function Button({ title, addStyle }) {
    return (
        <button
            className={`bg-[var(--color-primary-900)] py-[5px] px-[10px] rounded-[5px]
        text-white ${addStyle}`}>
            {title}
        </button>
    )
}

export default Button