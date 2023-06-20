import styles from "../../style";
import Clients from "./Clients";
import Feedback from "./Feedback";
import Hero from "./Hero";
import Stats from "./Stats";
import Steps from "./Steps";

const Home = () => {
	return (
		<div>
			<div className={styles.flexStart}>
				<div className={styles.boxWidth}>
					<Hero />
				</div>
			</div>
			{/* Rest of Landing Page */}
			<div className={`${styles.paddingX} ${styles.flexStart}`}>
        		<div className={`${styles.boxWidth}`}>
					<Stats />
					<Steps />
					<Clients />
					<Feedback />
				</div>
			</div>
		</div>
	);
};

export default Home;
