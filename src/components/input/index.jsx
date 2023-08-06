import "./style.css";

const Input = ({
  placeholder,
  type = "text",
  id,
  required = false,
  label,
  name,
  onFocus,
  onBlur,
  onChange,
  value,
  active,
  error,
  hasError,
}) => {
  const inputClass = `container ${active ? "active" : ""}`;
  return (
    <div className={inputClass}>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
      {hasError && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
