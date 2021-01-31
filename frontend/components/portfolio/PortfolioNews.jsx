import React from 'react';
import { Section, SectionHeader } from '../parts/section';
import News from '../news/News';

const PortfolioNews = (props) => {

  return (
    <Section>
      <SectionHeader title="News"/>

      <News symbol='spy'/>
    </Section>
  );
};

export default PortfolioNews;
