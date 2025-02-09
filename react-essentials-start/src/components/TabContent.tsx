interface TabContentProps {
  title: string;
  description: string;
  code: string;
}

const TabContent = ({ title, description, code }: TabContentProps) => {
  return (
    <div className="p-4 rounded-md bg-[#2f1d43] shadow-md">
      <h3 className="m-0">{title}</h3>
      <p>{description}</p>
      <pre>
        <code className="text-base">{code}</code>
      </pre>
    </div>
  );
};

export default TabContent;
