import React from 'react';
import { Avatar } from 'primereact/avatar';
import './componentsStyles/footer-style.css';

const currentYear = new Date().getFullYear();

function ItemList(props) {
  return (
    <li style={{ marginTop: "8px" }}>
      {props.children}
    </li>
  );
}

function List({ contents, header }) {
  return (
    <ul className='list-none pl-0'>
      <h3 style={{ marginTop: "0px" }}>{header}</h3>
      {contents.map((item, index) => (
        <ItemList key={index} value={index}>{item}</ItemList>
      ))}
    </ul>
  );
}

function Footer() {
  const explora = ["Países", "Cidades", "Regiões", "Inspiração", "Treding Tours"];
  const booking = ["Book now", "Negocios e prêmios", "Ser parceiro", "Sign In/Registrar", "Minha conta"];
  const companhia = ["Carreira", "Nossa história", "Parcerias"];
  const suporte = ["Contacto", "FAQ", "Reportas problemas"];

  return (
    <footer className='flex flex-wrap bg-gray-600 text-white-alpha-90'>
      <div className='flex footer-component1'>
        <div className='flex footer-component1-list gap-6'>
          <List contents={explora} header={"Explora"} />
          <List contents={booking} header={"Booking"} />
          <List contents={companhia} header={"Companhia"} />
          <List contents={suporte} header={"Suporte"} />
        </div>

        <div className='flex p-1 footer-component1-avatars gap-3'>
          <a href="https://www.instagram.com/ladislaw7_/">
            <Avatar image="/instagram.png" size="medium" className='mt-3 p-0 bg-gray-600' />
          </a>
          <a href="">
            <Avatar image="/whatsapp.png" size="medium" className='mt-3 p-0 bg-gray-600' />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557110021321" target='_blank'>
            <Avatar image="/facebook.png" size="medium" className='mt-3 p-0 bg-gray-600' />
          </a>
        </div>

      </div>

      <div className='gap-space1 footer-component1-last'>
        <span>
          <p> &copy; {" " +  currentYear} All rights reserved</p>
        </span>
        <div className='footer-component1-last-list gap-4'>
          <a href="" className='text-white'>Terms & Conditions</a>
          <a href="" className='text-white'>Privacy Policy</a>
          <a href="" className='text-white'>Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;