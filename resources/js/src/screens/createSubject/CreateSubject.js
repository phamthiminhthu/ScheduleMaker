import AddSubjectByTeacher from "../../components/addSubjectByTeacher/AddSubjectByTeacher";
import HeaderHasAuthor from '../../components/headerHasAuthor/HeaderHasAuthor';
import Footer from '../../components/footer/Footer';
export default function CreateSubject() {
    return (
        <div className="create-subject">
            <HeaderHasAuthor />
            <AddSubjectByTeacher />
            <Footer />
        </div>
    )
}