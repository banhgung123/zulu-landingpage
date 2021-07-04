import styles from './Work.module.scss';

function Work(props) {
    return (
        <section className={styles.work}>
            <div className="block">
                <span className="block_caption">Walk Through</span>
                <h2 className="block_heading">
                    <span>How does</span> <span>Zulu works?</span>
                </h2>
            </div>
            <div className={styles.work_list}>
                <div className={styles.work_item}>
                    <img src="images/img2.png" alt="" className={styles.work_image} />
                    <h3 className={styles.work_title}>Offer the best viewing experience.</h3>
                    <p className={`${styles.work_desc} text`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus voluptas aliquam illo non numquam maxime, vel esse laboriosam aut. Inventore ullam veniam ipsam, autem dolorum obcaecati praesentium. Veniam, reprehenderit voluptates.
                    </p>
                    <a href="" className={`button button__outline ${styles.work_more}`}>learn more</a>
                </div>
                <div className={styles.work_item}>
                    <img src="images/img3.png" alt="" className={styles.work_image} />
                    <h3 className={styles.work_title}>Offer the best viewing experience.</h3>
                    <p className={`${styles.work_desc} text`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus voluptas aliquam illo non numquam maxime, vel esse laboriosam aut. Inventore ullam veniam ipsam, autem dolorum obcaecati praesentium. Veniam, reprehenderit voluptates.
                    </p>
                    <a href="" className={`button button__outline ${styles.work_more}`}>learn more</a>
                </div>
                <div className={styles.work_item}>
                    <img src="images/img4.png" alt="" className={styles.work_image} />
                    <h3 className={styles.work_title}>Offer the best viewing experience.</h3>
                    <p className={`${styles.work_desc} text`}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus voluptas aliquam illo non numquam maxime, vel esse laboriosam aut. Inventore ullam veniam ipsam, autem dolorum obcaecati praesentium. Veniam, reprehenderit voluptates.
                    </p>
                    <a href="" className={`button button__outline ${styles.work_more}`}>learn more</a>
                </div>
            </div>
        </section>
    );
}

export default Work;