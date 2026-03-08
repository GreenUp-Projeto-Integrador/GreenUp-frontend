import { Outlet } from "react-router";
import { Toaster } from "../components/ui/sonner";
import MobileFrame from "../components/MobileFrame";

export default function Root() {
  return (
    <>
      <MobileFrame>
        <Outlet />
      </MobileFrame>
      <Toaster position="top-center" />
    </>
  );
}