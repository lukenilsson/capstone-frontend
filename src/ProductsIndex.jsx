export function ProductsIndex(props) {
  console.log(props, "yo dawg");
  return (
    <div>
      <h1>Welcome to Scout: Webscraper!</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>MAP</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((product) => (
              <tr key={product.name}>
                <td className="product-name">{product.name}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-map-price">$14.99</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
