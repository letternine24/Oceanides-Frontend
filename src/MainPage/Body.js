import 'bootstrap/dist/css/bootstrap.min.css'
import './Body.css'
import GetNavigatingSection from './Components/NavigatingSection';
import GetEmpoweringSection  from './Components/EmpoweringSection'
import GetTradingSection from './Components/TradingSection';
import GetDownloadSection from './Components/DownloadSection';

function GenerateBody() {
  return (
    <div id="corsa_body">
        <GetNavigatingSection></GetNavigatingSection>
        <GetEmpoweringSection></GetEmpoweringSection>
        <GetTradingSection></GetTradingSection>
        <GetDownloadSection></GetDownloadSection>
    </div>
  );
}

export default GenerateBody;
