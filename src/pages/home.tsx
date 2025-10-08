import profileDiego from "./../assets/profile-diego.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export const HomePage = () => {


   return (
      <div className="main">
         <div className="container">
            <div id="profile">
               <img id="img-profile" src={profileDiego} alt="Diego Corrêa" />
               <p>Diego Corrêa, estudando em Banco de Dados</p>
            </div>

            <div id="links">
               <ol>
                  <li>
                     <a href= "#">Portfólio</a>
                  </li>
                  <li>
                     <a href="https://diegocorreasb.github.io/Calculator/" target="_blank">Calculator Project</a>
                  </li>
                  <li>
                     <a href="#">Login Screen</a>
                  </li>
                  <li>
                     <a href="https://diegocorreasb.github.io/orderTableJS/" target="_blank">Ordered Table</a>
                  </li>
                  <li>
                     <a href="#">Sobre mim</a>
                  </li>
               </ol>
            </div>

            <div id="social-links">
               <a href="https://www.linkedin.com/in/diego-berto-7622902b2/" className="iconsSocialLinks" target="_blank"> <FontAwesomeIcon className="icon" icon={faLinkedin} /> </a>
               <a href="https://github.com/DiegoCorreaSB" className="iconsSocialLinks" target="_blank"> <FontAwesomeIcon className="icon" icon={faGithub} /> </a>

               <a href="https://www.tiktok.com/@correa.dev" className="iconsSocialLinks" target="_blank"> <FontAwesomeIcon className="icon" icon={faTiktok} /> </a>

               <a href="https://www.instagram.com/dgcorrea__/" className="iconsSocialLinks" target="_blank"> <FontAwesomeIcon className="icon" icon={faInstagram} /> </a>
            </div>

            <div id="footer">
               <p>Feito por Diego Corrêa</p>
            </div>
         </div>
      </div>
   )
}
