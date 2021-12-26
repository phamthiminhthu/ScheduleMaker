import Profile from '../../components/profile/Profile';
import HeaderHasAuthor from '../../components/headerHasAuthor/HeaderHasAuthor';
import Footer from '../../components/footer/Footer';

export default function Account(){
    return(
        <div>
            <HeaderHasAuthor/>
            <h3 className="title text-center mt-4 mb-4">Profile</h3>
            <Profile/>
            <Footer/>

        </div>
    )
}