import { NetworkLabel } from "./networkLabel";
import { DropDown } from "./dropdown";
import { useRef, useState } from "react";

type NetworkInfoProps = {
  network: string;
  onChangeNetwork: (n: string) => void;
};

export const NetworkInfo = ({ network, onChangeNetwork }: NetworkInfoProps) => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClick = () =>
    (setIsActive as React.Dispatch<React.SetStateAction<boolean>>)(!isActive);

  return (
    <div className="container">
      <p>
        To view you balance on{" "}
        <NetworkLabel onClick={onClick}>{network} Network</NetworkLabel>, please
        provide your wallet address
      </p>
      <DropDown
        isActive={isActive as boolean}
        dropdownRef={ref}
        onChange={(v) => {
          onChangeNetwork(v);
          onClick();
        }}
      />
    </div>
  );
};
