import React from "react";
import "../Home/Home.scss"
import axios from "axios";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/Sidebar";
import Blogs from "../../components/Blogs/Blogs";

class Home extends React.Component {
  state = {
    currentUser: null,
   
  };

  componentDidMount() {
    //make axios call to backend to get currentUser info and set it to state
    const token = sessionStorage.getItem("token");
    axios
      .get("http://localhost:8080/user/bookshelf/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.setState({
          currentUser: res.data.currentUser,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout = () => {
    sessionStorage.removeItem("token");
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <Header Logout={this.logout} />
        <div className="home">
          <Blogs />
          <Sidebar />
        </div>
      </>
    );
  }
}

export default Home;
