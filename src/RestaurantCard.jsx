// RestaurantCard.js
const RestaurantCard = ({ name, description, image }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <h1>{name}</h1>
      <p>{description}</p>
      <button className="cta-button small">Learn More</button>
    </div>
  );
};

export default RestaurantCard;
