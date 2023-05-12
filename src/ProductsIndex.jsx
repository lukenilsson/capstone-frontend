export function ProductsIndex(props) {
  const currentDate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  console.log(props, "yo dawg");
  return (
    <div className="page-container">
      <h1>{currentDate}</h1>
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
