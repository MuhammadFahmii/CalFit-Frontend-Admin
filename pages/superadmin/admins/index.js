import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../../styles/Home.module.css';

export default function AdminsSuperAdmin() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calfit Admins SuperAdmin</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>Admins</h1>
        <Link href='/superadmin/dashboard' passHref>
          <div className={styles.newsdetail}>SuperAdmin Dashboard</div>
        </Link>
        <Link href='/superadmin/classes' passHref>
          <div className={styles.newsdetail}>SuperAdmin Classes Access</div>
        </Link>
        <Link href='/superadmin/newsletters' passHref>
          <div className={styles.newsdetail}>SuperAdmin Newsletters Access</div>
        </Link>
        <Link href='/superadmin/videos' passHref>
          <div className={styles.newsdetail}>SuperAdmin Videos Access</div>
        </Link>
        <Link href='/superadmin/clubs' passHref>
          <div className={styles.newsdetail}>SuperAdmin Clubs Access</div>
        </Link>
        <Link href='/superadmin/profile' passHref>
          <div className={styles.newsdetail}>SuperAdmin Profile Settings</div>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
