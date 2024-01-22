export default function TabsDesign(props:{h1:string,h3:string}){
    return (
    <main className="mt-36">
        <h1 className="text-xl md:text-5xl font-bold text-center ">{props.h1}</h1>
        <h3 className="textmd text-center">{props.h3}</h3>
    </main>
    )
}