import styles from './Demo.module.css';
import YoutubeEmbed from './YoutubeEmbed';

const Demo = () => {
	return (
		<div id='demo' className={styles['container']}>
			<h1 className={styles['title']}>
                Watch a <span className={styles['dark']}>live</span> DEMO
            </h1>
			<YoutubeEmbed embedId='Lijxc6lu2zA'/>
		</div>
	)
};

export default Demo;