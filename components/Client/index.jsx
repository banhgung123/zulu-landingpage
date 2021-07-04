import styles from './Client.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function Client(props) {
    return (
        <section className={styles.client}>
            <div className="block">
                <span className="block_caption">What people say</span>
                <h2 className="block_heading">
                    <span>Our honorable</span> <span>clients</span>
                </h2>
            </div>
            <div className={styles.client_list}>
                <div className={styles.client_item}>
                    <img
                        src="https://source.unsplash.com/random"
                        alt=""
                        className={styles.client_image}
                    />
                    <h3 className={styles.client_name}>Edwin Reyes</h3>
                    <span className={styles.client_position}></span>
                    <div className={styles.client_content}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea deserunt ad atque repellendus nostrum sapiente consequuntur nam doloribus, assumenda dolore! Veritatis quis amet nesciunt labore fuga id eos illo exercitationem.
                    </div>
                    <div className={styles.client_rate}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                </div>
                <div className={styles.client_item}>
                    <img
                        src="https://source.unsplash.com/random"
                        alt=""
                        className={styles.client_image}
                    />
                    <h3 className={styles.client_name}>Edwin Reyes</h3>
                    <span className={styles.client_position}></span>
                    <div className={styles.client_content}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea deserunt ad atque repellendus nostrum sapiente consequuntur nam doloribus, assumenda dolore! Veritatis quis amet nesciunt labore fuga id eos illo exercitationem.
                    </div>
                    <div className={styles.client_rate}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                </div>
                <div className={styles.client_item}>
                    <img
                        src="https://source.unsplash.com/random"
                        alt=""
                        className={styles.client_image}
                    />
                    <h3 className={styles.client_name}>Edwin Reyes</h3>
                    <span className={styles.client_position}></span>
                    <div className={styles.client_content}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea deserunt ad atque repellendus nostrum sapiente consequuntur nam doloribus, assumenda dolore! Veritatis quis amet nesciunt labore fuga id eos illo exercitationem.
                    </div>
                    <div className={styles.client_rate}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Client;