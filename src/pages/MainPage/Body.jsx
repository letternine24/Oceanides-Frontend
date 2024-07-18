import '@styles/MainPage/Body.css'
import GetNavigatingSection from './Components/NavigatingSection';
import GetEmpoweringSection  from './Components/EmpoweringSection'
import GetTradingSection from './Components/TradingSection';
import GetDownloadSection from './Components/DownloadSection';
import GetInstantSection from './Components/InstantSection';
import GetSeizeSection from './Components/SeizeSection';
import GetEmbarkSection from './Components/EmbarkSection';

function Body() {
  return (
    <div id="corsa_body">
        <GetNavigatingSection />
        <GetEmpoweringSection />
        <GetTradingSection />
        <GetDownloadSection />
        <GetInstantSection />
        <GetSeizeSection />
        <GetEmbarkSection />
    </div>
  );
}

export default Body;
