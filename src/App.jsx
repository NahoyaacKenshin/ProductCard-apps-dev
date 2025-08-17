import ProductCard from "./components/ProductCard";

function App() {
  const Product = [
    {
      id: 1,
      image: "/strat.jpg",
      name: "Fender Stratocaster",
      description: "One of the most iconic electric guitars since the 1950s. Known for its double-cutaway body, three single-coil pickups, and bright versatile tone. Played by legends like Jimi Hendrix, Eric Clapton, and John Mayer.",
      price: "$2500"
    },
    {
      id: 2,
      name: "Fender Telecaster",
      image: "/tele.jpg",
      description: `The first mass-produced solid-body electric guitar (introduced in 1950). Recognized for its simple design, bright "twangy" sound, and durability. A favorite among country, rock, and blues players.`,
      price: "$1800"
    },
    {
      id: 3,
      name: "Gibson Les Paul",
      image: "/lespaul.jpg",
      description: "A solid-body electric guitar introduced in 1952. Famous for its thick, warm tone and sustain, making it a favorite in rock and metal. Used by Slash, Jimmy Page, and Joe Perry.",
      price: "$3500"
    },
    {
      id: 4,
      name: "Gibson SG Standard",
      image: "/sg.jpg",
      description: "Released in 1961 as a lighter, thinner alternative to the Les Paul. Recognizable for its sharp “devil horn” body shape and powerful midrange tone. Played by Angus Young (AC/DC) and Tony Iommi (Black Sabbath).",
      price: "$2300"
    },
    {
      id: 5,
      name: "Ibanez RG Series",
      image: "/rg.jpg",
      description: "One of the most iconic electric guitars since the 1950s. Known for its double-cutaway body, three single-coil pickups, and bright versatile tone. Played by legends like Jimi Hendrix, Eric Clapton, and John Mayer.",
      price: "$1500"
    },
    {
      id: 6,
      name: "Martin D-28",
      image: "/martin-d20.jpg",
      description: "One of the most legendary acoustic guitars, introduced in 1931. Famous for its rich tone and projection, popular among folk, country, and rock musicians (played by Bob Dylan and Neil Young).",
      price: "$3500"
    }
  ]

  return (
    <div>
      <div className="header-div">
        <h1>Shop Our Guitars</h1>
      </div>

      <div className="card-container">
        {Product.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;