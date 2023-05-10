export function ProductsIndex(props) {
  console.log(props, "yo dawg");
  return (
    <div>
      <h1>Welcome to Scout: Webscraper!</h1>
      {props.products.map((product) => (
        <div key={product.name}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
