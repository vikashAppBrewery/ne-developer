import React from "react";
import "./qoute-form.css";

export default class QouteForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xvowpjlp"
        method="POST"
        id="qoute-form"
      >
        <label>Name:</label>
        <input type="text" placeholder="full name" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Budget:</label>
        <input type="number" name="budget" />
        <label>Phone Number:</label>
        <input type="number" name="phone" />
        <label>Message:</label>
        <textarea type="text" name="message" />
        {status === "SUCCESS" ? (
          <p>Thank you for response! We will get back to you shortly.</p>
        ) : (
          <button>Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
