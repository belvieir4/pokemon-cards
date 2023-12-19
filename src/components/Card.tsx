import { Type } from 'service/types';
import Tag from './Tag';

export type CardProps = {
  img: string;
  number: number;
  name: string;
  types: Type[];
  weight: number;
  height: number;
};

const Card = ({ height, img, name, number, types, weight }: CardProps) => {
  return (
    <div className="flex flex-col bg-white p-4">
      <img className="self-center" src={img} alt={name} />
      <div className="mt-2">
        <p className="text-center">#{number}</p>
        <p className="text-center">{name}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {types.map((type) => (
            <Tag key={`${number}-${type}`} type={type} />
          ))}
        </div>
        <p className="text-center">
          {height / 10}m | {weight / 10}kg
        </p>
      </div>
    </div>
  );
};

export default Card;
