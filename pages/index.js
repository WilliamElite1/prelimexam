import Head from 'next/head'; import Layout, { siteTitle } from '../components/layout'; import utilStyles from '../styles/utils.module.css'; export default function Home() { return ( <Layout home>
  <Head>
    <title>{siteTitle}</title>
  </Head>
  <section className={utilStyles.headingMd}>
    <b>INTJ - 1w9 - so/sx - 154 - ILI - RCOAI-VLEF - Melancholic-Choleric - ET(N)</b>
    <br></br>
    <p>Enthusiastic IT college university student with a passion for logical reasoning and problem-solving. Dedicated to applying analytical skills to tackle complex challenges within the field of information technology. Possesses a strong drive to continuously learn and adapt in the rapidly evolving tech landscape. </p>
    <p> (For business inquiries, contact me on{' '} <a href="https://www.facebook.com/WilliamElite1" target="_blank">Facebook, </a>
      <a href="https://www.instagram.com/william_elite1/?theme=dark" target="_blank">Instagram & </a>
      <a href="https://twitter.com/RT_Moriarty" target="_blank">Twitter</a>.)
    </p>
    <p> (This is a sample website - you’ll be building a site like this on{' '} <a href="https://nextjs.org/learn">our Next.js tutorial</a>.) </p>
    <section>
      <h2>Expectations for IT Elective 3</h2>
      <p> In IT Elective 3, I anticipate a focused exploration of advanced concepts and their practical applications. The course content should provide a comprehensive understanding of specialized areas within information technology, encouraging critical thinking and real-world problem-solving. </p>
      <p> Practical hands-on experience is paramount. Engaging projects and assignments that apply theoretical knowledge to practical scenarios are expected, preparing students for the challenges of the professional IT environment. </p>
      <p> Furthermore, exposure to cutting-edge technologies and industry-relevant tools is crucial. This elective should incorporate the latest advancements, fostering a forward-thinking mindset and equipping students with skills aligned with industry trends. </p>
    </section>
    <section>
      <h2>Essential Traits (Zero Talent)</h2>
      <ul>
        <p>Being on time</p>
        <p>Work Ethic</p>
        <p>Effort</p>
        <p>Body Language</p>
        <p>Energy</p>
        <p>Attitude</p>
        <p>Passion</p>
        <p>Being Coachable</p>
        <p>Doing Extra</p>
        <p>Being Prepared</p>
      </ul>
    </section>
  </section>
</Layout> ); }