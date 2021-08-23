import React, { Component } from "react";
import axios from "axios";
import "../Login/Login.scss"
import { Button, Modal } from "react-bootstrap";
import {Link} from 'react-router-dom';

class Login extends Component {
  state = {
    formData: null,
  };

  handleChange = (e) => {
      debugger
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
      debugger
    e.preventDefault();
    axios
      .post(`http://localhost:8080/user/login`, this.state.formData)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  showSignUp = () => {
    this.props.history.push("/signup");
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
                      // value={this.handleChange}
                      onChange={this.handleChange}
                      placeholder="Enter Email"
                      required
                    />
                  </li>
                  <li className="formset__item">
                    <label className="formset__item--label" htmlFor="password">
                      Password:
                    </label>
                    <input
                      className="formset__item--input"
                      //type={passwordShown ? "text" : "password"}
                      type="password"
                      name="password"
                      // value={password}
                      onChange={this.handleChange}
                      placeholder="Enter Password"
                      required
                    />
                    {/* <i className="eye" onClick={togglePassword}>{eye}</i> */}
                  </li>
                </ul>

                  <button
                    className="button"
                    type="submit"    
                    >
                    Log In
                  </button>
                <button type="button" onClick={this.showSignUp}>
              Sign up
            </button>
              </fieldset>
            </div>
          </form>
      </>
    );
  }
}

export default Login;