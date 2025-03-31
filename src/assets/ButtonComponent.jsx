const ButtonComponent= function (props) {
    return(
    <a href={props.link} target="_blank" rel="noopener noreferrer">
    <button>{props.label}</button>
  </a>)}
export default ButtonComponent;