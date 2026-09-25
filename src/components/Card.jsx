import styles from './Card.module.css';

export default function Card({ title, subTitle, content, imageURL, link }) {
  return (
    <article className={styles.card}>
      <div className={styles.imagePanel}>
        <img src={imageURL} alt={`${title} preview`} loading="lazy" decoding="async" />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.category}>{subTitle}</p>
        <h3>{title}</h3>
        <p className={styles.description}>{content}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linksbtn} aria-label={`View ${title} (opens in a new tab)`}>
          View project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
