
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import ListInformation from './Components/InformationList'

function GenerateHeader() {
  return (
    <header id="corsa_header">
      <div id="header_main" className="container_wrap container_wrap_logo">
        <div className="container">
          <div className="inner-container">
            
            <div className="d-inline">
                <span className='logo avia-standard-logo'>
                  <a href="http://localhost:3000/">
                    <img src = "/images/corsa-logo.png" alt='corsa-logo'/>
                  </a>
                </span>

                <ListInformation></ListInformation>
            </div>


          </div>
        </div>
      </div>
    </header>
  );
}

export default GenerateHeader;
