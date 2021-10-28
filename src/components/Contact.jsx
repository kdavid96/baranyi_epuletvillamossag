import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Recaptcha from 'react-recaptcha';

export default function Contact() {
    const [isVerified, setVerified] = useState(false);
    const [message, setMessage] = useState("");
    
    const sendEmail = (e) => {
        e.preventDefault();
        if(isVerified){
            setMessage("Sikeres küldés!");
            if(e.target.email.value !== "" && e.target.message.value !== ""){
                console.log(e.target.email.value);
                console.log(e.target.message.value);
            }
            setMessage("A mezők kitöltése kötelező!");
        } else{
            setMessage("Erősítse meg hogy nem robot!");
        }
    }

    const sendEmailCaptcha = () => {
        console.log('captcha loaded');
    }

    const verifyCaptcha = (response) => {
        if(response){
            setVerified(true);
            setMessage("");
        }
    }

    return (
        <>
        <div className="title-div" style={{marginTop: '25px', backgroundColor: 'white'}}><h1 style={{marginBottom: '15px'}} className="green-button" id="contact">Kapcsolat</h1></div>
        <div class="contact" style={{width: '75vw', position: 'relative', left: '12.5vw', marginTop: '55px'}}>
            <Form className="form" style={{position:'relative'}} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email cím" name="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Üzenet szövege" name="message"/>
                </Form.Group>
                <div style={{position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '25px'}}>
                    <Recaptcha
                    sitekey="6LenIP0cAAAAAA6KZ9jpPZHHCpjenAy9Q5in9w5h"
                    render="explicit"
                    verifyCallback={verifyCaptcha}
                    onloadCallback={sendEmailCaptcha}
                    />
                </div>
                <span id="success" style={{minHeight: '25px', color: isVerified ? 'green' : 'red'}}>{message}</span><br/>
                <Button type="submit" style={{backgroundColor: '#88D136', border: '0', borderRadius: '35px', marginTop: '15px'}}>Küldés</Button>
            </Form>
        </div>
        </>
    )
}
