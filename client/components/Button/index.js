import React, { forwardRef } from "react";
import cx from "classname";
import styles from "./Button.module.css";

const Button = forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <button ref={ref} className={cx(styles.button, className)} {...rest} />
  );
});

export default Button;
