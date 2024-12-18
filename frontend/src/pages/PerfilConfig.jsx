import React, { useEffect } from "react";
import MenuHeader from "../components/MenuHeader";
import Footer from "../components/Footer";
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";

function PerfilConfig() {
    return (
        <>
            <MenuHeader></MenuHeader>
            <div className="flex justify-content-center mb-8 py-8">
                <div className="flex flex-column border-right-1 p-2 mr-5">
                    <h1 className="mt-0">Configurações</h1>
                    <div className="flex flex-column">
                        <Button
                            label="Perfil"
                            className="w-5 border-round-3xl p-1 m-1" />
                    </div>
                </div>

                <div className="flex flex-column">
                    <h2 className="ml-3">Perfil</h2>
                    <div>
                        <div className="flex gap-2">
                            <div className="flex flex-column">
                                <label htmlFor="username">Primeiro nome</label>
                                <InputText id="username" aria-describedby="username-help" />
                            </div>

                            <div className="flex flex-column">
                                <label htmlFor="username">Ultimo nome</label>
                                <InputText
                                    id="username"
                                    aria-describedby="username-help" />
                            </div>
                        </div>
                        <div className="flex flex-column mt-3">
                            <label htmlFor="username">Localização</label>
                            <InputText
                                id="username"
                                aria-describedby="username-help" />
                        </div>
                    </div>

                    <div>
                        <h2>Contactos</h2>
                        <Button
                            label="Adicionar novo contacto"
                            className="border-0 p-2 m-0 h-3rem"
                            icon="pi pi-plus" />
                    </div>

                    <div>
                        <h2>Redes sociais</h2>
                        <Button
                            label="Adicionar rede social"
                            className="border-0 p-2 m-0 h-3rem"
                            icon="pi pi-plus" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0">
                <Footer></Footer>
            </div>
        </>
    )
}
export default PerfilConfig;