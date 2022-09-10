import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "./firebase";

export const signIn = async (email: string) => {
    const actionCodeSettings = {
        // URL you want to redirect back to. The domain (www.example.com) for this
        // URL must be in the authorized domains list in the Firebase Console.
        url: 'https://call-of-kookmin.web.app/' + '/login',
        // This must be true.
        handleCodeInApp: true,
    };


    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            throw errorCode
            // ...
        });
}

export const signOut = async () => {
    await auth.signOut();
}


export const makeUser = async (email: string, phone: number, name:string, ) => {

}