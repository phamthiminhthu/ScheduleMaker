import HeaderMain from '../../components/header/headerMain/HeaderMain';
import Footer from '../../components/footer/Footer';
import Reviews from '../../components/reviews/Reviews';
import News from '../../components/news/News';
import Speaker from '../../components/speaker/Speaker';
import ScheduleDemo from '../../components/scheduleDemo/ScheduleDemo'
import Introduce from '../../components/introduce/Introduce'
import HeaderMobile from '../../components/header/headerMobile/HeaderMobile';
import './Home.scss';

export default function Home() {
    return (
        <div>
            <div className="main-header-one">
                <HeaderMain />
            </div>

            <HeaderMobile className="main-header-two" style={{ 'display': 'none' }} />
            <Introduce />
            <Speaker />
            <ScheduleDemo />
            <Reviews />
            <News />
            <Footer />
        </div>


    )
}