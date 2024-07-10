import 'bootstrap/dist/css/bootstrap.min.css'
import './TradingSection.css'

function GetTradingSection(){
    return (
        <div id="section_3" className="BackgroundImg-3" >

            <div className="container">
            <main className="template-page content container">
                <div className="post-entry post-entry-type-page post-entry-15">
                    <div className="entry-content-wrapper clearfix">

                        <div className="flex_column_table">
                            <div className="flex_column">
                                <div className="custom-alignment">
                                    <span className="border-line"></span>

                                    <div>
                                        <h1 className="trading-text">
                                            Trading 
                                            <br></br>
                                            Anywhere,
                                            <br></br>
                                            at Any Time
                                        </h1>
                                    </div>

                                    <div className="paragraph-text">
                                        <p>
                                            <strong>
                                                Trade Global Stocks, Forex, 
                                                <br></br>
                                                Metals, Crypto CFDs and More
                                                <br></br>
                                                with our world recognized
                                                <br></br>
                                                cTrader App.
                                            </strong>
                                        </p>
                                    </div>      

                                    <div className="container">
                                        <div className="trade-info-img"></div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="flex-placeholder"></div>

                            <div className="flex_column">
                                <div className="custom-alignment">
                                    <div className="trade-img"></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </main>
            </div>
            
        </div>
    )
}

export default GetTradingSection;