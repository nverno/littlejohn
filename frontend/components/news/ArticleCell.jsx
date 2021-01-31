import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { timeAgo } from '../../selectors/util';
import { getSummary } from '../../selectors/news';
import styles from './news.module.scss';
import fonts from '../../styles/font.module.scss';

/**
 * <source> <timeAgo>           <domore>
 * <Title>             <image>
 * <blurb>
 */
const ArticleCell = ({ article }) => {

  return (
    <div className={styles.container}>
      <a href={article.url} className={styles.link}>
        <div className={styles.firstRow}>
          <div className={styles.sourceTime}>
            <div className={fonts.type12}>{article.source}</div>
            <div className={fonts.type7}>{timeAgo(article.datetime)}</div>
          </div>

          <div className={styles.doMore}>
            <BiDotsHorizontalRounded size={24}/>
          </div>
        </div>
        
        <div className={styles.content}>
          <div className={styles.leftCol}>
            <div className={fonts.type12}>
              {article.headline}
            </div>

            <div className={styles.summary}>
              {getSummary(article)}
            </div>
            <div/>
          </div>

          <div className={styles.rightCol}>
            <img className={styles.image} src={article.image}/>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ArticleCell;
