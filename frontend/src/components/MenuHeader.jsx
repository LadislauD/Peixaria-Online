import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { InputText } from 'primereact/inputtext';
import { useSelector, useDispatch } from 'react-redux'
import { isTokenExpired, deleteToken, redirectFunction, setCookie } from '../utils/helpers';
import { basePath } from '../utils/constantes';
import './componentsStyles/menuHeader.css';
import 'primeicons/primeicons.css';

const makeLogOut = () => {
    setCookie('session', '', 0)
}

//componente
const MenuHeader = () => {
    const clientInfo = useSelector((state) => state.client.value);
    const shopCart = useSelector((state) => state.shopCart.value); 

    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge &&
                <Badge
                    className="ml-auto"
                    value={item.badge}
                />}
            {item.shortcut &&
                <span
                    className="ml-auto border-1 
                    surface-border 
                    border-round 
                    surface-100 text-xs p-1">
                    {item.shortcut}
                </span>}
        </a>
    );

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: `${basePath}/`
        },
        {
            label: 'Shop',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B',
                    template: itemRenderer
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U',
                    template: itemRenderer
                },
                {
                    separator: true
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette',
                            badge: 2,
                            template: itemRenderer
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette',
                            badge: 3,
                            template: itemRenderer
                        }
                    ]
                }
            ]
        },
        {
            label: 'Sobre',
        },
        {
            label: 'Contacte-nos',
            /*badge: 3,*/
            template: itemRenderer
        }
    ];

    const start = <a href="/">
        <img alt="logo" src="/logosite.png" width="75" className="p-2" />
    </a>;

    const end = (
        <div className="flex align-items-center gap-2">
            <p className='text-black-alpha-90'>
                {console.log("Cliente: ", clientInfo)}
                {!isTokenExpired(clientInfo['name']) ?
                    clientInfo['name'] : deleteToken()}
            </p>

            <Avatar
                image="/icon_loggedin.png"
                size="large"
                shape="circle"
                style={{ position: 'relative' }}
                onClick={() => {
                    let dropdown = document
                        .getElementsByClassName('dropdown-content')
                        .item(0);

                    if (dropdown.style.display == 'block') dropdown.style.display = 'none';
                    else dropdown.style.display = 'block';
                }}
            >
                <div className="dropdown-content text-base">
                    {clientInfo ?
                        <a href="/perfilConfig">Perfil da conta</a> : ''
                    }
                    <a href="#">Configurações</a>
                    {clientInfo ?
                        <a onClick={() => {
                            makeLogOut();
                        }} href='/'>Log-out
                        </a>
                        :
                        <a href="/login">
                            Log in
                        </a>
                    }
                </div>
            </Avatar>

            <Avatar
                image="/icon_cart.png"
                size="large"
                shape="circle"
                onClick={() => { redirectFunction(basePath, '/carrinho') }}
                className='idCartIcon p-overlay-badge'
            >
                <Badge className="ml-auto" severity="danger" value={shopCart.cartTotal} />
            </Avatar>
            <Avatar
            shape='circle'
            size='large'
            >
                <i className="pi pi-search" style={{ fontSize: '1.4rem' }}></i>
            </Avatar>
            {/*<InputText
                placeholder="Search"
                type="text"
                className="w-8rem sm:w-auto search searchBar"/>*/}
        </div>
    );

    return (
        <Menubar
            model={items}
            start={start}
            end={end}
            style={{ zIndex: "6" }}
            className='menuBar sticky'
        />
    )
}
export default MenuHeader;