import { NavLink } from "react-router-dom";


export default function Home() {
  return (
    <>
      <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="40">
      <div className="DM_banner_wrap" id="DM_banner_wrap">
        <header id="navbar_top">
          <NavLink className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <div className="row w-100">
                <div className="col-md-3">
                    <a className="navbar-brand" href="#"> <img
                      src="images/domaintain-logo.png" alt=""></img> </a>
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
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#DMS_WhyDMS">Why DMS</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#DMS_Notification">Notification</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#DMS_Preview">Preview</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#DMS_FAQ">FAQ</a>
                      </li>
                      <li className="nav-item loginBtn">
                        <a className="nav-link" href="#DMS_FAQ"> <img src="images/login.png" alt=""/> Login</a>
                      </li>
                      <li className="nav-item signupBtn">
                        <a className="nav-link" href="#DMS_FAQ"><img src="images/signup.png" alt=""/>  Sign Up</a>
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
        
          <div className="DM_banner_slider">
            <div className="container">
              <div id="carouselExampleDark" className="carousel
                carousel-caption-outer carousel-dark slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row align-items-center position-relative">
                      <div className="col-lg-6 col-md-12 col-12">
                        <h5>Never Risk losing <br /> <span className="border-title">Domain</span>
                          again</h5>
                        <p className="my-4">Track your domain expiry in a single
                          place without<br />the hassle of going to
                          multiple registrars</p>
                        <div className="col-lg-12 col-md-12 col-12
                          newsletter-outer">
                          <input type="text" className="form-control"
                            placeholder="Email address.."
                            aria-label="Email address.."/>
                          <a className="btn btn-primary" href="#" role="button">Get
                            started <i
                              className="bi bi-arrow-right-short"></i></a>
                        </div>
                        <div className="col-lg-12 col-md-12 col-12 mx-0 my-2">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                              value="" id="flexCheckChecked" checked/>
                            <label className="form-check-label"
                              >
                              I agree to the <b>Terms & Conditions</b>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-12"><img
                          src="images/banner-comp.png" className="d-block
                          banner-image" alt="Banner-Image"/></div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <div className="d-none d-md-block">
                      <div className="row align-items-center">
                        <div className="col-md-7">
                          <h5>First slide label</h5>
                          <p>lore
                          </p>
                        </div>
                        <div className="col-md-5"><img src="images/banner-comp.png"
                            className="d-block w-100" alt="Banner-Image"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item text-center">
                    <div className="d-none d-md-block">
                      <div className="row align-items-center">
                        <div className="col-md-7">
                          <h5>First slide label</h5>
                          <p>Some representative placeholder content for the
                            first slide.</p>
                        </div>
                        <div className="col-md-5"><img src="images/banner-comp.png"
                            className="d-block w-100" alt="DesktopImg"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="element-outer">
              <img src="images/banner-element-1.png" alt="banner-element"
                className="element-1"/>
              <img src="images/banner-element-2.png" alt="banner-element"
                className="element-2"/>
            </div>
          </div>
        </div>

        <section id="DMS_WhyDMS" className="position-relative">
          
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <div className="sub-title">
                    <span>features</span>
                  </div>
                  <div className="title">
                    <h5><b>Why You </b>will choose DMS?</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 p-0">
                <div className="responsive responsive-slider">
                  <div className="features-outer">
                    <div className="icon-outer">
                      <i data-feather="upload-cloud"></i>
                    </div>
                    <div className="content-outer">
                      <h3>Bulk Upload Domain</h3>
                      <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit
                        sed do eiusmod tempor incididunt labore dolore mag...</p>
                    </div>
                  </div>
                  <div className="features-outer">
                    <div className="icon-outer">
                      <i data-feather="code"></i>
                    </div>
                    <div className="content-outer">
                      <h3>Interactive Dashboard</h3>
                      <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit
                        sed do eiusmod tempor incididunt
                        labore dolore mag...
                      </p>
                    </div>
                  </div>
                  <div className="features-outer">
                    <div className="icon-outer">
                      <i data-feather="bell"></i>
                    </div>
                    <div className="content-outer">
                      <h3>Trigger User Notification</h3>
                      <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit
                        sed do eiusmod tempor incididunt
                        labore dolore mag...
                      </p>
                    </div>
                  </div>
                  <div className="features-outer">
                    <div className="icon-outer">
                      <i data-feather="dollar-sign"></i>
                    </div>
                    <div className="content-outer">
                      <h3>Upgrade Pricing Plans</h3>
                      <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit
                        sed do eiusmod tempor incididunt
                        labore dolore mag...
                      </p>
                    </div>
                  </div>
                  <div className="features-outer">
                    <div className="icon-outer">
                      <i data-feather="repeat"></i>
                    </div>
                    <div className="content-outer">
                      <h3>Real Time Synching </h3>
                      <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit
                        sed do eiusmod tempor incididunt
                        labore dolore mag...
                      </p>
                    </div>
                  </div>
                  <div className="features-outer">
                    <div className="icon-outer">
                      <i data-feather="key"></i>
                    </div>
                    <div className="content-outer">
                      <h3>Transfer of Ownership</h3>
                      <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit
                        sed do eiusmod tempor incididunt
                        labore dolore mag...
                      </p>
                    </div>
                  </div>
                  <div className="features-outer">
                    <div className="icon-outer">
                      <i data-feather="search"></i>
                    </div>
                    <div className="content-outer">
                      <h3>Advanced Search & Filter</h3>
                      <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit
                        sed do eiusmod tempor incididunt
                        labore dolore mag...
                      </p>
                    </div>
                  </div>
                  <div className="features-outer">
                    <div className="icon-outer">
                      <i data-feather="grid"></i>
                    </div>
                    <div className="content-outer">
                      <h3>Integrate with ERP/CRM</h3>
                      <p>Lorem ipsum dolor sit ameconecte ur adipisicing elit
                        sed do eiusmod tempor incididunt
                        labore dolore mag...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="images/features-shape.png" alt="features-shape"
            className="features-shape"/>
        </section>
    
        <section id="DMS_Notification">
          <div className="DM_notification">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12 notifications">
                  <div className="section-title text-left mb-0">
                    <div className="sub-title">
                      <span>Notifications</span>
                    </div>
                    <div className="title mt-3">
                      <h5 className="pb-1"><b>Notifications</b> Anywhere Everywhere</h5>
                    </div>
                  </div>
                  <p> Period (Days)-
                    <ul className="noti_p glow">
                      <li> 90, </li>
                      <li> 60, </li>
                      <li> 30, </li>
                      <li> 15, </li>
                      <li> 10, </li>
                      <li> 7, </li>
                      <li> 3, </li>
                      <li> 2, </li>
                      <li> 1, </li>
                    </ul>
                  </p>
                  <ul className="noti d-flex p-0">
                    <li className="py-3"><span className="notibold"> <i className="bi
                          bi-square-fill pe-2"></i>Email:</span> Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Vel
                      fuga aliquid placeat dicta sunt accusantium
                    </li>
                    <li className="py-3"><span className="notibold"><i className="bi
                          bi-square-fill pe-2"></i>WhatsApp:</span> Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Vel
                      fuga aliquid placeat dicta sunt accusantium
                    </li>
                    <li className="py-3"><span className="notibold"><i className="bi
                          bi-square-fill pe-2"></i>SMS:</span> Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Vel fuga
                      aliquid placeat dicta sunt accusantium
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-12 boi_img">
                  <img src="images/boii.png" alt="Boyimage"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="DMS_Preview">
          
          <div className="container-fluid dms_bg text-center">
            <div className="dms_preview">
              <div className="text-pr">
                <div className="row">
                  <div className="col-md-12">
                    <div className="section-title mb-0 white-title">
                      <div className="sub-title">
                        <span>PREVIEW</span>
                      </div>
                      <div className="title">
                        <h5 className="text-white"> Enhancing the <span
                            className="border-title"> Powerful Monitoring Tool</span>
                          to reduce <br></br> the burden
                          of the clients!
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Domaintain Dashboard</p>
              </div>
              <div className="dashboard_img">
                <a href="#">
                  <div className="play_btn"> <i className="bi bi-play-fill
                      rounded-circle"> </i></div>
                </a>
                <img src="images/dashboard-img.png" alt="Play button"/>
              </div>
              <p>One of the biggest problems with domain expiry is that once a
                domain does expires and goes <br></br>
                through the rest of the domain cycles, anyone can re-register
                that domain.
              </p>
            </div>
          </div>
          <img src="images/preview-rectangle-1.png" alt="preview-rectangle-1"
            className="preview-rectangle-1"></img>
          <img src="images/preview-rectangle-2.png" alt="preview-rectangle-2"
            className="preview-rectangle-2"></img>
        </section>
        
        <div className="pricing_FAQ">
          
          <section id="pricing">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title">
                    <div className="sub-title">
                      <span>prising</span>
                    </div>
                    <div className="title">
                      <h5>Simple and Flexible. <span className="border-title">
                          Billed Annually</span></h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-12 col-12">
                  <div className="pricing-outer">
                    <h3 className="plan-title">pro</h3>
                    <div className="pricing-inner">
                      <h2> <span className="rupee-icon"> ₹</span> 99 <span
                          className="month">/Month </span> </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li> <i data-feather="check"></i> Add One Domain</li>
                        <li> <i data-feather="x" className="close-icon"></i> Add
                          Team Members</li>
                        <li> <i data-feather="x" className="close-icon"></i> Domain
                          Expiry Notification</li>
                        <li> <i data-feather="x" className="close-icon"></i>
                          Notification via Email</li>
                        <li> <i data-feather="x" className="close-icon"></i> Email
                          Support</li>
                        <li> <i data-feather="x" className="close-icon"></i> SSL
                          Expiry Notification</li>
                      </ul>
                      <button className="btn btn-started">Get Started <i
                          data-feather="arrow-right"></i></button>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-12 col-12">
                  <div className="pricing-outer">
                    <h3 className="plan-title">team</h3>
                    <div className="pricing-inner">
                      <h2> <span className="rupee-icon"> ₹</span> 299 <span
                          className="month">/Month </span> </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li> <i data-feather="check"></i> Add One Domain</li>
                        <li> <i data-feather="x" className="close-icon"></i> Add
                          Team Members</li>
                        <li> <i data-feather="x" className="close-icon"></i> Domain
                          Expiry Notification</li>
                        <li> <i data-feather="x" className="close-icon"></i>
                          Notification via Email</li>
                        <li> <i data-feather="x" className="close-icon"></i> Email
                          Support</li>
                        <li> <i data-feather="x" className="close-icon"></i> SSL
                          Expiry Notification</li>
                      </ul>
                      <button className="btn btn-started">Get Started <i
                          data-feather="arrow-right"></i></button>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4 col-md-12 col-12">
                  <div className="pricing-outer">
                    <h3 className="plan-title">enterprise</h3>
                    <div className="pricing-inner">
                      <h2> <span className="rupee-icon"> ₹</span> 999 <span
                          className="month">/Month </span> </h2>
                    </div>
                    <div className="pricing-content">
                      <ul>
                        <li> <i data-feather="check"></i> Add One Domain</li>
                        <li> <i data-feather="x" className="close-icon"></i> Add
                          Team Members</li>
                        <li> <i data-feather="x" className="close-icon"></i> Domain
                          Expiry Notification</li>
                        <li> <i data-feather="x" className="close-icon"></i>
                          Notification via Email</li>
                        <li> <i data-feather="x" className="close-icon"></i> Email
                          Support</li>
                        <li> <i data-feather="x" className="close-icon"></i> SSL
                          Expiry Notification</li>
                      </ul>
                      <button className="btn btn-started">Get Started <i
                          data-feather="arrow-right"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src="images/pricing-rectangle.png" alt="pricing-rectangle"
              className="pricing-rectangle"></img>
          </section>
          
          <section id="DMS_FAQ">
            <div className="container dmfaq">
              <div className="row">
                <div className="col-md-12">
                  <div className="section-title">
                    <div className="sub-title">
                      <span>FAQ</span>
                    </div>
                    <div className="title">
                      <h5>We have some <b>FAQ</b> </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row faqrow">
                <div className="col-md-6 py-3">
                  <h4>Is Domain Tracker free?</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut la</p>
                </div>
                <div className="col-md-6 py-3">
                  <h4>Is Domain Tracker free?</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut la</p>
                </div>
                <div className="col-md-6 py-3">
                  <h4>Is Domain Tracker free?</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut la</p>
                </div>
                <div className="col-md-6 py-3">
                  <h4>Is Domain Tracker free?</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut la</p>
                </div>
                <div className="col-md-6 py-3">
                  <h4>Is Domain Tracker free?</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut la</p>
                </div>
                <div className="col-md-6 py-3">
                  <h4>Is Domain Tracker free?</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut la</p>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <section className="DMS_footer slantedDivA">
          <div className="container">
            <button type="button" className="btn btn-primary btn-floating btn-lg"
              id="btn-back-to-top">
              <i data-feather="chevron-up"></i>
            </button>
            <footer className="py-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <img src="images/domaintain-logo.png" className="logofooter"
                    alt=""></img>
                  <p className="py-4 company-desc">Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nunc vulputate libero et velit
                    interdum, ac aliquet odio mattis. className aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.</p>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <h5 className="py-2">PRODUCTS</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">Social Feeds</a></li>
                    <li><a className="link-secondary" href="#">More Products</a></li>
                    <li><a className="link-secondary" href="#">Services</a></li>
                    <li><a className="link-secondary" href="#">Features</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <h5 className="py-2">COMPANY</h5>
                  <ul className="list-unstyled text-small">
                    <li><a className="link-secondary" href="#">About Us</a></li>
                    <li><a className="link-secondary" href="#">Contact</a></li>
                    <li><a className="link-secondary" href="#">Privacy Policy</a></li>
                    <li><a className="link-secondary" href="#">Terms of Service</a></li>
                    <li><a className="link-secondary" href="#">Help</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <h5 className="py-2">GET IN TOUCH</h5>
                  <ul className="text-small social-icons">
                    <li> <a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
                    <li> <a href="#"> <i className="fab fa-facebook-f"></i> Facebook</a></li>
                    <li> <a href="#"> <i className="fab fa-linkedin-in"></i> Linked
                        in</a> </li>
                  </ul>
                </div>
              </div>
            </footer>
            <div className="copyright-footer">
              <div className="row">
                <div className="col-md-6 float-left">
                  <p>© Copyright Domaintain. 2022 </p>
                </div>
                <div className="col-md-6 text-right">
                  <p>Powered by <a href="#" target="_blank">ESDS Software
                      Solution Ltd.</a></p>
                </div>
              </div>
            </div>
          </div>
          <img src="images/footer-rectangle.png" alt="footer-rectangle"
            className="footer-rectangle"></img>
        </section>
    </body>
    
    </>
  )
}
