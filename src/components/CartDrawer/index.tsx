import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { formatCurrency } from "../../utils/format-currency";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const {
    cart,
    removeFromCard,
    incrementInCard,
    decrementFromCard,
  } = useContext(CartContext);

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  /** Translate-x 0 -posição normal da drawer */
  /** Translate-x-full -posição fora da tela da drawer */

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-600 ease-in-out ${
        isOpen
          ? "visible bg-black/70 opacity-100"
          : "invisible bg-black/0 opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 right-0 h-full w-75 md:w-106 bg-white text-black pt-6 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between px-6">
          <p className="text-2xl font-semibold">
            Carrinho ({cart.length})
          </p>

          <button
            className="text-xl cursor-pointer"
            onClick={onClose}
          >
            ✕
          </button>
        </header>

        <ul className="h-[calc(100%-180px)] overflow-y-auto scrollbar-hide p-4 flex flex-col gap-3">
          {cart.length === 0 ? (
            <p className="mt-10 text-center">
              Seu carrinho está vazio
            </p>
          ) : (
            cart.map((product) => (
              <li
                key={product.id}
                className="flex flex-col gap-1 border-b px-6 pb-4"
              >
                <button
                  className="self-end cursor-pointer text-xs"
                  onClick={() => removeFromCard(product.id)}
                >
                  ✕
                </button>

                <div className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-16 w-16 object-cover"
                  />

                  <div className="flex flex-col items-start">
                    <p className="mb-1 text-sm font-medium">
                      {product.name}
                    </p>

                    <p className="mb-1 text-sm">
                      Quantidade: {product.quantity}
                    </p>

                    <p className="mb-1 text-sm">
                      <span className="mr-1.5 font-bold">
                        {formatCurrency(product.price)}
                      </span>
                      à vista
                    </p>

                    <div className="flex gap-6 border px-3 py-1">
                      <button
                        className="cursor-pointer"
                        onClick={() => decrementFromCard(product)}
                      >
                        -
                      </button>

                      <p>{product.quantity}</p>

                      <button
                        className="cursor-pointer"
                        onClick={() => incrementInCard(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>

        <footer className="absolute bottom-0 left-0 w-full  bg-white p-4 text-black">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-medium">Total:</span>

            <span className="text-xl font-bold">
              {formatCurrency(total)}
            </span>
          </div>

          <button className="h-12 w-full cursor-pointer rounded-xs bg-black text-white transition-colors duration-300 hover:bg-gray-800">
            Finalizar Compra
          </button>
        </footer>
      </div>
    </div>
  );
};