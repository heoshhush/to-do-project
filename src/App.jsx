import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Styles from './App.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';


const App = ({ authService }) => {
  return(
    <section className={Styles.container}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
                <Login 
              authService= {authService}
              />
          </Route>
          <Route path='/maker'>
                <Maker 
                authService= {authService}
                />
          </Route>
        </Switch>
      </BrowserRouter>
    </section>


  )
}

export default App;
