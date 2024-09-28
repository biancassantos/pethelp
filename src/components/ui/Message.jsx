/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Message = ({ title, msg, text2, src }) => {
  return (
    <main className="message">
      <h1>{title}</h1>
      <p>{msg}</p>
      <Link to={src}>{text2}</Link>
    </main>
  )
}

export default Message;