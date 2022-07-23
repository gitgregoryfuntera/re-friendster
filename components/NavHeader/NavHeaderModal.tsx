import React from "react";
import Portal from "../Layouts/Portal";
import classes from "./NavHeaderModal.module.scss";
import { IoClose, IoPersonSharp, IoAnalytics, IoBuild } from "react-icons/io5";
import CustomButton from "../CustomButton";
type NavHeaderModalProps = {
  show: boolean;
  toggleMenu: () => void;
};

const NavHeaderModal = ({ show, toggleMenu }: NavHeaderModalProps) => {
  if (!show) {
    return <></>;
  }
  return (
    <Portal>
      <div className={classes.container}>
        <div className={classes.closeBtnContainer}>
          <CustomButton onClick={toggleMenu}>
            <IoClose size={30}/>
          </CustomButton>
        </div>

        <ul className={classes.navLinksContainer}>
          <li>
            <CustomButton href="/activity" className={classes.navLink}>
              Activity{" "}
              <span>
                <IoAnalytics />
              </span>
            </CustomButton>
          </li>
          <li>
            <CustomButton href="/profile" className={classes.navLink}>
              Account{" "}
              <span>
                <IoPersonSharp />
              </span>
            </CustomButton>
          </li>
          <li>
            <CustomButton href="/customize" className={classes.navLink}>
              Customize{" "}
              <span>
                <IoBuild />
              </span>
            </CustomButton>
          </li>
        </ul>
      </div>
    </Portal>
  );
};

export default NavHeaderModal;
