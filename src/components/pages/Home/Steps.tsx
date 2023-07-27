import styles from '../../style'
import list from '../../../assets/list.svg'
import pay from '../../../assets/pay.svg'
import calendar from '../../../assets/calendar.svg'

const Steps = () => {
  return (
    <section id='how-it-works' className=''>
        <div className=''>
            <h3 className={`${styles.heading2} text-center mb-10`}>How it Works</h3>
        </div>
        <div className=''>
            <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
                <div className='flex flex-col m-10'>
                    <h2 className={`${styles.heading2} text-center`}>1</h2>
                    <img src={list} alt='Checklist' className='h-28' />
                    <p className={styles.paragraph}>Sign-up and verify identity.</p>
                </div>
                <div className='flex flex-col m-10'>
                    <h2 className={`${styles.heading2} text-center`}>2</h2>
                    <img src={pay} alt='Checklist' className='h-28' />
                    <p className={styles.paragraph}>Send Money.</p>
                </div>
                <div className='flex flex-col m-10'>
                    <h2 className={`${styles.heading2} text-center`}>3</h2>
                    <img src={calendar} alt='Checklist' className='h-28' />
                    <p className={styles.paragraph}>Check transfer status in real-time.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps