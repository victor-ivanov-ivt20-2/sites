import { useMobile } from "@/providers/MobileProvider";
import LogoMarkIcon from "./icons/LogoMark";
import LogoTitleIcon from "./icons/LogoTitle";
import EmailIcon from "./icons/contacts/Email";
import PhoneIcon from "./icons/contacts/Phone";
import CircleButton from "./ui/CircleButton";

const Header = () => {
  const isMobile = useMobile();

  return (
    <header className="mental-health-container">
      <div className="h-[65px] md:h-auto py-2 mt-4 px-4 mental-health-container-inner bg-mindful-gray-10 flex justify-between items-center rounded-full">
        {!isMobile && (
          <div className="flex gap-2">
            <CircleButton Icon={EmailIcon}></CircleButton>
            <CircleButton Icon={PhoneIcon}></CircleButton>
          </div>
        )}

        <div className="flex gap-[12px] items-center">
          <LogoMarkIcon />
          {!isMobile && <LogoTitleIcon />}
        </div>
        <button className="flex gap-2 items-center">
          <span className="text-mindful-gray-80 text-lg font-semibold">
            {!isMobile && "Main"} Menu
          </span>
          <div className="bg-mindful-gray-60 w-[12px] h-[12px] rounded-full"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
