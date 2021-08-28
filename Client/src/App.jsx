import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Header";
import SinglePost from "./pages/SinglePost/SinglePost";
import AddPost from "./pages/AddPost/AddPost";
import Settings from "./pages/Settings/Settings";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import EditPost from "./pages/EditPost/EditPost";
import SinglePage from "./components/SinglePage/SinglePage";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";

function App() {
  const user = false;
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <ProtectedRoute exact path="/" component={HomePage} /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />


          <Route exact path="/blog" component={Home} />
          <Route exact path="/blog/:id" component={Post}/>
          <Route exact path="/addpost/:id" component={AddPost} />
          <Route exact path="/post/:blogid/:postid" component={SinglePage} />
          <Route exact path="/editpost/:blogid/:postid" component={EditPost} />
          <Route exact path="/settings" component={Settings} />

          {/* <Route exact path="/post" component={SinglePost} /> */}
          {/* <Route exact path="/navbar" component={Navbar} /> */}
       
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
