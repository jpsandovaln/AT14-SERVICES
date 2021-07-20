import "./card.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function CardInput(promps) {
  return (
    <Card style={promps.style}>
      <Card.Header class="card-header">{promps.textHeader}</Card.Header>
      <Card.Body>{promps.componentReact}</Card.Body>
    </Card>
  );
}
