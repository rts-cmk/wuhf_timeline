import Footer from "../Components/Footer";

export default function SpecialFag() {

    return (
        <main>
             <section className='child'>
            
            <div className="headlinediv">
                <h1>Specialefag</h1>
                <h2>2 &times; 2 uger</h2>
            </div>
            <div className="topics three_cols">

                <section>

                    <article>
                        <h3>Serverside programmering</h3>
                        <ul>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                    </article>
                    <br />
                    <br />
                    <article>
                        <h3>Digital handel</h3>
                        <ul>
                            <li>WordPress</li>
                            <li>WooCommerce</li>
                        </ul>
                    </article>

                </section>

               <article>
                    <h3>Programmering og styring<br/> af fysiske enheder</h3>
                    <ul>
                        <li>Philips Hue</li>
                        <li>Smart Home applikation</li>
                    </ul>
                </article>

                <section>
                    <article>
                        <h3>Progressive Web App</h3>
                        <ul>
                            <li>Storage / Cache </li>
                            <li>Service Workers</li>
                            <li>Notifications</li>
                            <li>Locations</li>
                        </ul>
                    </article>

                </section>
            </div>

        </section>
        <Footer prevlink="/frameworks-iii" nextlink="#" />
        </main>
    )
}