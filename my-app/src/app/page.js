import ClinicsList from "./Components/ClinicList";
import DoctorsList from "./Components/DoctorList";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";



export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Homepage></Homepage>
      <DoctorsList></DoctorsList>
      <ClinicsList></ClinicsList>
    </div>
  );
}
