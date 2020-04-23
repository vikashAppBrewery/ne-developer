import React from "react";
import "./form.css";

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
        {" "}
        <form
          class="form"
          onSubmit={this.submitForm}
          action="https://formspree.io/xgelgnad"
          method="POST"
        >
          <div class="form-control">
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div class="form-control">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div class="form-control">
            <label>Mobile</label>
            <input type="number" name="number" />
          </div>
          <div class="form-control">
            <label>Message:</label>
            <input type="text" name="message" />
          </div>
          <div class="form-control">
            {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
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
