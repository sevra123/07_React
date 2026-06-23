function TravelCard({ destination }) {
  return (
    <article className="travel-card">
      <img
        className="travel-card-image"
        src={destination.image}
        alt={destination.name}
      />

      <div className="travel-card-content">
        <div className="travel-card-header">
          <div>
            <h2>{destination.name}</h2>
            <p className="country">{destination.country}</p>
          </div>
          <span className="rating">Rating: {destination.rating}</span>
        </div>
        <p className="description">{destination.description}</p>
        <div className="travel-card-footer">
          <span>{destination.duration}days</span>
          <strong>€ {destination.price}</strong>
        </div>
      </div>
    </article>
  );
}

export default TravelCard;
