// TODO: Modify this function so that it accepts props from the parent component
export default function Card({id, name, description}) {
  // const id = props.id;
  // const name = props.name;
  // const description = props.description;

  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  // TODO: Update the return statement to display the data we received as props
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placedog.net/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">ID: {id}</p>
          <a href="#" className="btn btn-primary">
            Adopt {name}
          </a>
        </div>
      </div>
    </div>
  );
}
