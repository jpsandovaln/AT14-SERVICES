import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col } from "react-bootstrap";

export default function InputButton(promps) {
  return (
    <Form.Group as={Col} controlId="formFile" className="mb-3">
      <Form.Label>{promps.label}</Form.Label>
      <Form.Control
        type={promps.type}
        placeholder={promps.placeholder}
        name={promps.name}
        id={promps.id}
      ></Form.Control>
      <Form.Text>{promps.msg}</Form.Text>
    </Form.Group>
  );
}
