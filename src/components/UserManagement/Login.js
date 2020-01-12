import React from "react";
import { Push } from "react-router-redux";
import { browserHistory } from "react-router-redux";
class Login extends React.Component {
  constructor() {
    super();
    this.onClick = this.ClickDetail.bind(this);
  }
  ClickDetail = e => {
    e.preventDefault();
    this.props.history.push("/ListComptes");
  };
  render() {
    return (
      <div>
        <form
          id="contact-form"
          method="post"
          className="reservations-box"
          name="contactform"
        >
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="form-box">
              <input
                type="text"
                name="username"
                placeholder="Identifiant"
                required="required"
                data-error="Firstname is required."
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="form-box">
              <input
                type="password"
                name="password"
                placeholder="Mot de Passe"
                required="required"
                data-error="Time is required."
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="reserve-book-btn text-center">
              <button
                className="hvr-underline-from-center"
                type="submit"
                value="Se connecter"
                id="submit"
                onClick={this.ClickDetail}
              >
                Se Connecter{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
