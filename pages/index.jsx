import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import ProfileInfo from '../components/HomeComponents/ProfileInfo/ProfileInfo';
import Languages from '../components/Common/Intro/Languages';

const home = () => {
    return (
        <div className="Home-Page -z-10">
            <Banner />
            <Languages />
            <MyExpertise />
            <ProfileInfo />
            <Recommendations />
            <ClientReviews />
            <Footer />
        </div>
    )
}

export default home