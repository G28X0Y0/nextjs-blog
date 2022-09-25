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
          <p>Hello! My name is Isaac Lopez. I'm a recent graduate of Tech Elevator, a Java development bootcamp. This website is WIP</p>
          <p>
            Feel free to reach out on {' '}
            <a href="https://www.linkedin.com/in/isaac-lopez-a67151172/">LinkedIn</a>
          </p>
        </section>
      </Layout>
  );
}