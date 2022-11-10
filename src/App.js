
import './App.css';
import Card from './components/Card/Card';
import CardDescription from './components/CardDescription/CardDescription';
import CardDetails from './components/CardDetails/CardDetails';
import CardUser from './components/CardUser/CardUser';
import CardImage from './components/CardImage/CardImage';
import image from './assets/images/image-equilibrium.jpg';
import etheriumIcon from './assets/icons/icon-ethereum.svg';
import avatar from './assets/images/image-avatar.png';

function App() {
  return (
    <div className="App">
      <Card>
        <CardImage src={image}/>
        <CardDescription title='Equilibrium #3429' description='Our Equilibrium collection promotes balance and calm.'/>
        <CardDetails icon={etheriumIcon} price='0.041' currency='ETH' days='3'/>
        <CardUser avatar={avatar} name='Jules Wyvern'/>
      </Card>
    </div>
  );
}

export default App;
