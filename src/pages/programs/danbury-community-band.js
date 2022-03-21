import * as React from 'react';
import { Fragment } from 'react';
import { Container } from 'react-bootstrap';

//Custom Components
import ProgramDetail from '../../components/ProgramDetail';
import Layout from '../../components/Layout';

export default function DCBPage() {
  const staffMultiple = [{img: 'https://danburymusiccentre.org/wp-content/uploads/2020/10/AlbertMontecalvo-768x1024-1.jpg', name: 'Albert Montecalvo', position: 'Music Directory & Conductor'}];
  return (
    <Layout>
      <ProgramDetail 
        title='Danbury Community Band' 
        gendescription='The Danbury Community Band performs a wide variety of music from the band repertoire. Newly formed in October or 2021 this program has been widely requested and is an exciting addition to the DMC programs. Join Albert Montecalvo for what is sure to be a fun and rewarding musical experience!'
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiXICm6swaumq1TksHl45PbFkYMfy_JSqdBA&usqp=CAU'
        rehearsaltime = 'Wednesday 7:30 – 9:00 pm'
        rehearsallocation = 'The Danbury Music Centre'
        rehearsaldate = {<Fragment> October 6, 13, 20, 27 -- November 3, 10, 17 -- December 1, 8, 15</Fragment>}
        concerttime = '2:00 pm Sound Check, 4:00 pm Concert'
        concertdate = 'December 19'
        concertlocation = 'First Congregational Church, 164 Deer Hill Avenue, Danbury, CT 06810'
        linkinfo = '/'
        joinustext = 'Musicians who play standard band instruments should contact the Danbury Music Centre for audition information and openings. Please call with any questions, 203-748-1716 or email dmc@danburymusiccentre.org'
        memberlevel = 'Ensemble'
        memberlevelprice = '150'
        staff={staffMultiple}
      >
      </ProgramDetail>
    </Layout>
  );
}
