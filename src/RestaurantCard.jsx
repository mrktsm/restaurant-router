// RestaurantCard.js
const RestaurantCard = ({ name, description, image, link }) => {
  return (
    <div className="restaurant-card">
      <img src={image} alt={name} className="restaurant-image" />
      <h1>{name}</h1>
      <p>{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button small"
      >
        Learn More
      </a>
    </div>
  );
};

export default RestaurantCard;
