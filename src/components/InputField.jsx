import {useState} from "react";
import hiddenIcon from "../assets/images/hidden-pw.png";

function InputField({ label, type, placeholder, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = 
  type === "password" && showPassword ? "text" : type;
  
  return (
    <div className="form">
      <label>{label}</label>

      <div className="input-wrapper">
        <input 
          type={inputType} 
          placeholder={placeholder} 
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <img 
          src={hiddenIcon} 
          alt="Show Password" 
          className="password-icon" 
          onClick={() => setShowPassword(!showPassword)} 
          />
        )}
      </div>
    </div>
  );
}

export default InputField;