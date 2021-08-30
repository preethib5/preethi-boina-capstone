import React, { Component } from "react";
import "../Settings/Settings.scss";
import Topbar from "../../components/TopBar/Topbar";
import Sidebar from "../../components/SideBar/Sidebar";
import axios from "axios";
import AccountModal from "../../components/Modalpopups/AccountModal";


class Settings extends Component {
  state = {
    userdata: [],
    userDetails: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    deleteModalShow: false,
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8080/user/bookshelf/users/`)
      .then((response) => {
        this.setState({
          userdata: response.data,
        });
        return response.data[0].id;
      })
      .then((res) => {
        axios
          .get(`http://localhost:8080/user/bookshelf/users/${res}`)
          .then((res) => {
            this.setState({
              userDetails: res.data,
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              email: res.data.email,
              password: res.data.password,
            });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const updateUser = {
      //must match state properties
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .put(
        `http://localhost:8080/user/current/${this.state.userDetails.id}`,
        updateUser
      )
      .then((response) => {
        this.setState({
          firstName: response.data.updateUser.firstName,
          lastName: response.data.updateUser.lastName,
          email: response.data.updateUser.email,
          password: response.data.updateUser.password,
        });
        this.props.history.push(`/blog`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteUser = (id) => {
    // e.preventDefault();
    //const blogid = this.state.id;
    axios
      .delete(`http://localhost:8080/user/current/${id}`)
      .then((res) => {
        this.props.history.push(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let deleteModalClose = () => this.setState({ deleteModalShow: false });
    return (
      <>
        <Topbar />
        <div className="settings">
          <div className="settings__wrapper">
            <div className="settings__title">
              <span className="settings__updateTitle">Update Your Account</span>
              <span
                className="settings__deleteTitle"
                onClick={() => {
                  this.setState({ deleteModalShow: true });
                }}
              >
                <AccountModal
                  show={this.state.deleteModalShow}
                  userDetails={this.state.userDetails}
                  deleteUser={this.deleteUser}
                  onHide={deleteModalClose}
                />
               
              </span>
            </div>
            <form className="settings__form">
              {/* <label htmlFor="profilepic">Profile Picture</label>
              <div className="settings__profilepic">
                <img
                  className="settings__img"
                  src="https://tse4.mm.bing.net/th?id=OIP.OMgy4YTVhPYnZLO3YsXeBQDCFB&pid=Api&P=0&w=300&h=300"
                  alt=""
                />
                <label htmlFor="fileinput">
                  <i className="settings__icon far fa-user-circle"></i>
                </label>
                <input type="file" id="fileinput" style={{ display: "none" }} />
              </div> */}
              <label className="settings__form--label">First Name</label>
              <input className="settings__form--input"
                type="text"
                name="firstName"
                id="firstName"
                defaultValue={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First Name"
              />
              <label className="settings__form--label">Last Name</label>
              <input className="settings__form--input"
                type="text"
                name="lastName"
                id="lastName"
                defaultValue={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
              />
              <label className="settings__form--label">Email</label>
              <input className="settings__form--input"
                type="email"
                name="email"
                id="email"
                defaultValue={this.state.email}
                onChange={this.handleChange}
                placeholder="email@gmail.com"
              />
              <label className="settings__form--label">Password</label>
              <input className="settings__form--input"
                type="password"
                name="password"
                id="password"
                defaultValue={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
              <button className="settings__submit" onClick={this.handleSubmit}>
                Update
              </button>
            </form>
          </div>

          <Sidebar />
        </div>
      </>
    );
  }
}

export default Settings;
