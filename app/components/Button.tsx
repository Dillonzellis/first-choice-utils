type ButtonProps = {
  text: string;
  href: string;
  variant?: "primary" | "secondary";
};

const handleVariant = (variant: ButtonProps["variant"]) => {
  if (variant === "primary") {
    return "tw-bg-primary-400 tw-text-white";
  }
  if (variant === "secondary") {
    return "tw-bg-white tw-text-primary-400";
  }
};

const Button = ({ text, href, variant = "primary" }: ButtonProps) => {
  return (
    <a
      className={`tw-capitalize tw-font-bold tw-border-[3px] tw-border-primary-400 tw-cursor-pointer tw-btn btn-shadow tw-inline-flex tw-self-start ${handleVariant(
        variant
      )}`}
      href={href}>
      {text}
    </a>
  );
};

export default Button;
