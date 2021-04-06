import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Styles from './login.module.css'

const Login = ({ authService }) => {
    const history = useHistory();

    const onClick = (event) => {
        const btnText = event.currentTarget.textContent;
        const provider = authService.getProvider(btnText);
        authService.login(provider).then(console.log)
    }

    const goToMaker = (user) => {
        history.push({
            pathname: '/maker',
            state: {id: user.uid}})
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                goToMaker(user)
                console.log(user)
            }
        }
        )
    }, [authService])
    
    
    
    return(
        <section className={Styles.container}>
            <div className={Styles.title}>To-Do List</div>
            <div className={Styles.loginsTitle}>Sign in With</div>
            <div className={Styles.logins}>
                <button className={Styles.googleLogin} onClick={onClick}>
                    <i className={`fab fa-google ${Styles.googleIcon}`}></i>
                    Google
                </button>
                <button className={Styles.githubLogin} onClick={onClick}>
                    <i className={`fab fa-github ${Styles.githubIcon}`}></i>
                    Github
                </button>
            </div>
        </section>
    )
}

export default Login;