import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    return (
        <>
            <section className={styles.started}>
                <img src="./images/img6.png" alt="img6.png" className={styles.started_comment}/>
                <img src="./images/img7.png" alt="img7.png" className={styles.started_smile}/>
                <div className="block">
                    <span className={`block_caption ${styles.started_caption}`}>Zulu Studio</span>
                    <h2 className={`block_heading ${styles.started_heading}`}>
                        <span>Get started with</span> <span>Zulu today</span>
                    </h2>
                </div>
                <p className={`text ${styles.started_desc}`}>
                    Let's work together to create fantastic product
                </p>
                <a href="#" className="button button__primary">Get Started</a>
            </section>
            <footer className={styles.footer}>
                <div className={styles.footer_column}>
                    <a href="index.html" className="logo">
                        <img src="images/logo.png" alt="" className={styles.header_logo_image} />
                    </a>
                    <p className={`text text__dark ${styles.footer_desc}`}>
                        Let's work together to create fantastic product
                    </p>
                    <div className={styles.social}>
                        <a href="#" className={`${styles.social_link} bg_google`}>
                            <FontAwesomeIcon icon={faGoogle}/>
                        </a>
                        <a href="#" className={`${styles.social_link} bg_twitter`}>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                        <a href="#" className={`${styles.social_link} bg_instagram`}>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                </div>
                <div className={styles.footer_column}>
                    <h3 className={styles.footer_heading}>Product</h3>
                    <ul className={styles.footer_link}>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Landingpage</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Features</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Doocumentation</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Referral Program</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Pricing</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <h3 className={styles.footer_heading}>Services</h3>
                    <ul className={styles.footer_link}>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Doocumentation</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Design</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Themes</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Illutrations</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>UI Kit</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer_column}>
                    <h3 className={styles.footer_heading}>Company</h3>
                    <ul className={styles.footer_link}>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>About</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Terms</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Private Policy</a>
                        </li>
                        <li className={styles.footer_link_item}>
                            <a href="#" className={styles.footer_link}>Careers</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;