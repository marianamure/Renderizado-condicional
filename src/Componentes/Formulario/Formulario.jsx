import React, {useState} from 'react';


const Formulario = () => {

    //Creando una variable por cada campo de mi formulario
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hizoSubmit, setHizoSubmit] = useState(false);

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const crearUsuario = e => {
        e.preventDefault(); //Prevenimos el comportamiento normal del submit de un formulario
        const nuevoUsuario = {firstName, lastName, email, password, confirmPassword}; //Creando un objeto/diccionario con todas las variables que creamos previamente
        /*const nuevoUsuario = {nombre:firstName, apellido:lastName, edad:email};*/
        console.log("Nuevo registro:", nuevoUsuario);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHizoSubmit(true);

    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length <= 2) {
            setFirstNameError("El nombre debe tener al menos 2 caracteres");
        } else {
            setFirstNameError('');
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length <= 2) {
            setLastNameError("El Apellido debe tener al menos 2 caracteres");
        } else {
            setLastNameError('');
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length <= 5) {
            setEmailError("El Email debe tener al menos 5 caracteres");
        } else {
            setEmailError('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length <= 8) {
            setPasswordError("El password debe tener al menos 8 caracteres");
        } else {
            setPasswordError('');
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(password !== e.target.value) {
            setConfirmPasswordError("Debe coincidir con la información del password");
        } else {
            setConfirmPasswordError('');
        }
    }


    const mensaje = () => {
        if(!hizoSubmit) {
            return (
                <div class="card">
                    <h3>Your Form Data</h3>
                    <p>First Name: {firstName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>E-mail: {email}</p>
                    <p>Password: {password}</p>
                    <p>Confirm Password: {confirmPassword}</p>
                </div>
            )
            
        } else{
            return "¡Gracias por ingresar tus datos!";
        }
    }
    
    return(
        <form onSubmit={crearUsuario}>
        <div className="form-group">
            <label>Nombre:</label>
            <input type="text" className="form-control" onChange={handleFirstName}/>
            {
                firstNameError ?
                <p style={{color:'red'}} >{firstNameError}</p>:""
            }
        </div>
        <div className="form-group">
            <label>Apellido:</label>
            <input type="text" className="form-control" onChange={handleLastName}/>
            {
                lastNameError ?
                <p style={{color:'red'}} >{lastNameError}</p>:""
            }
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input type="text" className="form-control" onChange={handleEmail}/>
            {
                emailError ?
                <p style={{color:'red'}} >{emailError}</p>:""
            }
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" onChange={handlePassword}/>
            {
                passwordError ?
                <p style={{color:'red'}} >{passwordError}</p>:""
            }
        </div>
        <div className="form-group">
            <label>Confirma Password:</label>
            <input type="password" className="form-control" onChange={handleConfirmPassword}/>
            {
                confirmPasswordError ?
                <p style={{color:'red'}} >{confirmPasswordError}</p>:""
            }
        </div>
        <input type="submit" className="btn btn-success" value="Crear usuario" />
        <br/>
        {mensaje()}

    </form>
)

}

export default Formulario;