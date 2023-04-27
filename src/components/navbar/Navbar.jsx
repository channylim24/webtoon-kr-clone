import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiNaver } from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import style from "./navbar.module.scss";
// import { retrieveWebtoons } from "../../actions/webtoons";
import { useDispatch } from "react-redux";

function Navbar() {
  const location = useLocation();
  const [isSearching, setIsSearching] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    // if (e.keyCode === 13) {
    // return searchItem;
    // dispatch(retrieveWebtoons(`${searchItem}`));
    navigate("/webtoon/weekday", {
      state: `${searchItem}`,
    });
    // }
  };

  // useEffect(() => {
  //   return () => {
  //     searchItem = null;
  //   };
  // }, []);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.header__top}>
          <div className={style.header__top__left}>
            <Link to="/" className={style.header__top__left__logo}>
              <SiNaver />
            </Link>
            <ul className={style.header__top__left__page__navigation}>
              <Link to="/" className={style.header__top__left__link}>
                <li>웹툰</li>
              </Link>
              <span className={style.header__vertbar}>&#124;</span>
              {/* <Link to="/" className={style.header__top__left__link}>
                <li>웹소설</li>
              </Link>
              <span className={style.header__vertbar}>&#124;</span>
              <Link to="/" className={style.header__top__left__link}>
                <li>시리즈</li>
              </Link> */}
            </ul>
          </div>
          <div className={style.header__top__right}>
            <div className={style.header__top__right__search}>
              <input
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                onKeyUp={(e) => search(e)}
                type="search"
                placeholder="검색..."
                className={
                  isSearching
                    ? style.active
                    : style.header__top__right__input__search
                }
              />
              <button
                onClick={() => setIsSearching(!isSearching)}
                className={
                  isSearching
                    ? `${style.header__top__right__search__active} ${style.header__top__right__link}`
                    : `${style.header__top__right__link}`
                }
              >
                <FiSearch />
              </button>
            </div>
            <Link to="/" className={style.header__top__right__link}>
              MY
            </Link>
          </div>
        </div>
        <nav className={style.header__bottom}>
          <Link
            to="/"
            className={style.header__bottom__link}
            style={
              location.pathname === "/"
                ? {
                    color: "#00d564",
                    borderColor: "#00d564",
                  }
                : {}
            }
          >
            홈
          </Link>
          <Link
            to="/webtoon/weekday"
            className={style.header__bottom__link}
            style={
              location.pathname === "/webtoon/weekday"
                ? {
                    color: "#00d564",
                    borderColor: "#00d564",
                  }
                : {}
            }
          >
            요일별
          </Link>
          {/* <Link to="/" className={style.header__bottom__link}>
            완결작
          </Link>
          <Link to="/" className={style.header__bottom__link}>
            베스트도전
          </Link> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
