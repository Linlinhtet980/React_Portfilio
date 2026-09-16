import styles from './Contacts.module.css';
import TextReveal from '../../Animations/TextReveal';
import FadeUp from '../../Animations/FadeUp';

export default function Contacts() {
  return (
    <section id="contacts" className={styles.section} data-kid="1" data-name="contact section container">
        <div className={styles.container} data-kid="1-1" data-name="contact section grid layout">
            {/* Left: Typography & Info */}
            <div className={styles.leftPanel} data-kid="1-1-1" data-name="information and contact details panel">
                <div data-kid="1-1-1-1" data-name="introductory text container">
                    <h2 className={styles.heroHeadline} data-kid="1-1-1-1-1" data-name="hero headline">
                        <TextReveal>Let's</TextReveal>
                        <br data-kid="1-1-1-1-1-1" data-name="line break"/>
                        <TextReveal delay={0.1}>Talk.</TextReveal>
                    </h2>
                    <FadeUp delay={0.2}>
                        <p className={styles.introDesc} data-kid="1-1-1-1-2" data-name="introductory description paragraph">
                            Have a project in mind or just want to say hi? I'm currently available for freelance opportunities.
                        </p>
                    </FadeUp>
                </div>
                <FadeUp delay={0.3} className={styles.linksContainer} data-kid="1-1-1-2" data-name="contact links container">
                    <h3 className={styles.sectionHeader} data-kid="1-1-1-2-1" data-name="email section header">
                        Email
                    </h3>
                    <a className={styles.emailLink} data-kid="1-1-1-2-2" data-name="email address link" href="mailto:linpop890@gmail.com">
                        linpop890@gmail.com
                    </a>
                    <h3 className={`${styles.sectionHeader} ${styles.socialsHeader}`} data-kid="1-1-1-2-3" data-name="socials section header">
                        Socials
                    </h3>
                    <div className={styles.socialLinksContainer} data-kid="1-1-1-2-4" data-name="social links container">
                        <a className={styles.socialLink} data-kid="1-1-1-2-4-1" data-name="facebook link" href="https://www.facebook.com/share/1BvarSo2ys/" target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                        <a className={styles.socialLink} data-kid="1-1-1-2-4-2" data-name="telegram link" href="https://t.me/linthuren" target="_blank" rel="noopener noreferrer">
                            Telegram
                        </a>
                        <a className={styles.socialLink} data-kid="1-1-1-2-4-3" data-name="linkedin link" href="https://www.linkedin.com/in/lin-thu-rein-htet-35946b356" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a className={styles.socialLink} data-kid="1-1-1-2-4-4" data-name="github link" href="https://github.com/Linlinhtet980" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </FadeUp>
            </div>
            {/* Right: Stark Form */}
            <div className={styles.rightPanel} data-kid="1-1-2" data-name="contact form panel">
                <form className={styles.form} data-kid="1-1-2-1" data-name="contact form">
                    <FadeUp delay={0.1}>
                        <div className={styles.fieldContainer} data-kid="1-1-2-1-1" data-name="name field container">
                            <label className={styles.fieldLabel} data-kid="1-1-2-1-1-1" data-name="name field label" htmlFor="name">
                                01. What's your name?
                            </label>
                            <input className={styles.inputField} data-kid="1-1-2-1-1-2" data-name="name input field" id="name" placeholder="John Doe" type="text"/>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <div className={styles.fieldContainer} data-kid="1-1-2-1-2" data-name="email field container">
                            <label className={styles.fieldLabel} data-kid="1-1-2-1-2-1" data-name="email field label" htmlFor="email">
                                02. What's your email?
                            </label>
                            <input className={styles.inputField} data-kid="1-1-2-1-2-2" data-name="email input field" id="email" placeholder="john@doe.com" type="email"/>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.3}>
                        <div className={styles.fieldContainer} data-kid="1-1-2-1-3" data-name="message field container">
                            <label className={styles.fieldLabel} data-kid="1-1-2-1-3-1" data-name="message field label" htmlFor="message">
                                03. Tell me about your project
                            </label>
                            <textarea className={`${styles.inputField} ${styles.textArea}`} data-kid="1-1-2-1-3-2" data-name="message text area" id="message" placeholder="Hello..." rows="3"></textarea>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.4} className={styles.submitBtnContainer} data-kid="1-1-2-1-4" data-name="submit button container">
                        <button className={`btn btn-primary ${styles.submitBtn}`} data-kid="1-1-2-1-4-1" data-name="send message button" type="button">
                            Send Message
                        </button>
                    </FadeUp>
                </form>
            </div>
        </div>
    </section>
  );
}
