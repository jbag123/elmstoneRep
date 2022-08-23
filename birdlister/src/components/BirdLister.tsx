export interface Props {
  items: BirdProps[];
}

export interface BirdProps {
  name: string;
  description: string;
  img: string;
}

const BirdLister = ({ items }: Props) => {
  return (
    <ul>
      {items.map((bird) => (
        <div>
          <p>{bird.description}</p>
          <p>{bird.img}</p>
          <p>{bird.name}</p>
        </div>
      ))}
    </ul>
  );
};

export default BirdLister;
