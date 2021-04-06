import React from 'react';
import Styles from './login.module.css'

const Login = ({ authService }) => {
    
    const onClick = (event) => {
        const btnText = event.currentTarget.textContent;
        const provider = authService.getProvider(btnText)
        authService.login(provider).then(console.log)
    }
    
    
    return(
        <section>
            <button onClick={onClick}>Google</button>
            <button onClick={onClick}>Github</button>
        </section>
    )
}

export default Login;