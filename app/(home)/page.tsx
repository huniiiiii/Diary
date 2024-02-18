import styles from './page.module.css';
import LoginForm from '../../components/Input/LoginForm';
import LoginButton from '../../components/Loginbutton/Loginbutton';

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        <div className={styles.loginbox}>
          <LoginForm />
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
