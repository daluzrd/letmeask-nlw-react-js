import { ButtonHTMLAttributes } from "react";
import "../styles/button.scss";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
	<button className="button" {...props} />
);
