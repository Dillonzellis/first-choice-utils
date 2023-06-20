type LinkStylesProps = {
  text: string;
  href: string;
};

const LinkStyles = ({ text, href }: LinkStylesProps) => {
  return (
    <a href={href} className="tw-text-accent-400 tw-font-medium">
      {text}
    </a>
  );
};

export default LinkStyles;
