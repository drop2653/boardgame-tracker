import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const LoginForm = ({ user, setUser }) => {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async () => {
    try {
      if (isLogin) {
        const res = await signInWithEmailAndPassword(auth, email, pw);
        setUser(res.user);
      } else {
        const res = await createUserWithEmailAndPassword(auth, email, pw);
        setUser(res.user);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  if (user) {
    return (
      <div>
        <p>{user.email}님 환영합니다!</p>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    );
  }

  return (
    <div>
      <input placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="비밀번호" type="password" value={pw} onChange={e => setPw(e.target.value)} />
      <button onClick={handleSubmit}>{isLogin ? '로그인' : '회원가입'}</button>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '회원가입으로 전환' : '로그인으로 전환'}
      </p>
    </div>
  );
};

export default LoginForm;
