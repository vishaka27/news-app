import React from 'react';
import { connect } from 'react-redux';
const imgStyle = {
    height: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple',
    borderRadius: '5%'
};
const articlStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
};


let NewsItem = ({ article }) => (
    article ?
    <article style={articlStyle}>
        <div>
            <h1>{article.title}</h1>
            <img style={imgStyle} src={article.urlToImage} alt="" />
            <h4>{article.description}</h4>
            <a href={article.url} target="_blank" rel="noopener noreferrer">READ MORE</a>
        </div>
    </article> :
    null
);


const mapStateToProps = (state) => ({
    article: state.news
});

NewsItem = connect(mapStateToProps, null)(NewsItem);

export default NewsItem;
