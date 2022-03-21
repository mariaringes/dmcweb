import * as React from 'react';
import { Fragment } from 'react';
//Layout (header + footer)
import Layout from '../../components/Layout';
//Custom Components
import EventDetail from '../../components/EventDetail';

export default function GalaPage() {
  return (
    <Layout>
      <EventDetail
        img='https://danburymusiccentre.org/wp-content/uploads/2021/09/A736CB01-1D09-084A-FD2EBD2F0AB7D0E4.jpeg'
        title='DMC Gala'
        subtitle='Postponed Until 2023'
        date='March 19, 2023'
        time='TBD'
        eventDescription={<Fragment>Save the date and join us at the Candlewood Inn! Tickets will go on sale early in 2023.</Fragment>}>
      </EventDetail>
    </Layout>
  );
}