import ListSubject from '../../components/listSubject/ListSubject';
import HeaderHasAuthor from '../../components/headerHasAuthor/HeaderHasAuthor';
import Footer from '../../components/footer/Footer';

export default function SubjectList(){
    return(
        <div>
            <HeaderHasAuthor/>
            <ListSubject/>
            <Footer/>
        </div>
    )
}