import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>No Talent Required</title>
      </Head>
      <section className={utilStyles.headingMd} style={{ textAlign: 'center', fontSize: '2rem' }}>
        <p> (This is a sample website - you’ll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)</p>
        <section>
          <h2 style={{ textAlign: 'left', fontSize: '2.5rem' }}>10 Things That Require Zero Talent</h2>
          <ul style={{ textAlign: 'left', fontSize: '1.5rem' }}>
            <li>Being on time</li>
            <li>Work Ethic</li>
            <li>Effort</li>
            <li>Body Language</li>
            <li>Energy</li>
            <li>Attitude</li>
            <li>Passion</li>
            <li>Being Coachable</li>
            <li>Doing Extra</li>
            <li>Being Prepared</li>
          </ul>
        </section>
      </section>
    </Layout>
  );
}
