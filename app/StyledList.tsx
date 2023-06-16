type StyledListProps = {
  items: string[];
};

const StyledList = ({ items }: StyledListProps) => {
  return (
    <ul className="tw-list-disc tw-list-inside">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
};

export default StyledList;
