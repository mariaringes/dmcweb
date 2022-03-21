import * as React from 'react';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';

//Custom Components
import ProgramDetail from '../../components/ProgramDetail';
import Layout from '../../components/Layout';

export default function DSOPage() {
  const staffMultiple = [
    {img: 'https://danburymusiccentre.org/wp-content/uploads/2019/08/Image-2.png', name: 'Ariel Rudiakov', position: 'Music Directory & Conductor'},
    {img: 'https://danburymusiccentre.org/wp-content/uploads/2020/10/LDeming-July-2014.jpg', name: 'Larry Deming', position: 'Concertmaster'},
    {img: 'https://danburymusiccentre.org/wp-content/uploads/2020/10/humphreville-300x216-1.jpg', name: 'James Humphreville', position: 'Music Director Emeritus'}
  ];
  return (
    <Layout>
      <ProgramDetail 
        title='Danbury Symphony Orchestra' 
        gendescription='The Danbury Symphony Orchestra performs a wide spectrum of works from symphonic literature. The DSO collaborates with the Danbury Concert Chorus in an annual performance of Messiah and a special concert in May. The DSO also provides music for the Danbury Music Centre’s production of the Nutcracker Ballet, this year in its 53rd year, is one of the only productions in the state of Connecticut with a live orchestra!'
        img='https://danburymusiccentre.org/wp-content/uploads/2021/03/46496682625_29aafc9379_k-2.jpg'
        rehearsaltime = 'Mondays, 7:30 – 10:00 pm'
        linkinfo = '/'
        joinustext = 'Highly experienced musicians should contact the Danbury Music Centre for audition information and openings. Please call with any questions, 203-748-1716 or email dmc@danburymusiccentre.org'
        memberlevel = 'Ensemble'
        memberlevelprice = '150'
        staff={staffMultiple}
      >
      </ProgramDetail>
    </Layout>
  );
}
