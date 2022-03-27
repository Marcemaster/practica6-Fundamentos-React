import React from "react";
import classNames from "classnames";

const defaultPhoto =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNK7-n-r_w_qCEIjsnu8VXMBamUkSmLUr9Eg&usqp=CAU";
const Photo = ({ className, ...props }) => (
  <img
    className={classNames("photo", className)}
    src={defaultPhoto}
    alt=''
    {...props}
  />
);

export default Photo;
