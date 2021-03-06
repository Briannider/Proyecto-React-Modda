import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="d-grid">
                <button className="btn btn-dark mt-4 border-0" type="button" id="con">Contacto</button>
            </div>
            <footer className="container p-0">
                <div className="col-6">
                    <ul className="d-grid text-start p-0 list-unstyled">
                        <li className="ps-2"><a href="#" target="_blank"><img src="img/contact.png" className="p-2" alt="Contact" />Contacto</a></li>
                        <li className="ps-2"><a href="#" target="_blank"><img src="img/redes.png" className="p-2" alt="Social_medias" />Redes</a></li>
                        <li className="ps-2"><a href="#" target="_blank"><img src="img/aboutus.png" className="p-2" alt="About_us" />Sobre Nosotros</a></li>
                        <li className="ps-2"><a href="#" target="_blank"><img src="img/Politics.png" className="p-2" alt="Politics_icon" />Politicas y privacidad</a></li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul className="d-grid text-end list-unstyled">
                        <li className="pe-2"><a href="#" target="_blank"><img src="img/facebook.png" className="p-2" alt="icon_web_facebook" />Facebook</a></li>
                        <li className="pe-2"><a href="#" target="_blank"><img src="img/instagram.png" className="p-2" alt="icon_web_instagram" />Instagram</a></li>
                        <li className="pe-2"><a href="#" target="_blank"><img src="img/twitter.png" className="p-2" alt="icon_web_twitter" />Twitter_es</a></li>
                        <li className="pe-2"><a href="http://wa.me/541133425726/?text=contacto" target="_blank"><img src="img/whatsapp.png" className="p-2" alt="icon_web_whatsapp" />Whatsapp</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
};

export default Footer;
