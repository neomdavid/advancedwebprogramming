import moduleName from "../styles/Button.css";
const Button = ({ children, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
