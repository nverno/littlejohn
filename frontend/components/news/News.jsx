import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from '../loading/Loader';
import ArticleCell from './ArticleCell';
import styles from './news.module.scss';
import { fetchNews } from '../../actions/news_actions';

const mapStateToProps = (state, { symbol }) => ({
  articles: state.entities.news[symbol],
});

const mapDispatchToProps = (dispatch, { symbol }) => ({
  fetchNews: () => dispatch(fetchNews(symbol)),
});

const News = ({ symbol, count=2, articles, fetchNews }) => {
  useEffect(() => {
    if (!articles) fetchNews(symbol, count);
  }, []);

  if (!articles)
    return <Loader />;
  
  return (
    <>
      {articles.map((article, idx) => (
        <ArticleCell article={article} key={idx}/>
      ))}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
