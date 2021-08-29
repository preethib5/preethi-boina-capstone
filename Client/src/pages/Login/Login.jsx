import React, { Component } from "react";
import axios from "axios";
import "../Login/Login.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
class Login extends Component {
  state = {
    formData: null,
    passwordShown: false,
  };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/user/login`, this.state.formData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push("/blog");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  showSignUp = () => {
    this.props.history.push("/signup");
  };
  togglePassword = () => {
    this.setState({
      passwordShown: true,
    });
  };
  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="formset">
            <fieldset className="formset__fieldset">
              <legend className="formset__fieldset--legend">
                Please sign in
              </legend>
              <ul className="formset__list">
                <li className="formset__item">
                  <label className="formset__item--label" htmlFor="email">
                    Email:
                  </label>
                  <input
                    className="formset__item--input"
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    placeholder="Enter Email"
                    required
                  />
                </li>
                <li className="formset__item2">
                  <label className="formset__item--label" htmlFor="password">
                    Password:
                  </label>
                  <input
                    className="formset__item--input"
                    type={this.state.passwordShown ? "text" : "password"}
                    name="password"
                    onChange={this.handleChange}
                    placeholder="Enter Password"
                    required
                  />
                  <i className="eye" onClick={this.togglePassword}>
                    {eye}
                  </i>
                </li>
              </ul>

              <div className="formset__buttons">
              <button  className="formset__buttons--btn1" type="submit">
                LogIn
              </button>
              <button  className="formset__buttons--btn2" type="button" onClick={this.showSignUp}>
                SignUp
              </button>
            </div>
            </fieldset>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
