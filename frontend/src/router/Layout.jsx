import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ModalProvider, Modal } from "../context/Modal";
import { thunkAuthenticate } from "../redux/session";
import Navigation from "../components/Navigation/Navigation";
import HomeNav from "../components/HomeNav";

export default function Layout() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(thunkAuthenticate()).then(() => setIsLoaded(true));
  }, []);

  return (
    <>
      <ModalProvider>
        {location.pathname !== '/dashboard' && location.pathname !== '/reports' && <Navigation /> }
        {isLoaded && <Outlet />}
        <Modal />
      </ModalProvider>
    </>
  );
}
