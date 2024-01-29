export default function TabsDesign(props:{h1:string,h3:string}){
    return (
      <main
        className="mt-28 p-4 md:max-w-[50%] min-w-[250px ] text-center flex flex-col items-center m-auto gap-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold  ">{props.h1}</h1>
        <h3 className=" text-md ">{props.h3}</h3>
      </main>
    );
}