import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/MainPage/Body.css'
import GetNavigatingSection from './Components/NavigatingSection';
import GetEmpoweringSection  from './Components/EmpoweringSection'
import GetTradingSection from './Components/TradingSection';
import GetDownloadSection from './Components/DownloadSection';

function GenerateBody() {
  return (
    <div id="corsa_body">
        <GetNavigatingSection />
        <GetEmpoweringSection />
        <GetTradingSection />
        <GetDownloadSection/>
    </div>
  );
}

export default GenerateBody;
