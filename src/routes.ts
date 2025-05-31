import IntroPage from './components/pages/IntroPage.vue';
import AboutPage from './components/pages/AboutPage.vue';
import PortfolioPage from './components/pages/PortfolioPage.vue';
import MastersThesis from './components/projects/masters-thesis/MastersThesis.vue';
import StopMakingExcuses from './components/projects/stop-making-excuses/StopMakingExcuses.vue';
import SipSave from './components/projects/sip-save/SipSave.vue';
import PolicingTrackablePass from './components/projects/policing-trackable-pass/PolicingTrackablePass.vue';

const routes = [
    { path: '/', component: IntroPage },
    { path: '/about', component: AboutPage },
    { path: '/portfolio/', component: PortfolioPage },
    { path: '/portfolio/:projectsType', component: PortfolioPage },
    { path: '/portfolio/masters-thesis', component: MastersThesis },
    { path: '/portfolio/policing-trackable-pass', component: PolicingTrackablePass },
    { path: '/portfolio/stop-making-excuses', component: StopMakingExcuses },
    { path: '/portfolio/sip-save', component: SipSave },
];

export default routes;
