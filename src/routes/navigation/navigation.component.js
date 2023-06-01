import React, { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer,
} from "./navigation.styles.js";

const NavigationBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
    // console.log("res", res);
  };
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/authentication">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
