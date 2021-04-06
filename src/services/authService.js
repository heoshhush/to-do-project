import { firebaseAuth, githubProvider, googleProvider } from './firebase';

class AuthService {
    login = (provider) => {
        return firebaseAuth.signInWithPopup(provider);
    }

    logout = () => {
        firebaseAuth.signOut();
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

    onAuthChange = (myFunction) => {
        firebaseAuth.onAuthStateChanged(user => {
            myFunction(user);
        })
    }
}

// user 포착 및 그에따라 maker로 이동.

export default AuthService;