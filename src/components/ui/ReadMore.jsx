/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const ReadMore = ({ text, limit }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="adoption-card-bottom">
        <p>
          {readMore ? text : (`${text.substring(0, limit)}...`)} 
          <Link id="show-text-link" onClick={() => setReadMore(!readMore)}>
            {readMore ? ' Read less' : ' Read more'}
          </Link>
        </p>
      </article>
  )
}

export default ReadMore;