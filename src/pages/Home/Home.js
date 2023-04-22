import './Home.scss';
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";
import Aside from "../../components/Aside/Aside";


function Home() {
    return (
        <>
            <Banner />
            <div className="main">
                <Hero />
                <Aside />
            </div>
        </>
    )
}

export default Home;