import React, { useContext } from 'react';
import './styles/scss/index.scss';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE } from './http/routes';
import { Context } from './Context';
import { Home } from './view/pages/Home/Home';
import { EmailConfirmation } from './view/pages/EmailConfirmation';
import { WrapperPages } from './view/components/templates/WrapperPages';
import { Header } from './view/components/organisms/Header';
import { Footer } from './view/components/organisms/Footer';
import { ConvocatoryDetails } from './view/pages/Convocations/ConvocatoryDetails';
import { ConvocatoryList } from './view/pages/Convocations/ConvocatoryList';
import { ConvocatoryRegister } from './view/pages/Convocations/ConvocatoryRegister';
import { ConvocatoryVolunteers } from './view/pages/Convocations/ConvocatoryVolunteers';
import { FrequentlyAskedQuestions } from './view/pages/FrequentlyAskedQuestions';
import { Esal } from './view/pages/Esal';
import { CookiesPolicy } from '../application/pages/CookiesPolicy';
import { LegalAdvice } from '../application/pages/LegalAdvice';
import { PrivacyPolicy } from '../application/pages/PrivacyPolicy';
import { LoginAndRegister } from '../application/pages/LoginAndRegister';
import { Contact } from '../application/pages/Contact/Contact';
import { VolunteerData } from '../application/pages/Profiles/VolunteerData/VolunteerData';

const App: React.FC = () => {
  const { isAuth } = useContext(Context);

  return (
    <Router>
      <div className="App">
        <WrapperPages>
          <Header />
          <Routes>
            <Route path={ROUTE.proposals.list} element={<ConvocatoryList />} />
            <Route path={ROUTE.proposals.details} element={<ConvocatoryDetails />} />
            <Route path={ROUTE.proposals.register} element={<ConvocatoryRegister />} />
            <Route
              path={ROUTE.proposals.volunteers(':id')}
              element={<ConvocatoryVolunteers />}
            />
            <Route
              path={ROUTE.home}
              element={!isAuth ? <Navigate to={ROUTE.loginRegister} /> : <Home />}
            />
            <Route path={ROUTE.loginRegister} element={<LoginAndRegister />} />
            <Route path={ROUTE.faq} element={<FrequentlyAskedQuestions />} />
            <Route path={ROUTE.organizations.register} element={<Esal />} />
            <Route path={ROUTE.cookiesPolicy} element={<CookiesPolicy />} />
            <Route path={ROUTE.legalAdvice} element={<LegalAdvice />} />
            <Route path={ROUTE.email.confirmation} element={<EmailConfirmation />} />
            <Route path={ROUTE.volunteers.profile} element={<VolunteerData />} />
            <Route path={ROUTE.privacyPolicy} element={<PrivacyPolicy />} />
            <Route path={ROUTE.contact} element={<Contact />} />
          </Routes>
          <Footer />
        </WrapperPages>
      </div>
    </Router>
  );
};

export default App;
