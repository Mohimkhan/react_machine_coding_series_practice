const Button = ({ label, ...rest }) => {
  return <button {...rest}>{label}</button>;
};
export default Button;
