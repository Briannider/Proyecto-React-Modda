import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="d-grid">
                <button className="btn btn-dark mt-4 border-0" type="button" id="con">Contacto</button>
            </div>
            <footer className="container p-0">
                <div className="col-7">
                    <ul className="d-grid text-start p-0 list-unstyled">
                        <li><a href="#" target="_blank"><img src="img/contact.png" className="p-2" alt="Contact" />Contacto</a></li>
                        <li><a href="#" target="_blank"><img src="img/redes.png" className="p-2" alt="Socialmedias" />Redes</a></li>
                        <li><a href="#" target="_blank"><img src="img/aboutus.png" className="p-2" alt="Aboutus" />Sobre Nosotros</a></li>
                        <li><a href="#" target="_blank"><img src="img/Politics.png" className="p-2" alt="Politics_icon" />Politicas y privacidad</a></li>
                    </ul>
                </div>
                <div className="col-5">
                    <ul className="d-grid text-end list-unstyled">
                        <li><a href="#" target="_blank"><img src="img/facebook.png" className="p-2" alt="iconwebfacebook" />Facebook</a></li>
                        <li><a href="#" target="_blank"><img src="img/instagram.png" className="p-2" alt="iconwebinstagram" />Instagram</a></li>
                        <li><a href="#" target="_blank"><img src="img/twitter.png" className="p-2" alt="iconwebtwitter" />Twitter_es</a></li>
                        <li><a href="#" target="_blank"><img src="img/whatsapp.png" className="p-2" alt="iconwebwhatsapp" />Whatsapp</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
};

export default Footer;
