import { NavLink } from "react-router"

export default function Navigation() {

    return ( 
       
            <nav>
                <ul>
                    <li><NavLink to="/">Fag på WU hovedforløb</NavLink></li>
                    <li><NavLink to="/praktisk-web">Praktisk Web</NavLink></li>
                    <li><NavLink to="/bootcamp">Bootcamp</NavLink></li>
                    <li><NavLink to="/dynamiske-webloesninger">Dynamiske Webloesninger</NavLink></li>
                    <li><NavLink to="/frameworks-i">Frameworks I</NavLink></li>
                    <li><NavLink to="/frameworks-ii">Frameworks II</NavLink></li>
                    <li><NavLink to="/praktik">Praktik</NavLink></li>
                    <li><NavLink to="/frameworks-iii">Frameworks III</NavLink></li>
                    <li><NavLink to="/specialefag">Specialefag</NavLink></li>
                </ul>
            </nav>
    )
}