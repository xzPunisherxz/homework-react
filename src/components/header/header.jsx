import React from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

const Header = ({ location }) => {
  return (
    <section className="main__header">
      <section className="main__header-wrap">
        <span className="main__header-logo">SomeList</span>
        <div className="main__header-group-lnk">
          <Link
            to="/"
            className={`main__header-lnk ${
              location === AppRoute.MAIN && "lnk-active"
            } `}
          >
            События
          </Link>
          <Link
            to="/archive"
            className={`main__header-lnk ${
              location === AppRoute.ARCHIVE && "lnk-active"
            } `}
          >
            Архив
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Header;
