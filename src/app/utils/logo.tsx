import { IconInterface } from "./icons/icons";

interface LogoProps extends IconInterface {
  displayVersion?: boolean;
  hideBaseColorContent?: boolean;
}

export function Logo({ displayVersion, hideBaseColorContent = false, ...props }: LogoProps) {
  const redTone = "text-red-500";

  return (
    <span
      className={`select-none font-serif ${!hideBaseColorContent && "text-base-content"} italic ${props.className}`}
    >
      <span className={redTone}>H</span>ennri<span className={redTone}>D</span>
      ev
      {displayVersion && (
        <span className="ml-1 opacity-50 text-clamp-subtext">
          {/* {__APP_VERSION__} */}
        </span>
      )}
    </span>
  );
}
