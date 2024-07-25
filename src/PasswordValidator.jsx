import {useState} from "react";
import validator from "validator";

const PasswordValidator =()=>{
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const validate=(value)=>{
    setPassword(value);
    const isStrongPassword=validator.isStrongPassword(value);
    if(isStrongPassword){
      setMessage('Strong Password');
      setColor('text-success');
    }else{
      setMessage('Weak Password');
      setColor('text-danger');
    }
  }
  return (
    <div className="container p-3">
      <div className="card p-3">
        <h4 className="text-danger text-center">Password Validator</h4>
        <form>
          <div>
            <label>Enter Password</label>
            <input type="password" className="form-control" value={password} onChange={(e)=>{validate(e.target.value)}}/>
            <p className={color}>
             {message}
            </p>
          </div>
        </form>
      </div>
    </div>
    );
}
export default PasswordValidator;