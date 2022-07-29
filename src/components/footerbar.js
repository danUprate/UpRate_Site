import React from "react";
import { Link } from "react-router-dom";
export { Footerbar }

const Footerbar = () => {

  return (
    <div className="footer-bar">
      <Link className='footer-bar__btn footer-bar__btn--jobs' to="/alljobs">Jobs</Link>
      <Link className='footer-bar__btn footer-bar__btn--uprate' to="/myUprate">My UpRate</Link>
    </div>
  )
}