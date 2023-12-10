"use client";

import React from "react";
import Link from "next/link";

import { UserCircle } from "@phosphor-icons/react";
import {
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const SignInButton = ({ user }) => {
  let content;
  if (user) {
    content = (
      <Menu placement="bottom-end">
        <MenuHandler>
          <Avatar
            src={user.image}
            alt="avatar"
            size="md"
            variant="circular"
            className="cursor-pointer"
          />
        </MenuHandler>
        <MenuList className="font-medium text-md">
          <MenuItem>
            <Link href={`/users/dashboard`}>Dashboard</Link>
          </MenuItem>
          <MenuItem>
            <Link href={`/api/auth/signout`}>Sign Out</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    );
  } else {
    content = (
      <Link href={`/api/auth/signin`} className="">
        <Tooltip content="Sign In">
          <IconButton color="red" size="md" ripple={true}>
            <UserCircle size={24} weight="duotone" />
          </IconButton>
        </Tooltip>
      </Link>
    );
  }
  return <>{content}</>;
};

export default SignInButton;
