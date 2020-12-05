import React from 'react'

interface Props {

}

const Footer = (props: Props) => {
    return (
        <section className="w3l-footer-29-main" id="footer">
            <div className="footer-29 text-center editContent">
                <div className="container">
                    <div className="main-social-footer-29">
                        <a href="https://www.facebook.com/vishal.gohel.731" className="facebook editContent" style={{ outline: "none", cursor: "inherit" }}><span className="fa fa-facebook" style={{ outline: "none", cursor: "inherit" }}></span></a>
                        <a href="https://twitter.com/messages/50136899-1266774568011730945" className="twitter editContent" style={{ outline: "none", cursor: "inherit" }}><span className="fa fa-twitter" style={{ outline: "none", cursor: "inherit" }}></span></a>
                        <a href="https://www.instagram.com/vishalgohel24/" className="instagram editContent" style={{ outline: "none", cursor: "inherit" }}><span className="fa fa-instagram" style={{ outline: "none", cursor: "inherit" }}></span></a>
                        <a href="#google-plus" className="google-plus editContent" style={{ outline: "none", cursor: "inherit" }}><span className="fa fa-google-plus" style={{ outline: "none", cursor: "inherit" }}></span></a>
                        <a href="https://www.linkedin.com" className="linkedin editContent" style={{ outline: "none", cursor: "inherit" }}><span className="fa fa-linkedin" style={{ outline: "none", cursor: "inherit" }}></span></a>
                    </div>
                    <div className="bottom-copies text-center">
                        <p className="copy-footer-29">© 2020 My Website. All rights reserved | Designed by <a href="https://w3layouts.com">W3layouts</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export  default Footer;