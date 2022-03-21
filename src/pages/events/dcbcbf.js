import * as React from 'react';
import { Fragment } from 'react';
//Layout (header + footer)
import Layout from '../../components/Layout';
//Custom Components
import EventDetail from '../../components/EventDetail';

export default function DCBCBFPage() {
  return (
    <Layout>
      <EventDetail
        img='https://danburymusiccentre.org/wp-content/uploads/2021/09/shutterstock_498575296-scaled.jpg'
        title='Danbury Community Band: Concert Band Favorites'
        date='May 15'
        time='4:00 - 5:30 P.M.'
        location={<Fragment>First Congregational Church of Danbury <br></br>164 Deer Hill Ave, Danbury, CT 06810</Fragment>}
        >
      </EventDetail>
    </Layout>
  );
}