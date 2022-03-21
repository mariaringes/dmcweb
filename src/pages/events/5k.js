import * as React from 'react';
import { Fragment } from 'react';
//Layout (header + footer)
import Layout from '../../components/Layout';
//Custom Components
import EventDetail from '../../components/EventDetail';

export default function E5KPage() {
  return (
    <Layout>
      <EventDetail
        img='https://danburymusiccentre.org/wp-content/uploads/2022/03/Flier-DMC-Virtual-5k-2022-1.jpeg'
        title='Annual 5K'
        subtitle='Race at your own pace!'
        date='April 23-30th ~ Registration opens March 14'
        time='Virtual'
        eventDescription={<Fragment>Due to the success of last year’s virtual event, we have decided to repeat the format. In 2021, we had close to 100 participants from across the country in 6 states & $500 in prizes. Participants select their own 5K (3.1 mile) course. This ensures everyone can participate where and whenever they can. <br></br><br></br>
          You can WALK, RUN, BIKE or DANCE to complete the event. Since we are virtual, we have added an option to dance for 30 minutes, a close approximation to running a 5K. The goal is to have FUN while supporting all Danbury Music Centre programs. Once you complete your ‘5K’, send us a picture or video from your ‘finish line’ and you will be entered into a raffle for great prizes. <br></br><br></br>
          Participants are invited to attend a live drawing for prizes and view a DMC 5K montage at our post-race zoom celebration. Details for the event will be sent to participants after their photos/videos are submitted. <br></br>     
          Questions? Contact fundraising@danburymusiccentre.org or (203)748-1716</Fragment>}>
      </EventDetail>
    </Layout>
  );
}