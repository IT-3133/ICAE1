export default function Cart({ cartItems }) {
  return (
    <div className="table-container">
      <h4 className="card-title">Cart</h4>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>QTY</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <td>Grand Total:</td>
            <td colSpan="2">{}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
