import React, { Component } from "react";
import styled from "styled-components";

import * as emailjs from "emailjs-com";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: process.env.REACT_APP_TO_EMAIL,
      subject: subject,
      message_html: `${name} --- ${message}`,
    };
    emailjs.send(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAIL_USER_ID
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <Wrapper>
        <h3 className="p-heading1">This better be important, or else</h3>
        <div className="the-form">
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-labels">Your email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-labels">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Label className="text-labels">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, "subject")}
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-labels">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary the-textarea"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
              />
            </FormGroup>
            <Button variant="primary" type="submit" className="button-here">
              Submit
            </Button>
          </Form>
          <a
            className="discord"
            href="https://discord.gg/SrMvpj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Also check our Discord
          </a>
        </div>
      </Wrapper>
    );
  }
}
export default ContactForm;

const Wrapper = styled.div`
  background-color: #000000;

  .p-heading1 {
    padding-top: 20px;
    color: #dfcf99;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .text-labels {
    color: #a19362;
  }

  .the-form {
    background-color: #000000;
    text-align: center;
    max-width: 350px;
    padding: 20px;
    margin: auto;
  }

  input,
  textarea {
    background-color: white;
    color: black !important;
  }

  .the-textarea {
    min-height: 150px;
    max-height: 400px;
  }

  .button-here {
    cursor: pointer;
  }

  .discord {
    color: #a19362;
    margin-top: 20px;
    font-weight: 600;
    cursor: pointer;
  }
`;
