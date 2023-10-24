import Background from "./components/Background";
import Header from "./components/Header";
import Section from "./components/Section";

export default function App() {

  return (
    <div>
      <Background />
      <div className="content">
        <Header />
        <Section />
      </div>
    </div>
  )
}