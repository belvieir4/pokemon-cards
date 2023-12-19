import classNames from 'classnames';
import { Type } from 'service/types';

export type TagProps = {
  type: Type;
};

const names: Record<Type, string> = {
  bug: 'Bug',
  dark: 'Dark',
  dragon: 'Dragon',
  electric: 'Electric',
  fairy: 'Fairy',
  fighting: 'Fighting',
  fire: 'Fire',
  flying: 'Flying',
  ghost: 'Ghost',
  grass: 'Grass',
  ground: 'Ground',
  ice: 'Ice',
  normal: 'Normal',
  poison: 'Poison',
  psychic: 'Psychic',
  rock: 'Rock',
  shadow: 'Shadow',
  steel: 'Steel',
  unknown: 'Unknown',
  water: 'Water',
};

const colors: Record<Type, string> = {
  bug: 'bg-lime-600',
  dark: 'bg-slate-600',
  dragon: 'bg-rose-600',
  electric: 'bg-yellow-500',
  fairy: 'bg-pink-400',
  fighting: 'bg-orange-400',
  fire: 'bg-orange-600',
  flying: 'bg-sky-700',
  ghost: 'bg-indigo-900',
  grass: 'bg-green-700',
  ground: 'bg-yellow-900',
  ice: 'bg-cyan-400',
  normal: 'bg-zinc-400',
  poison: 'bg-purple-600',
  psychic: 'bg-fuchsia-500',
  rock: 'bg-amber-800',
  shadow: 'bg-fuchsia-950',
  steel: 'bg-slate-500',
  unknown: 'bg-zinc-950',
  water: 'bg-blue-700',
};

const Tag = ({ type }: TagProps) => {
  const defaultStyles = 'py-1 px-2 rounded-md';
  const textColor = {
    'text-white': Number(colors[type].match(/\d+/g)?.[0]) > 500,
  };
  return (
    <div className={classNames(defaultStyles, textColor, colors[type])}>
      {names[type]}
    </div>
  );
};

export default Tag;
