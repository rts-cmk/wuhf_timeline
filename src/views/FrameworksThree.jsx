import Footer from "../Components/Footer";

export default function FrameworksThree() {

    return (
        <main>
             <section className='child'>
            
            <div className="headlinediv">
                <h1>Frameworks III</h1>
                <h2>7-8 uger</h2>
            </div>
            <div className="topics three_cols">


                <article>
                    <h3>Fag</h3>
                    <ul>
                        <li>Programmering</li>
                        <li>Avanceret CSS</li>
                        <li>Avanceret frontend</li>
                        <li>Projektorganisering</li>
                    </ul>
                </article>


                <article>
                    <h3>Discipliner</h3>
                    <ul>
                        <li>AI-workflows</li>
                        <li>Containerization (Docker)</li>
                        <li>OAuth (log ind med Google, Instagram etc...)</li>
                        <li>React Developer Tools</li>
                        <li>Testing (Vitest)</li>
                        <li>Monitorering af fejl (Sentry)</li>
                        <li>Object Orienteret Programmering</li>
                    </ul>
                </article>
                <article>
                    <h3>Projekter</h3>
                    <ul>
                        <li>'Enterprise' applikation<br/>- en applikation hvor de enkelte dele af sitet er bygget som separate containere.</li>

                    </ul>
                </article>
            </div>

        </section>
        <Footer prevlink="/praktik" nextlink="/specialefag" />

        </main>
    )
}