import { useState } from "react";
import Info from "./components/Info";
import Title from "./components/Title";

function App() {
  const [name, setName] = useState("Enter Your Name");
  const [date, setDate] = useState("DoB");
  return (
    <section>
      <Title name={name} />
      <Title date={date} />
      <Info />
      <div className="spaces">
        <input
          type="date"
          name=""
          id=""
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </section>
  );
}

export default App;
