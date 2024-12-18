const CartaoCategoria = ({ img, label, alt }) => {
    return (
        <div className='cardi'>
            <div className='m-2'>
                <img src={img} alt={alt} width={"500px"} />
            </div>
            <p className='mb-0'>
                <b>
                    {label}
                </b>
            </p>
        </div>
    );
}

export default CartaoCategoria;