import { useState } from 'react';
import styles from './Container.module.scss';
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Work from "../../components/Work";
import Intro from "../../components/Intro";
import Plan from "../../components/Plan";
import Client from "../../components/Client";
import Footer from "../../components/Footer";


function Container(props) {
    const [toggle, setToggle] = useState(false);
    const toggleMenu = (value) => setToggle(value);
    const closeToggle = (e) => {
        e.preventDefault();
        console.log(e.target.className.baseVal)
        if (e.target.className !== 'Container_container__3cQrW' &&
            !e.target.className.baseVal?.split(' ').includes('fa-bars')) setToggle(false);
    }

    return (
        <div className={styles.container} onClick={closeToggle}>
            <Header toggle={toggle} toggleMenu={toggleMenu} />
            <Banner />
            <Work />
            <Intro />
            <Plan />
            <Client />
            <Footer />
        </div>
    );
}

export default Container;