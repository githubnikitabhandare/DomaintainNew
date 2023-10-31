import footerrect from '../assets/images/footer-rectangle.png'
import domaintainlogo from '../assets/images/domaintain-logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <section className="DMS_footer slantedDivA">
          <div className="container">
            <button type="button" className="btn btn-primary btn-floating btn-lg"
              id="btn-back-to-top">
              <i data-feather="chevron-up"></i>
            </button>
            <footer className="py-5">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <img src={domaintainlogo} className="logofooter"
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
                    <li><Link className="link-secondary" to="#">Social Feeds</Link></li>
                    <li><Link className="link-secondary" to="#">More Products</Link></li>
                    <li><Link className="link-secondary" to="#">Services</Link></li>
                    <li><Link className="link-secondary" to="#">Features</Link></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <h5 className="py-2">COMPANY</h5>
                  <ul className="list-unstyled text-small">
                    <li><Link className="link-secondary" to="#">About Us</Link></li>
                    <li><Link className="link-secondary" to="#">Contact</Link></li>
                    <li><Link className="link-secondary" to="#">Privacy Policy</Link></li>
                    <li><Link className="link-secondary" to="#">Terms of Service</Link></li>
                    <li><Link className="link-secondary" to="#">Help</Link></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <h5 className="py-2">GET IN TOUCH</h5>
                  <ul className="text-small social-icons">
                    <li> <Link to="#"><i className="fab fa-twitter"></i> Twitter</Link></li>
                    <li> <Link to="#"> <i className="fab fa-facebook-f"></i> Facebook</Link></li>
                    <li> <Link to="#"> <i className="fab fa-linkedin-in"></i> Linked
                        in</Link> </li>
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
          <img src={footerrect} alt="footer-rectangle"
            className="footer-rectangle"></img>
        </section>
    </div>
  )
}
