import Table from "../Table";
const time = new Date();
let hours = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();

const amPm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12;
hours = hours ? hours : 12;

const paddedMinutes = minutes.toString().padStart(2, '0');
const paddedSeconds = seconds.toString().padStart(2, '0');

const currentTime = `${hours}:${paddedMinutes}:${paddedSeconds} ${amPm}`;

const data = [{
    guestName: "John Doe",
    roomNumber: 102,
    roomType: "King",
    status: "Checked-In",
    time: currentTime
}
]

const columns = ["Guest Name", "Room #", "Room Type", "Status", "Time"];
const rows = ["guestName", "roomNumber", "roomType", "status", "time"];

export default function TodaysActivity(){
    return(
      <Table
        title="Room List"
        columns={columns}
        rows={rows}
        data={data}
      />
        

 



        

    )
}