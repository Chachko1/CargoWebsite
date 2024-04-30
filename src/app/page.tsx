import Description from "./components/Description";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import Services from "./components/Services";
export default function Home() {
  return (
    <main className="bg-white flex flex-col  min-h-screen items-center ">
      <NavBar/>
    <Header />
    <Description/>
    <Form/>
    <Services/>
    </main>
  );
}
