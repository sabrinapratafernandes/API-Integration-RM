const Button = ({label, onClick}) => {
    return (
        <button className="text-sm md:text-lg bg-blue text-white p-2 rounded-full hover:bg-purple m-2 shadow-xl" onClick={onClick}>
            {label}
        </button>
    )
}

export default Button