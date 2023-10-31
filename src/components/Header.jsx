import { Link, NavLink } from "react-router-dom";
import domaintainlogo from '../assets/images/domaintain-logo.png'
import login from '../assets/images/login.png'
import signup from '../assets/images/signup.png'

export default function Header() {
  return (
    <div>
      <header id="navbar_top">
          <NavLink className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <div className="row w-100">
                <div className="col-md-3">
                    <Link className="navbar-brand" to="#"> <img
                      src={domaintainlogo} alt=""></img> </Link>
                    <button className="navbar-toggler" type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown" aria-expanded="false"
                      aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="col-md-6">
                  <div className="collapse navbar-collapse top-navbar"
                    id="navbarNavDropdown">
                    <ul className="navbar-nav justify-content-end">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#DMS_WhyDMS">Why DMS</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#DMS_Notification">Notification</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#DMS_Preview">Preview</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#DMS_FAQ">FAQ</Link>
                      </li>
                      <li className="nav-item loginBtn">
                        <Link className="nav-link" to="#DMS_FAQ"> <img src={login} alt=""/> Login</Link>
                      </li>
                      <li className="nav-item signupBtn">
                        <Link className="nav-link" to="#DMS_FAQ"><img src={signup} alt=""/>  Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="btns_Top">
                    <button className="login"> Login </button>
                    <button className="SignUp"> Sign Up </button>
                  </div>
                </div>
              </div>
              </div>
            </NavLink>
          </header>
    </div>
  )
}
