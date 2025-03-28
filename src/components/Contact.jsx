import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Contact = () => {
  return (
    <>
      <div className="container">
        <div
          className="row"
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          <h2>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            odit.
          </p>
        </div>
        <div style={{
            marginTop:"20px",
        }} className="row">
          <div className="col">
            <Form style={{
                textAlign:"center",
                height:"100%",
            }}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl"
              className="w-100"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
