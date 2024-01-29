"use client";
/** Heroicons */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
/** Redux */
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "@/redux/buttons/reducer";
import { RootState } from "@/redux/store";

export default function MenuButton() {
  const dispatch = useDispatch();

  const isMenuOpen = useSelector((state: RootState) => state.menuButton.isMenuOpen);

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button className="transform transition duration-500 ease-in-out" onClick={handleToggleMenu}>
      {isMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
    </button>
  );
}
