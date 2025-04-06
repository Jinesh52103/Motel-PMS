import Cards from "./Cards"

export default function HomeDashboard(){
     return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            <Cards title={"Rooms"} value={12}/>
            <Cards title={"Check-Ins"} value={12}/>
            <Cards title={"In House"} value={12}/>
            <Cards title={"King's Left"} value={12}/>
            <Cards title={"Queen's Left"} value={12}/>
            <Cards title={"Revenue"} value={12}/>
        </div>
     )
}