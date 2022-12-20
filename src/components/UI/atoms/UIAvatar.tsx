import React, { Children, Fragment } from "react";

interface AvatarButtonProps {
  imageUrl: string;
}

const UIAvatar = ({ imageUrl }: AvatarButtonProps) => {
  return <img className="h-8 w-8 rounded-full" src={imageUrl} alt="AvatarImage" />;
};

export default UIAvatar;

import { Menu, Transition } from "@headlessui/react";
