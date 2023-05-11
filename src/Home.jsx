import Scout_1 from "./images/MJ_Scout_1.png";

export function Home() {
  return (
    <div className="page-container">
      <div className="centered-container">
        <div className="centered-content">
          <h1>Welcome to Scout</h1>
          <div className="home-image">
            <img src={Scout_1} alt="My Image" />
          </div>
          <p>Chewy is selling # of products</p>
        </div>
      </div>
    </div>
  );
}
