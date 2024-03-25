import { useState } from "react";


const StatefulForm = () => {
    const [name,setName] = useState('Rojoni klanto');
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be at least 6 characters');
        }
        else{
            setError('');
            console.log(name,email,password);
        }
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <input onChange={handleNameChange} type="text" name="name"/>
                <br />
                <input
                 onChange={handleEmailChange}
                 type="text" name="email"/>
                <br />
                <input 
                onChange={handlePasswordChange}
                type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;