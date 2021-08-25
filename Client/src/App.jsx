
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import Header from './components/Header/Header';
import SinglePost from './pages/SinglePost/SinglePost';
import AddPost from "./pages/AddPost/AddPost";
import Settings from "./pages/Settings/Settings";
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import EditPost from './pages/EditPost/EditPost';


function App() {
  const user =false;
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/blog" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addpost" component={AddPost} />
        {/* <Route exact path="/addpost">{user ? <AddPost/> : <SignUp/>}</Route> */}
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/post/:id" component={SinglePost} />
        <Route exact path="/blog/:id" component={Home} />
        {/* <Route exact path="/navbar" component={Navbar} /> */}
        <Route exact path="/" component={HomePage} />
        <Route exact path="/editpost/:id" component={EditPost} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
