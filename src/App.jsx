import "./App.css";
import RestaurantCard from "./RestaurantCard";

const restaurants = [
  {
    name: "Lincoln Diner",
    description:
      "This enduring institution serving comfort food like eggs & coffee is always open.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/7c/f1/d7/lincoln-diner.jpg?w=2000&h=-1&s=1",
  },
  {
    name: "Food 101",
    description:
      "Gourmet New American dishes & pizza served in a basic, modern space with bold prints & fabrics.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/5b/25/cd/photo3jpg.jpg?w=2000&h=-1&s=1",
  },
  {
    name: "The Gettysburger Company",
    description:
      "Jumbo burgers & other homestyle classics are served with draft beer at this old-school restaurant.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f2/b7/f0/great-bar-at-gettysburger.jpg?w=1400&h=-1&s=1",
  },
  {
    name: "The Sushi Place",
    description: "Fresh and tasty sushi!",
    image: "/steak.jpg",
  },
  {
    name: "The Sushi Place",
    description: "Fresh and tasty sushi!",
    image: "/steak.jpg",
  },
  {
    name: "The Sushi Place",
    description: "Fresh and tasty sushi!",
    image: "/steak.jpg",
  },
];

function App() {
  return (
    <div className="container">
      <img src="/steak.jpg" alt="Steak Image" className="steak-image" />
      <div className="overlay"></div>
      <div className="text-content">
        <h1 className="title">Enjoy the</h1>
        <h2 className="title">Best Meals in Town</h2>

        <div className="subtitle-span">
          <h3 className="subtitle-secondary">
            Whether you're in the mood for a hearty steak or a light salad,
          </h3>
          <h3 className="subtitle-secondary">
            we have something to satisfy every craving.
          </h3>
        </div>

        <button className="cta-button">See More</button>
      </div>
      <div className="restaurant-cards">
        {restaurants.map((restaurant) => (
          <RestaurantCard {...restaurant} />
        ))}
        {/* You can add more RestaurantCard components */}
      </div>
    </div>
  );
}

export default App;
