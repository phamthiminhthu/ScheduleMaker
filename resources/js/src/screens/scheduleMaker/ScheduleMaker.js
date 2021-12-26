import ShowListScheduleMaker from "../../components/showListScheduleMaker/ShowListScheduleMaker";
import HeaderHasAuthor from '../../components/headerHasAuthor/HeaderHasAuthor';
import Footer from '../../components/footer/Footer';

export default function ScheduleMaker() {
    return (
        <div>
            <HeaderHasAuthor />
            <ShowListScheduleMaker />
            <Footer/>
        </div>
    )
}