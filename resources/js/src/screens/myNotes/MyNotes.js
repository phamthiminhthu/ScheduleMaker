import CalendarNotes from '../../components/CalendarNotes/CalendarNotes';
import HeaderHasAuthor from '../../components/headerHasAuthor/HeaderHasAuthor';
import Footer from '../../components/footer/Footer';

export default function MyNotes() {
    return (
        <>
            <HeaderHasAuthor />
            <div className="mt-3">

                <CalendarNotes />

            </div>
            <Footer />
        </>


    )
}