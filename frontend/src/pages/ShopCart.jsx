import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Divider } from 'primereact/divider';
import MenuHeader from '../components/MenuHeader';
import { useSelector } from 'react-redux';

const ShopCart = () => {
    const shopCart = useSelector((state) => state.shopCart.value);

    const shippingOptions = [
        { label: 'Standard-Delivery- €5.00', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Three', value: 3 },
        { label: 'Four', value: 4 }
    ];

    return (
        <div style={{ height: '100%' }}>
            <MenuHeader />
            <div
                className="flex justify-content-center align-items-center"
                style={{ height: '100%' }}
            >
                <div className="col-12">
                    <Card style={{ borderRadius: '15px' }}>
                        <div className="grid p-0">

                            <div className="col-8">
                                <div className="p-5">
                                    <div
                                        className="flex justify-content-between align-items-center mb-5">
                                        <h1
                                            className="font-bold text-black mb-0">
                                            Shopping Cart
                                        </h1>
                                        <p
                                            className="mb-0 text-muted">
                                            {shopCart.cartTotal} items
                                        </p>
                                    </div>

                                    <Divider />
                                    {shopCart.cartItem.map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            <div
                                                className="grid mb-4 justify-content-between align-items-center"
                                            >
                                                <div className="col-2">
                                                    <img
                                                        src={`https://mdbcdn.b-cdn.net/img/Photos/
                                                            new-templates/bootstrap-shopping-carts/img${5 + idx}.webp`}
                                                        className="shadow-3"
                                                        alt={item['categoria']}
                                                        style={{ borderRadius: '8px', width: '100%' }}
                                                    />
                                                </div>
                                                <div className="col-3">
                                                    <h4 className="text-muted">{item['nome']}</h4>
                                                    <h4 className="text-black mb-0">{item['categoria']}</h4>
                                                </div>

                                                <div className="col-2 flex align-items-center">
                                                    {/*<Button icon="pi pi-minus" className="p-button-text" />*/}
                                                    <InputNumber
                                                        value={item['quantidade']}
                                                        showButtons min={0}
                                                        style={{ width: '10px' }} />
                                                    {/*<Button icon="pi pi-plus" className="p-button-text" />*/}
                                                </div>

                                                <div className="col-2 text-right">
                                                    <h4>AOA {item['preco']}</h4>
                                                </div>
                                                <div className="col-1 text-right">
                                                    <Button
                                                        icon="pi pi-times"
                                                        className="p-button-text p-button-danger" 
                                                        />
                                                </div>
                                            </div>

                                            <Divider />
                                        </React.Fragment>
                                    ))}

                                    <div className="pt-5">
                                        <Button
                                            label="Back to shop"
                                            icon="pi pi-arrow-left"
                                            className="p-button-text" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 bg-gray-300">
                                <div className="p-5 ">
                                    <h3 className="font-bold mb-5 mt-2 pt-1">Summary</h3>

                                    <Divider />

                                    <div className="flex justify-content-between mb-4">
                                        <h5
                                            className="text-uppercase">
                                            items {shopCart.cartItem.length}
                                        </h5>
                                        <h5>AOA {shopCart.cartPriceTotal}</h5>
                                    </div>

                                    <h5 className="text-uppercase mb-3">Shipping</h5>
                                    <div className="mb-4 pb-2">
                                        <Dropdown
                                            options={shippingOptions}
                                            placeholder="Select shipping"
                                            className="w-full" />
                                    </div>

                                    <h5 className="text-uppercase mb-3">Give code</h5>
                                    <div className="mb-5">
                                        <InputText
                                            placeholder="Enter your code"
                                            className="w-full" />
                                    </div>

                                    <Divider />

                                    <div className="flex justify-content-between mb-5">
                                        <h5
                                            className="text-uppercase">
                                            Total price
                                        </h5>
                                        <h5>AOA {shopCart.cartPriceTotal}</h5>
                                    </div>

                                    <Button
                                        label="Check-out"
                                        className="p-button-dark w-full"
                                    />
                                </div>
                            </div>

                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;