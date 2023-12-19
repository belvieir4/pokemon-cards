import Card from 'components/Card';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1 className="text-5xl font-bold text-red-700">Pokemon Cards</h1>
      <p className="mt-4">
        A React.js + TypeScript project using Tailwind and consuming the
        PokéAPI.
      </p>
      <div className="mt-10 flex w-3/4 flex-col">
        <div className="flex">
          <input
            className="min-w-full flex-1 rounded-l-md border border-slate-300 px-3 py-2 outline-none duration-300 ease-in-out focus:border-slate-800"
            placeholder="You can search by number or name"
          />
          <button className="rounded-r-md bg-red-700 px-5 py-2 text-white duration-300 ease-in-out hover:bg-red-900">
            Search
          </button>
        </div>
      </div>
      <div className="mt-12 grid w-full grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-4">
        <Card
          height={20}
          img="https://place-hold.it/200x200"
          name="Pikachu"
          number={40}
          types={['electric']}
          weight={30}
        />
      </div>
    </div>
  );
}

export default App;
