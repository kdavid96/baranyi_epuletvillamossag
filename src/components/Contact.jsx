import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);
    }
    return (
        <div class="contact" style={{width: '55vw', position: 'relative', left: '22.5vw'}}>
            <h1 style={{marginBottom: '25px'}} id="contact">Kapcsolat</h1>
            <Form className="form" style={{position:'relative'}} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Email cím" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Üzenet szövege"/>
                </Form.Group>
                <Button type="submit" style={{backgroundColor: '#88D136', border: '0'}}>Küldés</Button>
            </Form>
        </div>
    )
}
