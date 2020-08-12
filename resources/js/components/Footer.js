import React from "react";
import moment from "moment";
import {getLanguage, setLanguage, useTranslation} from "react-multi-lang";

const Footer = props => {
    const _handleLanguageChange = (e) => {
        e.preventDefault();
        if (getLanguage() == "en") {
            setLanguage("bg");
            localStorage.setItem('lang', 'bg');
        } else if (getLanguage() == "bg") {
            setLanguage("en");
            localStorage.setItem('lang', 'en')
        }
    }

    const t = useTranslation();

    return (
        <footer className="site-footer">
            <div className="container">


                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-6 col-md-4 col-lg-4 mb-5 mb-lg-0">
                                <h3 className="footer-heading mb-4">{t('home.quick-menu')}</h3>
                                <ul className="list-unstyled">
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Servers</a></li>
                                    <li><a href="#">Hosting</a></li>
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row mb-5">
                            <div className="col-md-12"><h3
                                className="footer-heading mb-4">{t('home.contacts')}</h3></div>
                            <div className="col-md-6">
                                <p>London - 2398 <br/> 10 Japson Street</p>
                            </div>
                            <div className="col-md-6">
                                Tel. + (123) 3240-345-9348 <br/>
                                Mail. europe@youdomain.com
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5 mt-5 text-center">

                    <div className="col-md-12">
                        <p>
                            <a href="#" onClick={_handleLanguageChange}
                               className="btn btn-primary btn-outline-primary rounded-0 py-2 px-4">{(getLanguage())}</a>
                            <br/>
                            Copyright &copy; {`Name`} <br/> {`firmCreatedYear - ${moment(new Date()).format('YYYY')}`}
                            <br/>
                            {t('home.all-rights-reserved')}
                            <br/> {t('home.template-made')} <i className="icon-heart text-danger"
                                                                     aria-hidden="true"/> {t('home.by')} <a
                            href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer;
