import profileDiego from "./../assets/profile-diego.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';




export const HomePage = () => {


    return (
        <div className="main">
            <div id="profile">
               <img src= {profileDiego} alt="Diego Corrêa" />
               <p>Diego Corrêa, 21 Anos</p>
            </div>

            <div id="links">
                  <ol>
                     <li>
                        <a href="#">Linkedin</a>
                     </li>
                     <li>
                        <a href="#">GitHub</a>
                     </li>
                     <li>
                        <a href="#">Instagram</a>
                     </li>
                     <li>
                        <a href="#">Twitter</a>
                     </li>
                  </ol>
            </div>

            

            <div id="social-links">
                  <a href="" className="iconsSocialLinks"><FontAwesomeIcon className="icon" icon={ faLinkedin } /></a>
                  <a href="" className="iconsSocialLinks"><FontAwesomeIcon className="icon" icon={ faGithub } /></a>
                  <a href="" className="iconsSocialLinks"><FontAwesomeIcon className="icon" icon={ faTiktok } /></a>
            </div>

            <div id="footer">
                  <p>Feito por Diego Corrêa</p>
            </div>
        </div>
    )
 }
 