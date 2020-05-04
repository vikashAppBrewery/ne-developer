import React from "react";
import "./form.css";
import Box from "@material-ui/core/Box";
// import ValidForm from "react-valid-form-component";

export default class MyForm extends React.Component {
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
      <div className="form-contact">
        <form
          nosubmit
          className="form"
          onSubmit={this.submitForm}
          action="https://formspree.io/xgelgnad"
          method="POST"
        >
          <div className="form-control">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              minLength="3"
              maxLength="50"
            />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-control">
            <label>Phone</label>
            <input
              type="number"
              name="number"
              placeholder="Phone"
              required
              minLength="10"
            />
          </div>
          <div className="form-control">
            <label>Message:</label>
            <textarea
              type="text"
              name="message"
              placeholder="Your message"
              required
              minLength="3"
              maxLength="450"
            />
          </div>
          <div className="form-control">
            {status === "SUCCESS" ? (
              <p>
                Thank you for your message <br /> We will get back to you
                shortly
              </p>
            ) : (
              <Box justify="center">
                <button>Submit</button>
              </Box>
            )}
            {status === "ERROR" && (
              <p>
                oops you didnt fill the form properly make sure all field are
                filled
              </p>
            )}
          </div>
        </form>
      </div>
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
