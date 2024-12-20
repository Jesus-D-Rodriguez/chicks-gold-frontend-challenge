import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
    return (<div className="home">
        <Navbar/>
        <MainContent/>
        <Footer/>
    </div>);
}

export default Home;