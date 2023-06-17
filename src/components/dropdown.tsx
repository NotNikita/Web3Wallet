import "./Dropdown.css";
import { networks } from "../constants/networks";

type DropdownProps = {
  isActive: boolean;
  dropdownRef: React.LegacyRef<HTMLElement>;
  onChange: (value: string) => void;
};

export const DropDown = ({
  isActive,
  dropdownRef,
  onChange,
}: DropdownProps) => {
  const keys = Object.keys(networks);
  return (
    <nav
      ref={dropdownRef}
      className={`menu ${isActive ? "active" : "inactive"}`}
    >
      <ul>
        {keys.map((networkKey) => (
          <li key={networkKey} onClick={() => onChange(networkKey)}>
            <span>{networkKey}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
