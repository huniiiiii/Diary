import styles from './page.module.css';
import SignUpForm from '../../components/SignupForm/SignUpForm';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Link href="/">
          <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        </Link>
        <div className={styles.loginbox}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
