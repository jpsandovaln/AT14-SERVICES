import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Form, Col, Button, InputGroup, FormControl} from "react-bootstrap";

export default function CardInput(promps) {
    return (
        <Form as={Col}>
            <Form.Row className="align-items-center">
                <Form.Label column="lg" lg={2}>
                    Search
                </Form.Label>
                <Col xs="auto">
                    <InputGroup className="mb-2">
                        <InputGroup.Prepend>
                            <InputGroup.Text>&#128270;</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            id="inlineFormInputGroup"
                            placeholder="Username"
                        />
                    </InputGroup>
                </Col>
                <Col xs="auto">
                    <Button type="submit" className="mb-2">
                        Submit
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    );
}
