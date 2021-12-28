import MyAssignmentsDemo from "../../components/scheduleDemo/myAssignmentsDemo/MyAssignmentsDemo";
import HeaderHasAuthor from '../../components/headerHasAuthor/HeaderHasAuthor';
import Footer from '../../components/footer/Footer';

export default function MySchedule(){
    return(
        <div>
            <HeaderHasAuthor/>
            <h3 className="title mb-4 mt-4 text-center">My Schedule</h3>
            <MyAssignmentsDemo/>
            <Footer/>
        </div>
    )
}