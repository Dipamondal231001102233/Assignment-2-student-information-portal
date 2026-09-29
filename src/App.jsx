import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";
import "./App.css";

import dipaPhoto from "./assets/dipa.jpeg";

function App() {
  const students = [
    {
      name: "Dipa Mondal",
      rollNumber: "2233",
      department: "BCA",
      semester: "7th",
      cgpa: 8.5,
      photo: dipaPhoto
    },
    {
      name: "Rahul Sharma",
      rollNumber: "102",
      department: "BCA",
      semester: "7th",
      cgpa: 9.1,
      photo: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Priya Das",
      rollNumber: "103",
      department: "BCA",
      semester: "7th",
      cgpa: 8.8,
      photo: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <>
      <Header />
      <StudentList students={students} />
      <Footer />
    </>
  );
}

export default App;