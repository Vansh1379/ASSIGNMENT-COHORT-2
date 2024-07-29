import './App.css'
import { Card } from '../components/Assignment-1/Card'
import { BackgroundRender } from '../components/Assignment-2/BackgroundRender'
import { ParaGenerator } from '../components/Assignment-4/ParaGenerator'
import { GithubInfoCard } from '../components/Assignment-5/GithubInfoCard';
import { OtpGenerator } from '../components/Assignment-6/OtpGenerator';

function App() {
  return (
    <div>
      <GithubInfoCard />
      <OtpGenerator />
    </div>
  );
}

export default App;
