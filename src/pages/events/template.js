import * as React from 'react';
import { Fragment } from 'react';
//Layout (header + footer)
import Layout from '../../components/Layout';
//Custom Components
import EventDetail from '../../components/EventDetail';

export default function NAMEPage() {
  return (
    <Layout>
      <EventDetail
        img=''
        title=''
        subtitle=''
        date=''
        time=''
        eventDescription={<Fragment></Fragment>}>
      </EventDetail>
    </Layout>
  );
}