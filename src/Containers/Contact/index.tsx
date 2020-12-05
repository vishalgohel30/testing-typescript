import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import styled from 'styled-components'



const Span = styled.span` color: red`;



interface Props {

}

interface InitialState {
    name: string;
    email: string;
    subject: string;
    message: string;
    nameError: string,
    emailError: string,
    subjectError: string,
    messageError: string
}

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    nameError: '',
    emailError: '',
    subjectError: '',
    messageError: ''
}


const Contact = (props: Props) => {

    const [state, setstate] = useState<InitialState>(initialState);
    const [Loader, setLoader] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    const handleChanges = (e: { target: { name: any; value: any; }; }) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    const handleValidate = () => {
        let { name, email, subject, message, nameError, emailError, subjectError, messageError } = state;
        if (!(name && email && subject && message)) {
            if (name) {
                nameError = "";
            } else {
                nameError = "Name is required";

            }
            if (email) {
                emailError = "";
            } else {
                emailError = "Email is required";

            }
            if (subject) {
                subjectError = "";
            } else {
                subjectError = "Subject is required";

            }
            if (message) {
                messageError = "";
            } else {
                messageError = "Message is required";

            }
            setstate({ ...state, nameError, emailError, subjectError, messageError });
            return true;
        } else {
            setstate({ ...state, nameError: '', emailError: '', subjectError: '', messageError: '' });
            return false;
        }
    }

    const reset = () => {
        setstate({
            name: '',
            email: '',
            subject: '',
            message: '',
            nameError: '',
            emailError: '',
            subjectError: '',
            messageError: ''
        })
    }

    const handelSubmit = (e: any) => {
        e.preventDefault();
        if (handleValidate()) { return null }
        setLoader(true)
        emailjs.send('gmail', 'template_642ur1c', state, 'user_h8OH6Ixi5mAVSbKsx7XCY')
            .then((response) => {
                setLoader(false)
                console.log('SUCCESS!', response.status, response.text);
                alert("SUCCESS!")
                reset();
            }, (err) => {
                setLoader(false)
                alert("FAILED...")
                console.log('FAILED...', err);
            });
    }
    return (
        <div id="page" className="page">
            <section className="w3l-contacts-12" id="contact" style={{ height: window.innerHeight }}>
                <div className="contact-top pt-5">
                    <div className="container py-md-3">

                        <div className="row cont-main-top">
                            {/* <!-- contact form --> */}
                            <div className="contacts12-main col-lg-6 ">

                                <form className="main-input">
                                    <div className="top-inputs d-grid editContent">
                                        <input type="text" placeholder="Name" value={state.name} onChange={handleChange} name="name" />
                                        {state.nameError && <Span>{state.nameError}</Span>}
                                    </div>
                                    <div className="top-inputs d-grid editContent">
                                        <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email" />
                                        {state.emailError && <Span>{state.emailError}</Span>}
                                    </div>
                                    <div className="editContent">
                                        <input type="text" placeholder="subject" value={state.subject} onChange={handleChange} name="subject" />
                                        {state.subjectError && <Span>{state.subjectError}</Span>}
                                    </div>
                                    <div className="editContent">
                                        <textarea placeholder="Message"  onChange={handleChanges} value={state.message} name="message" />
                                        {state.messageError && <Span>{state.messageError}</Span>}

                                    </div>
                                    <div className="text-right">
                                        <button type="submit" onClick={handelSubmit} disabled={Loader} className="btn btn-theme2">{Loader ? "Loading..." : "Submit Now"}</button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- //contact form --> */}
                            {/* <!-- contact address --> */}
                            <div className="contact col-lg-6 mt-lg-0 mt-5 editContent" style={{ outline: "none", cursor: "inherit" }}>
                                <div className="cont-subs">
                                    <div className="cont-add editContent" style={{ outline: "none", cursor: "inherit" }}>
                                        <div className="cont-add-lft">
                                            <span className="fa fa-map-marker" aria-hidden="true" style={{ outline: "none", cursor: "inherit" }}></span>
                                        </div>
                                        <div className="cont-add-rgt">
                                            <p className="contact-text-sub editContent" style={{ outline: "none", cursor: "inherit" }}>India</p>
                                        </div>

                                    </div>
                                    <div className="cont-add add-2 editContent" style={{ outline: "none", cursor: "inherit" }}>
                                        <div className="cont-add-lft">
                                            <span className="fa fa-envelope" aria-hidden="true" style={{ outline: "none", cursor: "inherit" }}></span>
                                        </div>
                                        <div className="cont-add-rgt">
                                            <a className="editContent" target="blank" href="mailto:vishalgohel221296@gmail.com" style={{ outline: "none", cursor: "inherit" }}>
                                                <p className="contact-text-sub editContent" style={{ outline: "none", cursor: "inherit" }}>vishalgohel221296@gmail.com</p>
                                            </a>
                                        </div>

                                    </div>
                                    <div className="cont-add editContent" style={{ outline: "none", cursor: "inherit" }}>
                                        <div className="cont-add-lft">
                                            <span className="fa fa-phone" aria-hidden="true" style={{ outline: "none", cursor: "inherit" }}></span>
                                        </div>
                                        <div className="cont-add-rgt">
                                            <a className="editContent" href="tel:+918000734144" style={{ outline: "none", cursor: "inherit" }}>
                                                <p className="contact-text-sub editContent" style={{ outline: "none", cursor: "inherit" }}>+918000734144</p>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <div className="cont-add add-3 editContent" style={{ outline: "none", cursor: "inherit" }}>
                                        <div className="cont-add-lft">
                                            <span className="fa fa-file-pdf-o" aria-hidden="true" style={{ outline: "none", cursor: "inherit" }}></span>
                                        </div>
                                        <div className="cont-add-rgt">
                                            <a className="editContent"  href="javascript:;" style={{ outline: "none", cursor: "inherit" }}>
                                                <p className="contact-text-sub editContent" style={{ outline: "none", cursor: "inherit" }}>Download Resume</p>
                                            </a>
                                        </div>

                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="map editContent" style={{ outline: "none", cursor: "inherit" }}>
                    </div>
                </div>
            </section>
        </div>


    )
}
export default Contact;