import React, { useEffect, useState } from "react";
import CartaoVenda from "./CartaoVenda.jsx"
import { get_request } from '../utils/Request.js';
import { Paginator } from 'primereact/paginator';
import './componentsStyles/main-style.css';
import { Navigate } from "react-router-dom";

const limitOfProducts = 9;

function justRun(data) {
    console.log(data) 
}

const showPagination = (data, first, rows, callback) => {
    try {
        return (
            <Paginator
                first={first}
                rows={rows}
                totalRecords={data.length}
                onPageChange={callback}
            />
        )
    } catch (error) {
        //console.error('Erro na demonstração da paginação\n');
    }
}

function Main() {
    const [dadosPeixes, setDados] = useState();
    const [loading, setLoad] = useState(false);
    const [page, setPage] = useState(1);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
        handleChangePage(event.page + 1)
    };

    const handleChangePage = (pageNumber) => {
        if (
            pageNumber > 0 &&
            pageNumber <= dadosPeixes.length / 10 &&
            pageNumber !== page
        )
            setPage(pageNumber);
    };

    const requestFish = async () => {
        await get_request('/peixes/all')
            .then((response) => {
                setDados(response.dados);
            })
            .catch((error) => {
            }).finally(() => {
                setLoad(true);
            })
    };

    useEffect(() => {
        requestFish();
    }, [])

    return (
        <>
            <div className="all-item pl-6"> {/*aqui tem flex flex-wrap... seccao dos itens disponiveis na base de dados*/}
                {loading &&
                    dadosPeixes ?
                    dadosPeixes
                        .slice(page * limitOfProducts - limitOfProducts,
                            page * limitOfProducts)
                        .map((peixe, idx) => {
                            console.log("peixe")
                            return (
                                <CartaoVenda
                                    key={idx}
                                    title={peixe.nomePeixe}
                                    subTitle={peixe.categoriaPeixe}
                                    preco={Number(peixe.precoPeixe)}
                                    style={"md:w-20rem m-3"}
                                    idPeixe={peixe.pkPeixe}
                                />
                            )
                        }) : loading && <Navigate to='notFound'/>
                }
            </div>
            
            {loading &&
                showPagination(dadosPeixes,
                    first,
                    rows,
                    onPageChange)
            }
        </>
    );
}

export default Main;