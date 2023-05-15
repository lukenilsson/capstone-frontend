import React from "react";

export function ProductsIndex(props) {
  const currentDate = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," + encodeURI(createCSVData());
    const link = document.createElement("a");
    link.href = csvContent;
    link.download = "products.csv";
    link.click();
  };

  const createCSVData = () => {
    const headers = Array.from(document.querySelectorAll("#data-table th")).map(
      (th) => th.innerText
    );
    const rows = Array.from(
      document.querySelectorAll("#data-table tbody tr")
    ).map((row) => {
      const rowData = Array.from(row.querySelectorAll("td")).map(
        (td) => td.innerText
      );
      return rowData.join(",");
    });

    return [headers.join(","), ...rows].join("\n");
  };

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col">
          <h3>{currentDate}</h3>
        </div>
        <div className="col d-flex justify-content-end">
          <button className="btn btn-primary btn-sm" onClick={downloadCSV}>
            Download CSV
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table
          className="table table-primary table-striped table-hover"
          id="data-table"
        >
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
