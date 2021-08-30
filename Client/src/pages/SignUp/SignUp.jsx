import React from "react";
import axios from "axios";
import "../SignUp/SignUp.scss";

class SignUp extends React.Component {
  state = {
    formData: null,
  };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/", this.state.formData)
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push("/login");
      })
      .catch((error) => alert(error));
  };

  showLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="user-info">
        <form onSubmit={this.handleSubmit}>
          <fieldset className="user-info__fieldset">
            <legend className="user-info__fieldset--legend">
              Create Account
            </legend>
            <ul className="user-info__list">
              <li className="user-info__item1">
              <label className="user-info__name">First Name:</label><span className="required-field">*</span>
            <input  className="user-info__input" type="text" name="firstName" onChange={this.handleChange} />
              </li>
              <li className="user-info__item2">
              <label className="user-info__name">Last Name:</label><span className="required-field">*</span>
            <input className="user-info__input" type="text" name="lastName" onChange={this.handleChange} />
              </li>
              <li className="user-info__item3">
              <label className="user-info__name">Email:</label><span className="required-field">*</span>
            <input className="user-info__input" type="email" name="email" onChange={this.handleChange} />
              </li>
              <li className="user-info__item4">
              <label className="user-info__name">Password:</label><span className="required-field">*</span>
            <input
            className="user-info__input" 
              type="password"
              name="password"
              onChange={this.handleChange}
            />
              </li>
            </ul>
           
            <div className="user-info__buttons">
              <button  className="user-info__buttons--btn1" type="submit">Sign up</button>
              <button className="user-info__buttons--btn2"  type="button" onClick={this.showLogin}>
                Log in
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default SignUp;
