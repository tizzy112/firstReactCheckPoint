// src/App.js

import React from "react";
import { Container, Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import "./App.css";

// Replace with your first name or leave it as '' if you want to display "Hello, there!"
const firstName = "Ayo";

const App = () => {
  return (
    <Container className="mt-5">
      <Card>
        <Image />
        <Card.Body>
          <Card.Title className="card-title">
            <Name />
          </Card.Title>
          <Card.Subtitle className="card-subtitle">
            <Price />
          </Card.Subtitle>
          <Card.Text className="card-text">
            <Description />
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="greeting">
        <h4>Hello, {firstName || "there!"}</h4>
        {firstName && (
          <img
            src="https://via.placeholder.com/50"
            alt="Profile"
            className="profile-image"
          />
        )}
      </div>
    </Container>
  );
};

export default App;
