export default function Cart({ cartItems }) {
  const grandTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

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
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price * item.qty}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Grand Total:</td>
            <td colSpan="2">{grandTotal}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
