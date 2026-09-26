import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import styles from './Socials.module.css';

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ratabeg/',
        icon: <FaLinkedinIn aria-hidden="true" />,
        className: styles.linkedin,
    },
    {
        name: 'GitHub',
        href: 'https://github.com/ratabeg',
        icon: <FaGithub aria-hidden="true" />,
        className: styles.github,
    },
];

function Socials() {
    return (
        <nav className={styles.socials} aria-label="Social profiles">
            <ul className={styles.socialContainer}>
                {socialLinks.map(({ name, href, icon, className }) => (
                    <li key={name}>
                        <a
                            href={href}
                            className={`${styles.socialLinkBtn} ${className}`}
                            aria-label={`${name} profile (opens in a new tab)`}
                            data-label={name}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Socials;
