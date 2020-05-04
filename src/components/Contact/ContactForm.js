import React, { Component, Fragment } from "react";
import styled from "styled-components";
import {
  AvForm,
  AvGroup,
  AvFeedback,
  AvInput,
} from "availity-reactstrap-validation";

import * as emailjs from "emailjs-com";
import { Button, Label, Spinner, Alert } from "reactstrap";
class ContactForm extends Component {
  state = { loading: false, success: false };

  handleValidSubmit(e) {
    this.setState({ loading: true });
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: process.env.REACT_APP_TO_EMAIL,
      subject: subject,
      message_html: `${name} --- ${message}`,
    };
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then((res) => {
        this.form && this.form.reset();
        this.setState({ loading: false });
        this.setState({ success: true });
        setTimeout(() => {
          this.setState({ success: false });
        }, 2000);
      });
    this.resetForm();
  }
  resetForm() {
    this.setState({});
  }

  handleInvalidSubmit() {}

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    const { loading, success } = this.state;
    return (
      <Wrapper>
        <h3 className="p-heading1">This better be important, or else</h3>
        <div className="the-form">
          <AvForm
            onValidSubmit={this.handleValidSubmit.bind(this)}
            onInvalidSubmit={this.handleInvalidSubmit.bind(this)}
            ref={(c) => (this.form = c)}
          >
            <AvGroup>
              <Label className="text-labels" for="email">
                Your email address
              </Label>
              <AvInput name="email" id="email" type="email" required />
              <AvFeedback>This field is required</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label className="text-labels" for="name">
                Name
              </Label>
              <AvInput name="name" id="name" required />
              <AvFeedback>This field is required</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label className="text-labels" for="subject">
                Subject
              </Label>
              <AvInput name="subject" id="subject" required />
              <AvFeedback>This field is required</AvFeedback>
            </AvGroup>

            <AvGroup>
              <Label className="text-labels" for="message">
                Message
              </Label>
              <AvInput name="message" id="message" type="textarea" required />
              <AvFeedback>This field is required</AvFeedback>
            </AvGroup>
            <Button
              variant="primary"
              type="submit"
              disabled={loading}
              className="button-here"
            >
              Submit
              {loading && (
                <Fragment>
                  &nbsp;
                  <Spinner size="sm" color="light" />
                </Fragment>
              )}
            </Button>
            {success && <Alert color="success">Message sent</Alert>}
            {console.log("loading", this.state)}
          </AvForm>
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
