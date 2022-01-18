import CreateMySchedule from "../../components/createMySchedule/CreateMySchedule";
import Footer from "../../components/footer/Footer";
import HeaderHasAuthor from "../../components/headerHasAuthor/HeaderHasAuthor";
import ShowListScheduleMaker from "../../components/showListScheduleMaker/ShowListScheduleMaker";

export default function CreateScheduleMaker() {
    return (
        <div>
            <HeaderHasAuthor />
            <CreateMySchedule />
            <ShowListScheduleMaker/>
            <Footer />
        </div>
    )

}