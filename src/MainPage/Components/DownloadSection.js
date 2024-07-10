import 'bootstrap/dist/css/bootstrap.min.css'
import './DownloadSection.css'

function GetDownloadSection(){
    return (
        <div id="section_4">

            <div className="container">
            <main className="template-page content container">
                <div className="post-entry post-entry-type-page post-entry-15">
                    <div className="entry-content-wrapper clearfix">

                    <div className="flex_column_table">
                            <div className="flex_column">
                                <div className="custom-alignment">
                                    
                                    <div>
                                        <h1 className="download-text bold">
                                            Download
                                            <br></br>
                                            Now
                                        </h1>
                                    </div>

                                    <div className="coming-text bold">
                                        <p>
                                            <b>
                                                Coming Soon: The app will be
                                                <br></br>
                                                available for download through the
                                                <br></br>
                                                Apple and Google Store. Stay tuned
                                                <br></br>
                                                for updates!
                                            </b>
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="flex-placeholder"></div>

                            <div className="flex_column">
                                <div className="custon-alignment-img">
                                    <div className="download-img"></div>
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

export default GetDownloadSection;