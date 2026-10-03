import styles from './Card.module.css';

export default function Card({ title, subTitle, content, imageURL, link, status, stack, slug }) {
  return (
    <article className={styles.card}>
      <div className={styles.imagePanel}>
        <div className={styles.browserBar} aria-hidden="true">
          <span>● ● ●</span><p>https://{slug}.project</p><i>↗</i>
        </div>
        <div className={styles.preview}>
          <img src={imageURL} alt={`${title} preview`} loading="lazy" decoding="async" />
          <span className={styles.scanline} aria-hidden="true" />
        </div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <p className={styles.category}>{subTitle}</p>
          <span className={styles.status}><i aria-hidden="true" /> {status}</span>
        </div>
        <h3>{title}</h3>
        <p className={styles.description}>{content}</p>
        <ul className={styles.stack} aria-label={`${title} technologies`}>
          {stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.linksbtn} aria-label={`View ${title} (opens in a new tab)`}>
          Launch project <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
