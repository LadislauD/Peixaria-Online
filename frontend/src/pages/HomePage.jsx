import React from 'react';
import MenuHeader from '../components/MenuHeader';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Slideshow from '../components/Slideshow';
import CartaoCategoria from '../components/CartaoCategoria';
import './pagesCss/homeStyle.css';

const Home = () => {
    return (
        <div className='home-div'>
            <MenuHeader />
            <Slideshow />
            <div className='flex justify-content-center gap-5'>
                <CartaoCategoria
                    img={"receitasCategoria.png"}
                    alt={"receitas"}
                    label={"Receitas"}
                />
            </div>
            <Main />
            <Footer />
        </div>
    );
}

export default Home;