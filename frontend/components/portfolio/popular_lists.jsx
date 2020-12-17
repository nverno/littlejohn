import React from 'react';
import { Section, SectionHeader } from '../parts/section';
import { ShowMoreButton } from '../parts/buttons';

const PopularLists = ({ buyingPower, ...props }) => {
  const [show, setShow] = React.useState(false);

  return (
    <Section>
      <SectionHeader title="Popular Lists">
        <ShowMoreButton toggle={show} setToggle={setShow} />
      </SectionHeader>
    </Section>
  );
};

export default PopularLists;
