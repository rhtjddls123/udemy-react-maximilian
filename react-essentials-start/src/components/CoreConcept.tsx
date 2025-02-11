interface CoreConceptProps {
  title: string;
  description: string;
  image: string;
}

const CoreConcept = ({ title, description, image }: CoreConceptProps) => {
  return (
    <li className="w-40 text-center">
      <img className="object-cover w-24 h-16" src={image} alt={title} />
      <h3 className="my-2">{title}</h3>
      <p className="text-[0.9rem]">{description}</p>
    </li>
  );
};

export default CoreConcept;
