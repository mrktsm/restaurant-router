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
    name: "Garryowen Irish Pub",
    description:
      "Over 20 Irish whiskies, draft beers & traditional Irish fare along with weekly live music.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/36/67/bd/20201018-144215-largejpg.jpg?w=1000&h=-1&s=1",
  },
  {
    name: "Dobbin House Tavern",
    description:
      "A colonial restaurant offering candlelit elegance, abundant food, and gracious service that evoke the charm of two centuries ago.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fb/df/8a/photo0jpg.jpg?w=1400&h=-1&s=1",
  },
  {
    name: "Farnsworth House Tavern",
    description:
      "The Farnsworth House Inn is a bed and breakfast and tourist attraction located in Gettysburg, Pennsylvania. ",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/55/b0/0d/farnsworth-house-tavern.jpg?w=900&h=-1&s=1",
  },
  {
    name: "1863 Restaurant",
    description:
      "Casual bistro in the Wyndham Hotel offering a menu of American eats, from omelets to steak.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/c3/d9/65/1863-restaurant-at-the.jpg?w=800&h=-1&s=1",
  },
  {
    name: "Appalachian Brewing Company",
    description:
      "Open, airy brewery serves housemade beers & craft sodas alongside burgers & other casual bites.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/38/1a/51/photo1jpg.jpg?w=2000&h=-1&s=1",
  },
  {
    name: "Blue & Gray Bar & Grill",
    description:
      "Casual bistro in the Wyndham Hotel offering a menu of American eats, from omelets to steak.",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/72/59/47/20180326-132421-largejpg.jpg?w=1000&h=-1&s=1",
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
