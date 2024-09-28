/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const RoundButton = ({ src, text, variant }) => {
  return (
    <Link to={src}>
      <button className={`round-btn ${variant}`}>{text}</button>
    </Link> 
  )
}

export default RoundButton;