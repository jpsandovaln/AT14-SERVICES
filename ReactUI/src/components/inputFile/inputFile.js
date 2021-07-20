import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col } from "react-bootstrap";

export default function InputFile(promps) {
  return (
    <Form.Group controlId="formFileMultiple" as={Col} className="mb-3">
      <Form.File id="formcheck-api-regular">
        <Form.File.Label>{promps.fileMessage}</Form.File.Label>
        <Form.File.Input name={promps.name} accept={promps.typeAccepted} />
        <Form.Text>{promps.msg}</Form.Text>
      </Form.File>
    </Form.Group>
  );
}
