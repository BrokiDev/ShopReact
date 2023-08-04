import "./style.css";



const Input = ({placeholder, type, id, required = false, name, value, onFocus, onBlur, onChange, className}) => {
    return (
        <div className={className}>
        <input type={type} placeholder={placeholder} id={id} required={required}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        />

        <label 
        htmlFor={id}
        >

        {name}
        </label>
        </div>
    );
};

export default Input;