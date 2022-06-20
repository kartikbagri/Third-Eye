import styles from './AboutUs.module.css';

const AboutUs = () => {
    return (
			<div id='about-us' className={styles['section-container']}>
				<div className={styles['background-container']}>
					<img className={styles['background']} src='/images/background2.png' alt='background'></img>
				</div>
				<div className={styles['container']}>
					<h1 className={styles['title']}>What is</h1>
					<h1 className={`${styles['title']} ${styles['dark']}`}>Third Eye</h1>
					<p className={styles['text']}>
					Third eye is a cutting-edge security protocol that uses deep learning and artificial intelligence to track motor vehicles via a modern CCTV network.

We don't simply watch their movements; we also serve as a GPS for the massive network of traffic that passes through our city every day, allowing concerned authorities to keep an eye on these cars.
					</p>
				</div>
			</div>
    );
};

export default AboutUs;