"use client";

import {
  Avatar,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Tooltip,
} from "@material-tailwind/react";

import Link from "next/link";
import React from "react";
import { UserCircle } from "@phosphor-icons/react";

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
          <Link href={`/users/dashboard`}>
            <MenuItem>Dashboard</MenuItem>
          </Link>
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
