import Link from 'next/link';
import styles from './page.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        <div className={styles.loginbox}>
          <LoginForm />
        </div>
        <div className={styles.signuptext}>
          회원이 아니신가요?{' '}
          <Link href="/signup">
            {' '}
            <span className={styles.signuplink}> 회원 가입하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
