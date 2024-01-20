import { faEnvelope, faKey, faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (!username || !email || !password || !confirmPassword || password !== confirmPassword) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [username, email, password, confirmPassword]);

    const handleRegister = () => {
        console.log("Submit");
    }

    return (
        <section className='register-page'>
            <div className='form-box'>
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <div className='form-input'>
                        <FontAwesomeIcon icon={faUser} className="icons" />
                        <label htmlFor='username'>USERNAME</label>
                        <input type='text' id='username' onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='form-input'>
                        <FontAwesomeIcon icon={faEnvelope} className="icons" />
                        <label htmlFor='email'>EMAIL</label>
                        <input type='email' id='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-input'>
                        <FontAwesomeIcon icon={faKey} className="icons" />
                        <label htmlFor='password'>PASSWORD</label>
                        <input type={!showPassword ? 'password' : 'text'} id='password' onChange={(e) => setPassword(e.target.value)} />
                        <FontAwesomeIcon icon={!showPassword ? faEye : faEyeSlash} className="icons password-icons" onClick={handleShowPassword} />
                    </div>
                    <div className='form-input'>
                        <FontAwesomeIcon icon={faKey} className="icons" />
                        <label htmlFor='confirm-password'>CONFIRM PASSWORD</label>
                        <input type={!showConfirmPassword ? 'password' : 'text'} id='confirm-password' onChange={(e) => setConfirmPassword(e.target.value)} />
                        <FontAwesomeIcon icon={!showConfirmPassword ? faEye : faEyeSlash} className="icons password-icons" onClick={handleShowConfirmPassword} />
                    </div>
                    <button disabled={!isValid}>REGISTER</button>
                    <p>Have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </section>
    )
}

export default Register