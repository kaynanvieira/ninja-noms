import { useCart } from "../context/CartContext";

function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="toast-notification">
      <span>✓</span> {toastMessage}
    </div>
  );
}

export default Toast;