import "./Header.css";
import img from '../../Images/cinema.png'
import WeatherImage from "../../Images/weather.png";
import img1 from '../../Images/music (1).png';
import img2 from '../../Images/théatre.png';
import img3 from '../../Images/art plastique.png';
import img4 from '../../Images/Artboard 28.png';

const Header = () => {
    
    return(
        <div>
 <div className='header'>
           
     <div className='logo'>
     
                </div>
                <div class="nav-links" id="navLinks">
                    <ul >
                        <div className="meteo-date">
                        <li className="ba">
                        <h3>SATURDAY</h3>
                        <h6>19 December</h6>
                        </li>
                        <li><img className="img" src={WeatherImage} alt='weather Logo' /></li>
                        </div>
                        <li  className="em"><button>Urgence</button></li>
                    </ul>
                    <div className="titre"><img src={img4} alt="slogant"></img>
                    
                  
                           
                    </div>  
<div class="contenu">
 <div  class="rouge"><img src={img} alt='hhh'></img><p>Cinema</p></div>
  <div class="vert"><img src={img1} alt='photo'></img>Musique</div>
  <br/>
  <br/>
  <div class="bleu"><img src={img2} alt='photo2'></img>Theatre</div>
  <div class="blanc"><img src={img3} alt='photo3' ></img>Art Plastique</div>
{/* <div className="fouter">HELLO</div> */}
 </div>
 </div>
 </div>
</div>

           
    )
}
export default Header;
