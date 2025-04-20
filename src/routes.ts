import IntroPage from './components/pages/IntroPage.vue';
import AboutPage from './components/pages/AboutPage.vue';
import PortfolioPage from './components/pages/PortfolioPage.vue';

const routes = [
    { path: '/', component: IntroPage },
    { path: '/about', component: AboutPage },
    { path: '/portfolio', component: PortfolioPage },
];

export default routes;
