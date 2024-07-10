import 'bootstrap/dist/css/bootstrap.min.css'
import './NavigatingSection.css'

function GetNavigatingSection(){
    return (
        <div id="section_1" className="BackgroundImg" >

            <div className="container">
            <main className="template-page content container">
                <div className="post-entry post-entry-type-page post-entry-15 headerText_space">
                    <div>

                        <h1 className="headerText">
                            NAVIGATING
                            <br></br>
                            OPPORTUNITIES
                            <br></br>
                            MASTERING MARKETS:
                        </h1>

                    </div>

                    <div>
                        <section>
                            <p className='paragraphText'>
                                <strong>Your Trusted Investment Partner</strong>
                            </p>
                        </section>

                        <div>
                            <a href="" className='demoText'>
                                <span>
                                    DEMO ACCOUNT
                                </span>
                            </a>
                            <a href="" className='tradingText'>
                                <span>
                                    START TRADING
                                </span>
                            </a>
                        </div>

                        <section>
                            <div>
                                <p className='paragraphText smallerText'>
                                    Risk Warning :
                                    <br></br>
                                    Trading involves risk. Please be aware of the risks involved and seek independent advice if necessary.
                                </p>
                            </div>
                        </section>
                    </div>

                </div>
            </main>
            </div>
            
        </div>
    )
}

export default GetNavigatingSection;