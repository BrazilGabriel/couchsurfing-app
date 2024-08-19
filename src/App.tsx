import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PropertyCard from "./components/PropertyCard";
import MainProperty from "../classes";
import { Review, Property	 } from "../interfaces";

let yourMainProperty = new MainProperty("/camp_house.png", "Casa de campo", [
  {
    name: "Alice",
    stars: 5,
    loyalty: "Gold",
    date: "12-05-2023",
  },
  {
    name: "Juan",
    stars: 5,
    loyalty: "Silver",
    date: "06-25-2024",
  },
  {
    name: "Nick",
    stars: 4.5,
    loyalty: "Bronze",
    date: "03-28-2024",
  },
]);

let properties : Property[] = [
  {
    image: '/american_house.jpg',
    title: 'Casa americana',
    price: 450,
    location: {
        firstLine: 'Saint Paul, 37',
        city: 'Chicago',
        code: 324934,
        country: 'USA'
    },
    contact: ['marywinkle@gmail.com', +98115273978921],
    isAvaliable: true
  },
  {
    image: 'cabin_house.jpg',
    title: 'Cabana no sítio',
    price: 350,
    location: {
        firstLine: 'cabana 12',
        city: 'Belo Horizonte',
        code: 45632,
        country: 'Brazil'
    },
    contact: ['juliaandre@gmail.com', +112343823978921],
    isAvaliable: true
  },
  {
    image: '/combined_house.jpg',
    title: 'Apartamento',
    price: 120,
    location: {
        firstLine: 'no 23',
        city: 'Gdansk',
        code: 45632,
        country: 'Poland'
    },
    contact: ['garydavis@hotmail.com', +1298239028490830],
    isAvaliable: false 
  },
  {
    image: 'stylish_house.jpg',
    title: 'Casa estilosa',
    price: 360,
    location: {
        firstLine: 'shack 37',
        city: 'London',
        code: 54870,
        country: 'United Kingdom'
    },
    contact: ['andyluger@aol.com', +34829374892553],
    isAvaliable: true
  },
  {
    image: 'flat_house.jpg',
    title: 'Flat Malia',
    price: 320,
    location: {
        firstLine: 'Room 4',
        city: 'Malia',
        code: 1242124,
        country: 'Malaysia'
    },
    contact: ['lee34@gmail.com', +60349822083],
    isAvaliable: true
  },
  {
    image: 'luxury_house.jpg',
    title: 'Casa Luxuosa',
    price: 1500,
    location: {
        firstLine: 'Takeshita, 20',
        city: 'Tokyo',
        code: 15774,
        country: 'Japan'
    },
    contact: ['Haki12453@gmail.com', +754870448783],
    isAvaliable: true
  }

] 
function SortReviews(reviews: Review[]): Review[] {
  const sortedReviews = reviews.sort(
    (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
  );
  return sortedReviews;
}

function AverageReviews(reviews: Review[]): string {
  let totalReview = 0;
  for (let i = 0; i < reviews.length; i++) {
    totalReview += reviews[i].stars;
  }
  return (totalReview / reviews.length).toFixed(2);
}

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-7xl mx-auto flex flex-col items-center px-1">
        <section>
          <div className="flex flex-col items-start max-w-4xl py-8">
            <img
              className="self-center border rounded-md"
              src={yourMainProperty.src}
              alt={yourMainProperty.title}
            />
            <p className="font-bold text-xl text-slate-800">
              {yourMainProperty.title}{" "}
              {AverageReviews(yourMainProperty.reviews) + "⭐️"}
            </p>

            <p className="text-slate-600">
              {yourMainProperty.reviews.length} review
              {yourMainProperty.reviews.length > 1 ||
              yourMainProperty.reviews.length == 0
                ? "s"
                : ""}{" "}
              | Última avaliação por{" "}
              <span className="font-bold">
                {SortReviews(yourMainProperty.reviews)[0].name}
              </span>
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center mb-8">
          <p className="text-slate-800 my-8">
            Outros imóveis recomendados para você
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {properties.length > 0 &&
              properties.map((property) => (
                <PropertyCard
                  image={property.image}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                  isAvaliable={property.isAvaliable}
                  key={property.title}

                />
              ))}
          </div>
 
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
