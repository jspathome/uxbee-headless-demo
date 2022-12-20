import React from "react";
import UILink from "../atoms/UILink";
import { MenuItem } from "./MenuItem";

interface MenuProps {
  Items: MenuItem[];
  //item : MenuItem;
  //Text: string;
}

function UIMenu({ Items }: MenuProps) {
  return (
    <>
      <div>UIMenu</div>

      <div className="bg-uxbee-black">
        {Items.map((item) => (
          <div className="block">
            {item.Text}
            {/* <UILink HRef={item.HRef} Text={item.Text} Color="secundary" /> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default UIMenu;

// import React from "react";
// import { MenuItem } from "@components/UI/molecules/MenuItem";
// import Link from "next/link";

// //{ Items }: MenuProps

// export const UIMenu = () => {
//   return;
//   <>
//     <div>UIMenu</div>
//     {/* <div className="users">
//       {Items.map((item) => (
//         <div className="block">
//           <Link href={item.HRef}>{item.Text}</Link>
//         </div>
//       ))}
//     </div> */}
//     ;
//   </>;
// };
