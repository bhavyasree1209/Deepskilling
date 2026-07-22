function App() {

  const officeSpaces = [
    {
      name: "Tech Park Tower",
      rent: 55000,
      address: "Madhapur, Hyderabad",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    },
    {
      name: "Cyber Heights",
      rent: 75000,
      address: "Gachibowli, Hyderabad",
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7"
    },
    {
      name: "Innovation Hub",
      rent: 90000,
      address: "Hitech City, Hyderabad",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c"
    }
  ];

  return (
    <div style={{ margin: "20px" }}>

      <h1>Office Space Rental App</h1>

      {officeSpaces.map((office, index) => (

        <div
          key={index}
          style={{
            border: "1px solid black",
            padding: "15px",
            marginBottom: "20px",
            width: "400px"
          }}
        >

          <img
            src={office.image}
            alt="Office Space"
            width="350"
            height="200"
          />

          <h2>{office.name}</h2>

          <h3
            style={{
              color:
                office.rent < 60000
                  ? "red"
                  : "green"
            }}
          >
            Rent: ₹{office.rent}
          </h3>

          <h4>Address: {office.address}</h4>

        </div>

      ))}

    </div>
  );
}

export default App;