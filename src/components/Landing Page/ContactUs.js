import styles from './ContactUs.module.css';
import Input from '../Input';
import Button from '../Button';

const ContactUs = () => {
	return (
        <div id='contact-us' className={styles['container']}>
            <img className={styles['background']} src='/images/background3.png' alt='background'></img>
			<h1 className={styles['title']}>
                Let's <span className={styles['dark']}>Connect</span> !
            </h1>
            <div className={styles['contact-container']}>
                <form className={styles['contact-form']}>
                    <h2 className={styles['form-heading']}>Send us a <span className={styles['dark']}>Message</span>!</h2>
                    <Input
                        className={styles['input']}
                        type='text' 
                        placeholder='Your Name'
                    />
                    <Input 
                        className={styles['input']}
                        type='text' 
                        placeholder='Contact Information'
                    />
                    <textarea className={styles['message']} placeholder='Your Message' />
                    <div className={styles['btn-container']}>
                        <Button className={styles['btn']} type='submit'>Send</Button>
                    </div>
                </form>
                <div className={styles['contact-info']}>
                    <div>
                        <h2>Email</h2>
                        <p>bhagwanbharose@gmail.com</p>
                    </div>
                    <div>
                        <h2>Phone Number</h2>
                        <p>+91-1234567890</p>
                    </div>
                    <div>
                        <h2>Location</h2>
                        <p>ABC Street, XYZ, New Delhi</p>
                    </div>
                </div>

            </div>
		</div>
	)
};

export default ContactUs;