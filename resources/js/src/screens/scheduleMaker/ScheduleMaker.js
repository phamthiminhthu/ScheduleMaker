import ShowListScheduleMaker from "../../components/showListScheduleMaker/ShowListScheduleMaker";
import HeaderHasAuthor from '../../components/headerHasAuthor/HeaderHasAuthor';
import Footer from '../../components/footer/Footer';
import AddSubject from '../../components/addSubject/AddSubject';
import CreateMySchedule from "../../components/createMySchedule/CreateMySchedule";

export default function ScheduleMaker() {
    return (
        <div>
            <HeaderHasAuthor />
            <AddSubject/>
            {/* <ShowListScheduleMaker /> */}
            {/* <CreateMySchedule/> */}
            <Footer/>
        </div>
    )
}