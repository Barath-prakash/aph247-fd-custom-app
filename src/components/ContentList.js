import React from 'react';
import { contentHeadingList } from '../utils/variables';
import ContentItem from './ContentItem';

const ContentList = ({ loading, error, order }) => {
  return !loading && !error && order?.id
    ? contentHeadingList.map((el, i) => (
        <ContentItem key={i} index={i} order={order} item={el} />
      ))
    : null;
};

export default ContentList;
