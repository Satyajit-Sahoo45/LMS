"use client";

import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="LMS"
        description="LMS is a platform for student to learn and get help from teachers"
        keywords="Programming, MERN, REDUX"
      />
    </div>
  );
};

export default Page;
