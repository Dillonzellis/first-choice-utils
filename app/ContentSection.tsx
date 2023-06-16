type ContentSectionProps = {
  children: React.ReactNode;
};

const ContentSection = ({ children }: ContentSectionProps) => {
  return <section className="tw-py-8">{children}</section>;
};

export default ContentSection;
