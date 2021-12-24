import Speaker from '../../components/speaker/Speaker';
import HeaderSecond from '../../components/header/headerSecond/HeaderSecond';
import Footer from '../../components/footer/Footer';
import './SpeakerPage.scss'
export default function SpeakerPage(){
    return(
        <div>
            <HeaderSecond/>
            <Speaker/>
            <Footer/>
        </div>
    )
}