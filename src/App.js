import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastProvider } from 'react-toast-notifications'
import { AppProvider } from './context/AppState'

// component imports
import Navigation from './components/common/Navigation';
import Home from './components/pages/LandingPage/Home';
import RealEstate from './components/pages/RealEstate/RealEstate';
import Footer from './components/common/Footer';
import PricingPlan from './components/pages/PricingPlan/PricingPlan'
import Logistics from './components/pages/Logistics/Logistics'
import Contact from './components/pages/Contact/Contact'
import ThankYou from './components/pages/Contact/ThankYou'

// stylesheet imports
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <AppProvider>
      <ToastProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/real-estate' component={RealEstate} />
          <Route exact path='/pricing' component={PricingPlan} />
          <Route exact path='/logistics' component={Logistics} />
          <Route exact path='/contact-us' component={Contact} />
          <Route exact path='/thank-you' component={ThankYou} />
        </Switch>
        <Footer />
      </BrowserRouter>
      <a
        href="https://wa.me/2348144076079"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      </ToastProvider>
    </AppProvider>
  );
}

export default App;
