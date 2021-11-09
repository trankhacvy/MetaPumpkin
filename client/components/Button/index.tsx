import React, { forwardRef } from "react";
import cx from "classname";
import styles from "./Button.module.css";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <button ref={ref} className={cx('text-base md:text-lg px-4 py-2', styles.button, className)} {...rest}>
      {children}
    </button>
  );
});

export default Button;
