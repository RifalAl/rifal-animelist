"use client";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { SealCheck, XCircle } from "@phosphor-icons/react";

import React from "react";

const DialogAlert = ({
  openDialog,
  toogleDialogHandler,
  confirmSubmitHandler,
  title,
  body,
  isSuccess,
}) => {
  return (
    <>
      <Dialog
        open={openDialog}
        handler={toogleDialogHandler}
        className="text-center"
        size="xs"
      >
        <DialogHeader className="flex justify-center">{title}</DialogHeader>
        <DialogBody>
          <div className="flex flex-col items-center gap-3">
            {isSuccess ? (
              <SealCheck size={64} weight="bold" />
            ) : (
              <XCircle size={64} weight="bold" />
            )}

            {body}
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-center">
          <Button variant="gradient" color="red" onClick={confirmSubmitHandler}>
            <span>Ok</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DialogAlert;
