import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <>
        <div className="title-div" style={{marginTop: '25px', backgroundColor: 'white'}}><h1 style={{color: '#88D136', marginBottom: '15px'}} id="contact">Kapcsolat</h1></div>
        <div class="contact" style={{width: '75vw', position: 'relative', left: '12.5vw', marginTop: '55px'}}>
            <Form className="form" style={{position:'relative'}} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email cím" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Üzenet szövege"/>
                </Form.Group>
                <Button type="submit" style={{backgroundColor: '#88D136', border: '0', borderRadius: '35px'}}>Küldés</Button>
            </Form>
        </div>
        </>
    )
}
