import NavBar from '../components/NavBar'
import HomeDashboard from '../components/HomeComponents/HomeDashboard'
import TodaysActivity from '../components/HomeComponents/TodaysActivity'


export default function Home(){
    return(
        <>
            <NavBar />
            <HomeDashboard />
            <TodaysActivity />
        </>
    )
}