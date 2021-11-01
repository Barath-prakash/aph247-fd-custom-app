import React from 'react';
import { render } from '@testing-library/react';
import ContentItem from '../ContentItem';
import { contentHeadingList, initialState } from '../../utils/variables';

test('renders with empty data', () => {
  render(
    <ContentItem
        index={0}
        order={initialState}
        item={{labelKey: '', labelValue: '', isHeader: false}} 
    />
  );
});

test('renders with empty data for first element', () => {
    render(
      <ContentItem
          index={0}
          order={initialState}
          item={{labelKey: '', labelValue: '', isHeader: true}} 
      />
    );
  });

test('renders with valid header data', () => {
    render(
      <ContentItem
          index={0}
          order={initialState}
          item={{
            labelKey: contentHeadingList[0]?.labelKey,
            labelValue: contentHeadingList[0]?.labelValue,
            isHeader: contentHeadingList[0]?.isHeader
        }} 
      />
    );
  });

  test('renders with valid non-header data', () => {
    render(
      <ContentItem
          index={1}
          order={initialState}
          item={{
            labelKey: contentHeadingList[1]?.labelKey,
            labelValue: contentHeadingList[1]?.labelValue,
            isHeader: contentHeadingList[1]?.isHeader
        }} 
      />
    );
  });

  test('renders with valid non-header data', () => {
    render(
      <ContentItem
          index={9}
          order={initialState}
          item={{
            labelKey: contentHeadingList[9]?.labelKey,
            labelValue: contentHeadingList[9]?.labelValue,
            isHeader: contentHeadingList[9]?.isHeader
        }} 
      />
    );
  });
