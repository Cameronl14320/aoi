import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";

const Form = (): JSX.Element => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [signingUp, setSigningUp] = React.useState(false);
    const auth = getAuth();

    const signUpWithEmail = () => {
        if (email.length > 0 && password.length > 0) {
            createUserWithEmailAndPassword(auth, email, password)
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    alert(errorMessage);
                });
        }
    }

    const signInWithEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                alert(errorMessage);
            })
    }
    return (
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                <button onClick={() => {signInWithEmail()}}>Sign in</button>
                <button onClick={() => {signUpWithEmail()}}>Sign up</button>
            </div>
        </div>
    )
}

export default Form;