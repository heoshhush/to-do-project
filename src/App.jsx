import './App.module.css';
import Login from './components/login/login';

const App = ({ authService }) => {
  return(
    <section>
      <Login 
      authService= {authService}
      />
    </section>
  )
}

export default App;
