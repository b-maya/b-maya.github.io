import IntroPage from './components/pages/IntroPage.vue';
import AboutPage from './components/pages/AboutPage.vue';
import PortfolioPage from './components/pages/PortfolioPage.vue';
import TrialPage from './components/pages/TrialPage.vue';
import MastersThesis from './components/projects/masters-thesis/MastersThesis.vue';
import PolicingTrackablePass from './components/projects/policing-trackable-pass/PolicingTrackablePass.vue';

const routes = [
    { path: '/', component: IntroPage },
    { path: '/about', component: AboutPage },
    { path: '/portfolio', component: PortfolioPage },
    { path: '/portfolio/masters-thesis', component: MastersThesis },
    { path: '/portfolio/policing-trackable-pass', component: PolicingTrackablePass },
    { path: '/trial', component: TrialPage },
];

export default routes;
