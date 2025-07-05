import { assets } from '../../assets/frontend_assets/assets'
import "./fotter.css"
export const Footer = () => {
    return (<>
        <div className="footer-container" id='footer'>
            <div className="footer-left">
                <img src={assets.logo} alt='logo' className='logo-image'></img>
                <p className='footer-para'>Bringing delicious meals to your doorstep.
                    Fresh ingredients, tasty recipes, and quick delivery.
                    Your hunger, our responsibility — anytime, anywhere.
                    Join us and explore a world of flavors.
                    Thank you for choosing Tomato!</p>
                <div className="footer-left-img">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <h4>Company</h4>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-right">
                <h4>GET IN TOUCH</h4>
                <p>+91-9885226587</p>
                <p>contact@sivaprasadKada</p>
            </div>
         
        </div>
        <a href='https://sivaprasad-kada-protfolio.netlify.app/' target='_blank'>
          <p className='owner-tag'>Made With ❤️ By K.SivaPrasad</p></a>
        </>
    )
}
