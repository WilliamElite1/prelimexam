import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <b>INTJ - 1w9 - so/sx - 154 - ILI - RCOAI-VLEF - Melancholic-Choleric - ET(N)</b>
                <br></br>
        <p>Enthusiastic IT college university student with a passion for logical reasoning and problem-solving. 
        Dedicated to applying analytical skills to tackle complex challenges within the field of information technology. 
        Possesses a strong drive to continuously learn and adapt in the rapidly evolving tech landscape.
        </p>

        <p>
          (For business inquiries, contact me on{' '}
          <a href="https://www.facebook.com/WilliamElite1" target="_blank">Facebook, </a>
          <a href="https://www.instagram.com/william_elite1/?theme=dark" target="_blank">Instagram & </a>
          <a href="https://twitter.com/RT_Moriarty" target="_blank">Twitter</a>.)
        </p>


        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
