import React from "react";
import { InputText } from 'primereact/inputtext';
import './componentsStyles/cartStyle.css';
function closeCartDiv() {
    const cartDiv = document.getElementById("cartDivId");
    cartDiv.style.display = "none";
}

function ItemAdded() {
    return (
        <div className="bg-red-800 p-5">
            ITEM-ADDED
        </div>
    );
}

const CartDiv = () => {
    return (
        <div style={{ zIndex: "7" }}
            className="flex-column gap-2 bg-white absolute right-0 cart-div px-4 fixed"
            id="cartDivId">
            <div className="flex justify-content-between">
                <h2 className="inline-block">Confirmar Compra</h2>
                <i className="pi pi-times my-auto"
                    style={{
                        fontSize: '1.5rem',
                        cursor: "pointer"
                    }}
                    onClick={closeCartDiv}>
                </i>
            </div>

            <div className="">
                <div className="flex gap-8 justify-content-between">
                    <p style={{ height: '0px' }}>Subtotal</p>
                    <p style={{ height: '0px' }}>00,00 KZ</p>
                </div>

                <div className="flex justify-content-between">
                    <p className="my-2"
                        style={{ height: '0px' }}>Desconto</p>
                    <p className="my-2"
                        style={{ height: '0px' }}>00,00 KZ</p>
                </div>

                <div className="flex justify-content-between">
                    <p style={{ height: '0px' }}>
                        <b>
                            Total (nº itens)
                        </b> </p>
                    <p style={{ height: '0px' }}>00,00 KZ</p>
                </div>
            </div>

            <div className="w-25rem">
                <h3>Utilizar código</h3>
                <InputText
                    keyfilter="int"
                    placeholder="Introduzir código de desconto"
                    className="w-full border-black-alpha-30" />
            </div>

            <div className="inline-block">
                <h4>Forma de Pagamento</h4>
                <div className="p-5 bg-red-800 border-round-lg">pensando...</div>
            </div>

            <div>
                <h4>Resumo</h4>
                {/*<ItemAdded/>*/}
/*</div>
</div>
);
}

export default CartDiv;