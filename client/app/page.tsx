"use client";

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <Heading
        title="LMS"
        description="LMS is a platform for student to learn and get help from teachers"
        keywords="Programming, MERN, REDUX"
      />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
    </div>
  );
};

export default Page;
