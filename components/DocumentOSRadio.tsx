import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { AppleIcon, WindowsIcon } from "./Icons";
import OSType from "../types/OSType";

export default function DocumentOSRadio({
  setOS,
  os,
}: {
  os: OSType;
  setOS: React.Dispatch<React.SetStateAction<OSType>>;
}) {
  return (
    <div className="container">
      <RadioGroup
        className="flex flex-row justify-center"
        value={os}
        onChange={setOS}
      >
        {/* <RadioGroup.Label>Plan</RadioGroup.Label> */}
        <RadioGroup.Option value="mac">
          {({ checked }) => <AppleIcon checked={checked}></AppleIcon>}
        </RadioGroup.Option>
        <RadioGroup.Option value="win">
          {({ checked }) => <WindowsIcon checked={checked}></WindowsIcon>}
        </RadioGroup.Option>
      </RadioGroup>
    </div>
  );
}

// import React, { useState } from "react";
// import { Switch } from "@headlessui/react";

// export default function DocumentOSSwtich({ onChange }: { onChange: React.Dispatch<React.SetStateAction<boolean>> }) {
//   const [enabled, setEnabled] = useState(false);

//   return (
//     <Switch
//       checked={enabled}
//       onChange={setEnabled}
//       className={`${enabled ? "bg-blue-600" : "bg-gray-200"} relative inline-flex h-6 w-11 items-center rounded-full`}
//     >
//       <span className="sr-only">Enable notifications</span>
//       <span
//         className={`${
//           enabled ? "translate-x-6" : "translate-x-1"
//         } inline-block h-4 w-4 transform rounded-full bg-white transition`}
//       />
//     </Switch>
//   );
// }
