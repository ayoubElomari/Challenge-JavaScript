function App() {
  const [state, setState] = React.useState([
    {
      PName: "Staffy Bunny!",
      PPrice: "15$",
      PId: 1,
      PTags: ["T-Shirts", "Bunny", "hoodies", "Cute"],
    },
    {
      PName: "Bunny Shooses",
      PPrice: "50$",
      PId: 2,
      PTags: ["Shooses", "Bunny", "red", "cool", "Cute"],
    },
    {
      PName: "Cute Black Hoodie",
      PPrice: "30$",
      PId: 3,
      PTags: ["Bunny", "Black", "Cute", "hoodie", "30$"],
    },
    {
      PName: "Bat Hat!",
      PPrice: "50$",
      PId: 4,
      PTags: ["hat", "bat", "cool", "beauty", "style"],
    },
    {
      PName: "PC Glasses",
      PPrice: "25$",
      PId: 5,
      PTags: ["glasses", "pc", "computer", "hacker", "black"],
    },
    {
      PName: "Sumsung S90 Ultra Pro Super!!",
      PPrice: "1050$",
      PId: 6,
      PTags: [
        "phone",
        "technologie",
        "sumsung",
        "s10",
        "s20",
        "sumsung s10",
        "sumsung s20",
        "computer",
      ],
    },
  ]);
  const [rus, setRus] = React.useState([]);

  function updateInp(e) {
    const TopSegg = state.forEach((prod) => {
      const segg = prod.PTags.filter((tag) => {
        return tag.toLowerCase().includes(e.target.value.toLowerCase());
      });

      if (segg !== []) {
        setRus(segg);
      } else {
        setRus(...rus, segg);
      }

      if (e.target.value === "") {
        setRus([]);
      }
    });
  }

  return (
    <div>
      <input type="search" onChange={updateInp} />
      <br />
      <br />
      <br />
      <div>
        <div>
          {rus.map((one) => (
            <h1 key={one}>{one}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
