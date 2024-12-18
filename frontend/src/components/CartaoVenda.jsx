import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useDispatch, useSelector } from 'react-redux';
import { addPeixe } from "../utils/cartSlice.js";
import { post_request } from '../utils/Request.js';
import { getItem } from '../utils/localStorage.js';

function dbPeixe(){
    const data = getItem('cart').cartItem;
    post_request("/carrinho/add", data);
}

const CartaoVenda = ({ title, subTitle, imagem, style, preco, idPeixe }) => {
    const header = (
        <img alt="Card" src={imagem} />
    );
    const cart = useSelector((state) => state.shopCart.value);
    const dispatch = useDispatch();

    const footer = (
        <div className="flex bg-gray-600 justify-content-end">
            <Button
                label="Adicionar no carrinho"
                onClick={
                    () => {
                        dispatch(addPeixe({
                            'id': idPeixe,
                            'nome': title,
                            'preco': preco,
                            'categoria': subTitle,
                            'quantidade': 1
                        }))
                        //dbPeixe();
                        //console.log(cart)
                    }} />
        </div>
    );

    return (
        <Card title={title}
            subTitle={subTitle}
            footer={footer}
            header={header}
            className={style}>
            <p className="m-0 p-0">
                <b>
                    {preco}
                </b>
            </p>
        </Card>
    )
}

export default CartaoVenda;