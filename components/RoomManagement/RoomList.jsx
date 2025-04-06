import Table from "../Table";
import roomData from "../../src/roomData.js";



const columns = ["Room #", "Guest Name", "Room Type", "Status", "Cleaned"];
const rows = ["roomNumber", "name", "type", "status", "clean"];


export default function RoomList(){
    return(
       <Table
  title="Room List"
  columns={columns}
  rows={rows}
  data={roomData}
/>

    )
}