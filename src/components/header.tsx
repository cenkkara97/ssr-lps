import { Outlet } from "react-router";

const NavHeader: React.FC = () => {
  return (
    <>
      <nav className="w-full bg-primaryBlue shadow">
        <div className="mx-auto max-w-[1120px] px-4 sm:px-6 md:px-0">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex-shrink-0">
              <img
                src="/assets/images/navbar-logo.png"
                alt="Company Logo"
                width={64}
                height={64}
                className="h-12 w-auto"
              />
            </a>
            <img
              src="/assets/images/navbar-google-logo.png"
              alt="Google Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavHeader;
