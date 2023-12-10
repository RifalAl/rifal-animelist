"use client";

import React from "react";
import Link from "next/link";
import Container from "../UI/Container";
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { ArrowLeft } from "@phosphor-icons/react";

const Dashboard = async ({ user }) => {
  let content;
  if (user) {
    content = (
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-5 items-center justify-center flex-col">
          <h2 className="text-xl font-semibold">Welcome, {user.name}</h2>
          <img
            src={user.image}
            alt="user image"
            className="w-[200px] md:w-[300px] object-cover rounded-sm transition-all ease-out hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center flex-col md:flex-row gap-4 ">
          <Link href="/users/dashboard/collection" className="w-full md:w-auto">
            <Button color="red" size="md" fullWidth>My Collection</Button>
          </Link>
          <Link href="/users/dashboard/comment" className="w-full md:w-auto">
            <Button color="red" size="md" fullWidth>My Comment</Button>
          </Link>
        </div>
      </div>
    );
  } else {
    content = (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            403 Forbidden
          </Typography>
          <Typography>
            Oops! Sepertinya Anda baru saja menemukan dinding yang tidak dapat
            ditembus. Kami minta maaf, tetapi akses ke halaman ini tidak
            diizinkan.
          </Typography>
        </CardBody>
        <CardFooter>
          <Link href="/">
            <Button color="red" className="float-right flex gap-2 items-center">
              <ArrowLeft size={18} />
              Kembali
            </Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }
  return (
    <Container className="flex justify-center pt-32 md:pt-24">
      {content}
    </Container>
  );
};

export default Dashboard;
