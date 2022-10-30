import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

import { useFetch } from "helpers/api_helper";
import { api, url, str, toast } from "../../common/imports";
import { useSelector, useDispatch } from "react-redux";
import { GET_MENUS } from "store/menu/actionTypes";

const SidebarContent = (props) => {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    if (store.Menus.menus.length === 0) {
      console.log("Fetching  Menu");
      dispatch({ type: GET_MENUS });
    }
  }, []);

  const ref = useRef();
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    console.log("==> ", props.location.pathname);
    const pathName = props.location.pathname;
    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname]);

  useEffect(() => {
    ref.current.recalculate();
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }

  return (
    <React.Fragment>
      <SimpleBar className="vertical-simplebar" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {(store.Menus.menus.length === 0) && <li className="menu-title">   در حال دریافت منو مطابق دسترسی دسترسی شما</li>  }
            {(store.Menus.menus.length > 0) && <li className="menu-title">منوی اصلی</li>  }
            {store.Menus.menus.map((subMenu, i) => {
              if (subMenu.parentID == 0)
                return (
                  <li>
                    <Link to={subMenu.path} className="waves-effect">
                      <i className={subMenu.iconName}></i>
                      <span>{subMenu.name}</span>
                    </Link>
                    <ul className="sub-menu">
                      {store.Menus.menus
                        .filter((c) => c.parentID == subMenu.id)
                        .map((childMenu, j) => (
                          <li key={j}>
                            <Link to={childMenu.path}>{childMenu.name}</Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                );
            })}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
