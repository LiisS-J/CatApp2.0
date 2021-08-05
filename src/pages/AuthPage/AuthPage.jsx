import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {
  return (
    <main>
      <h2 style={{color: "#3AA6DD", fontSize: "45px", textAlign: "center"}}>
        In odrer to adopt a kitty, please Log In or Sign Up for an account
      </h2>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  );
}

export default AuthPage;
