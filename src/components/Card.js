import "./Card.css";

function Card() {
  return (
    <div className="card-container">
      <section>
        <div>Forecast Today</div>
      </section>
      <div>
        <input type="text"></input>
        <button>Search</button>
      </div>
      <section>
        <div>Upcoming Forecasts</div>
      </section>
    </div>
  );
}

export default Card;
