import Tag from "./components/Tag";
import Random from "./components/Random";

export default function App() {
  return (
    <div className=" w-full h-screen flex flex-col background  overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px]
       px-10 py-2 text-4xl font-bold ">Random GIFS </h1>

      <div className="flex flex-col w-full items-center mt-[30px] gap-y-30">
        <Random/>
        <Tag/>
      </div>

    </div>
  );
}
