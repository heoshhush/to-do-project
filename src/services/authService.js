import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
    login = (provider) => {
        firebaseAuth.signInWithPopup(provider)
    }

    getProvider = (provider) => {
        switch(provider){
            case 'Google' :
                return googleProvider;
            case 'Github' :
                return githubProvider;
            default :
                throw new Error(`Unknown Provider: ${provider}`)
        }
    }


}

export default AuthService;