import styles from './page.module.css';
import SignUpForm from '../../components/SignupForm/SignUpForm';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        <div className={styles.loginbox}>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
