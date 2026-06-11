import IconCart from "../../assets/images/icon-cart.png";
import { useState, useContext } from "react";
import { formatCurrency } from "../../utils/format-currency";
import { CartContext } from "../contexts/CartContext";

export const ShoppingCard = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

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

  return (
    <>
     <button
  className="relative cursor-pointer"
  onClick={() => setCartIsOpen(!cartIsOpen)}
>
  <img src={IconCart} alt="Ícone carrinho de compras" />

  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
      {cart.length}
    </span>
  )}
</button>

      <div
        className={`${
          cartIsOpen
            ? "w-full bg-black/70 visible"
            : "bg-transparent invisible"
        } fixed top-0 bottom-0 left-0 right-0 z-50`}
        onClick={() => setCartIsOpen(false)}
      >
        <div
          className={`${
            cartIsOpen ? "translate-x-0" : "translate-x-full"
          } absolute top-0 right-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-75 md:w-106`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex justify-between items-center px-6">
            <p className="text-2xl font-semibold">
              Carrinho ({cart.length})
            </p>

            <button
              className="text-xl cursor-pointer"
              onClick={() => setCartIsOpen(false)}
            >
              X
            </button>
          </header>

          <ul className="p-4 overflow-y-auto scrollbar-hide h-[calc(100%-180px)] flex flex-col gap-3">
            {cart.length === 0 ? (
              <p className="text-center mt-10">
                Seu carrinho está vazio
              </p>
            ) : (
              cart.map((product) => (
                <li
                  key={product.id}
                  className="flex flex-col gap-1 px-6 border-b pb-4"
                >
                  <button
                    className="self-end text-xs cursor-pointer"
                    onClick={() => removeFromCard(product.id)}
                  >
                    X
                  </button>

                  <div className="flex gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                    />

                    <div className="flex flex-col items-start">
                      <p className="mb-1 text-sm font-medium">
                        {product.name}
                      </p>

                      <p className="mb-1 text-sm">
                        Quantidade: {product.quantity}
                      </p>

                      <p className="mb-1 text-sm">
                        <span className="font-bold mr-1.5">
                          {formatCurrency(product.price)}
                        </span>
                        à vista
                      </p>

                      <div className="border flex gap-6 py-1 px-3">
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

          <footer className="absolute bottom-0 left-0 w-full border-t bg-white p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Total:</span>

              <span className="text-xl font-bold">
                {formatCurrency(total)}
              </span>
            </div>

            <button className="w-full h-12 bg-black text-white rounded-xs cursor-pointer hover:bg-gray-800 transition-colors duration-300 ease-in-out">
              Finalizar Compra
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;