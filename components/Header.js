import React, {useState, useContext} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import {Menu, Container, Image, Icon, Label} from 'semantic-ui-react'
import {ContextState} from './ContextSetter'

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {

    const [itemCart, setItemCart] = useContext(ContextState);
    
    return (
    <React.Fragment>
        <Head>
            <link rel="stylesheet" type="text/css" href="/nprogress.css" />
            <link href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap" rel="stylesheet"></link>
        </Head>
        <div className="navbar_menu">
            <Link href="/" passHref>
                <Image className="imagenavbar" 
                    size="small"
                    src="/amigurises.png"
                />
            </Link>
            <div className="navbar_links">
                <Link href="/media">
                    <a> MEDIA </a>
                </Link>
                <Link href="/descuentos">
                    <a> DESCUENTOS </a>
                </Link>
                <Link href="/contacto">
                    <a> CONTACTO </a>
                </Link>
                <Link href="/cart">
                <Menu compact color="red">
                <Menu.Item as='a'
                color="red">
                    <Icon name='shopping basket' /> CARRITO
                    <Label color='red' floating>
                        {itemCart}
                    </Label>
                </Menu.Item>
                </Menu>
                </Link>
            </div>
            
            <style jsx>{`
            .imagenavbar{
            }
            .navbar_menu{
                padding:30px 100px 0px 100px;
                width:100%;
                background:#eff3f5;
                display:grid;
                grid-template-columns:1fr 1fr;
                align-items:center;
                height:80px;
            }
            .navbar_links{
                display:grid;
                grid-template-columns:1fr 1fr 1fr 1fr;
                grid-column-gap:14px;
                align-items:center;
                justify-content:center;
                justify-items:center;
            }
            a{
                text-align:center
                text-decoration:none;
                color: #4c4c4c;
                font-family: 'Fredoka One', cursive;
                font-size:14px;
                letter-spacing:3px;
            }
        `}</style>
        </div>
    </React.Fragment>
)}

export default Header;