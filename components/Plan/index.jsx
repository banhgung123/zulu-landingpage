import styles from './Plan.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Plan(props) {
    return (
        <section className={styles.plan}>
            <div className="block">
                <span className="block_caption">Pricing</span>
                <h2 className="block_heading">
                    <span>Select the</span> <span>perfect plan</span>
                </h2>
            </div>
            <ul className={styles.plan_list}>
                <li className={styles.plan_item}>
                    <h3 className={styles.plan_name}>Basic</h3>
                    <h4 className={styles.plan_price}>
                        <sup className={styles.plan_symbol}>$</sup>
                        <span className={styles.plan_month}>9</span>
                        <span>/Month</span>
                    </h4>
                    <p className={`text ${styles.plan_desc}`}>Beautifully simple project planning</p>
                    <h3 className={styles.plan_feature}>Features</h3>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>7 HD720 videos per month</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>Up to 5 -minute videos</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>Access to 200k+ Stock videos</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>50+ commercial music tracks</span>
                    </div>
                    <a href="#" className={`button button__outline ${styles.plan_start}`}>Start now</a>
                </li>
                <li className={styles.plan_item}>
                    <div className={styles.plan_label}>Most popular</div>
                    <h3 className={styles.plan_name}>Premium</h3>
                    <h4 className={styles.plan_price}>
                        <sup className={styles.plan_symbol}>$</sup>
                        <span className={styles.plan_month}>29</span>
                        <span>/Month</span>
                    </h4>
                    <p className={`text ${styles.plan_desc}`}>Beautifully simple project planning</p>
                    <h3 className={styles.plan_feature}>Features</h3>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>18 HD720 videos per month</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>Up to 15 -minute videos</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>Access to 500k+ Stock videos</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>100+ commercial music tracks</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>No watermarks on HD videos</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>1 font upload</span>
                    </div>
                    <a href="#" className={`button button__outline ${styles.plan_start}`}>Start now</a>
                </li>
                <li className={styles.plan_item}>
                    <h3 className={styles.plan_name}>Business</h3>
                    <h4 className={styles.plan_price}>
                        <sup className={styles.plan_symbol}>$</sup>
                        <span className={styles.plan_month}>49</span>
                        <span>/Month</span>
                    </h4>
                    <p className={`text ${styles.plan_desc}`}>Beautifully simple project planning</p>
                    <h3 className={styles.plan_feature}>Features</h3>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>Unlimited HD videos per month</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>Up to 60 -minute videos</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>Access to 500k+ Stock videos</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>200+ commercial music tracks</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>No watermarks on HD videos</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>Reseller licence</span>
                    </div>
                    <div className={styles.plan_feature_item}>
                        <FontAwesomeIcon icon={faCheckCircle} className={styles.plan_feature_icon} />
                        <span className={styles.plan_feature_title}>10 font upload</span>
                    </div>
                    <a href="#" className={`button button__outline ${styles.plan_start}`}>Start now</a>
                </li>
            </ul>
        </section>
    );
}

export default Plan;