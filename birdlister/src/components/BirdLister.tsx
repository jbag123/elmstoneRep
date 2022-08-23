export interface Props {
  birds: BirdProps[];
}

export interface BirdProps {
  name: string;
  description: string;
  img: string;
}

const BirdLister = ({ birds }: Props) => {
  return (
    <ul className="bird__list">
      {birds &&
        birds.map((bird) => (
          <li className="bird__item">
            <img className="bird__image" alt={bird.name} src={bird.img} />
            <div className="bird__text-box">
              <p className="bird__name">{bird.name}</p>
              <p className="bird__desc">{bird.description}</p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default BirdLister;
