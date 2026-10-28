import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Banknote,
  Check,
  MapPin,
  ShieldCheck,
  ShoppingBag,
} from "lucide-react";
import { cartLines, mockSubtotal, type CartItem } from "./cart";
import { money } from "./catalog";

export function DemoCheckout({ items }: { items: CartItem[] }) {
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [details, setDetails] = useState({
    name: "Demo Customer",
    phone: "",
    address: "",
    city: "Hyderabad",
    pincode: "",
  });
  const lines = cartLines(items);
  const subtotal = mockSubtotal(items);
  if (!lines.length)
    return (
      <main className="section empty-state">
        <ShoppingBag size={42} />
        <h1>Your celebration is waiting.</h1>
        <p>Add sample products to your demo cart before exploring checkout.</p>
        <Link className="button" to="/shop">
          Explore 60 sample products <ArrowRight size={17} />
        </Link>
      </main>
    );
  if (complete)
    return (
      <main className="section checkout-complete">
        <div className="completion-icon">
          <Check size={32} />
        </div>
        <div className="eyebrow">DEMO CHECKOUT COMPLETE</div>
        <h1>
          That’s how your
          <br />
          <em>celebration could begin.</em>
        </h1>
        <p>
          You’ve previewed the cash-on-delivery checkout experience. No order
          was placed, no products were reserved, and nothing was sent to the
          shop.
        </p>
        <div className="completion-receipt">
          <div>
            <span>Sample items</span>
            <strong>{lines.reduce((n, i) => n + i.quantity, 0)}</strong>
          </div>
          <div>
            <span>Mock merchandise total</span>
            <strong>{money(subtotal)}</strong>
          </div>
          <div>
            <span>Payment preview</span>
            <strong>Cash on delivery</strong>
          </div>
        </div>
        <p className="fine-print">
          The cart is kept so you can continue testing. Availability and
          delivery in Hyderabad are unverified.
        </p>
        <Link className="button" to="/shop">
          Keep exploring <ArrowRight size={17} />
        </Link>
      </main>
    );
  return (
    <main className="section checkout-page">
      <Link className="text-link" to="/shop">
        <ArrowLeft size={15} /> Continue exploring
      </Link>
      <div className="checkout-header">
        <div className="eyebrow">A FEW DETAILS. A LITTLE MORE JOY.</div>
        <h1>Your celebration, almost ready.</h1>
        <p>
          Demo checkout · Fictional products and mock prices · No real order
          will be placed
        </p>
      </div>
      <div className="checkout-steps">
        <span className="done">
          01 <b>Your cart</b>
        </span>
        <i />
        <span className={step === 1 ? "current" : "done"}>
          02 <b>Delivery preview</b>
        </span>
        <i />
        <span className={step === 2 ? "current" : ""}>
          03 <b>Review & COD</b>
        </span>
      </div>
      <div className="checkout-grid">
        <div>
          {step === 1 ? (
            <form
              className="checkout-form"
              onSubmit={(e) => {
                e.preventDefault();
                setStep(2);
                window.scrollTo(0, 0);
              }}
            >
              <div className="checkout-card-heading">
                <MapPin size={22} />
                <h2>Delivery details</h2>
              </div>
              <p className="demo-form-note">
                Use fictional details to test the form. Details remain in this
                page’s memory and are never submitted or saved.
              </p>
              <div className="checkout-fields">
                <label>
                  Full name
                  <input
                    required
                    autoComplete="off"
                    minLength={2}
                    value={details.name}
                    onChange={(e) =>
                      setDetails({ ...details, name: e.target.value })
                    }
                    placeholder="Demo Customer"
                  />
                </label>
                <label>
                  Mobile number
                  <input
                    required
                    autoComplete="off"
                    type="tel"
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    value={details.phone}
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        phone: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    placeholder="10-digit sample mobile"
                  />
                  <small>
                    For form testing only; no calls or messages are sent.
                  </small>
                </label>
                <label className="wide-field">
                  Address
                  <textarea
                    required
                    minLength={10}
                    autoComplete="off"
                    value={details.address}
                    onChange={(e) =>
                      setDetails({ ...details, address: e.target.value })
                    }
                    placeholder="Use a fictional street and building for this demo"
                    rows={3}
                  />
                </label>
                <label>
                  City
                  <input value={details.city} readOnly />
                </label>
                <label>
                  PIN code
                  <input
                    required
                    autoComplete="off"
                    inputMode="numeric"
                    pattern="[1-9][0-9]{5}"
                    maxLength={6}
                    value={details.pincode}
                    onChange={(e) =>
                      setDetails({
                        ...details,
                        pincode: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    placeholder="6-digit sample PIN"
                  />
                  <small>
                    Format validation only; delivery coverage is unverified.
                  </small>
                </label>
              </div>
              <button className="button checkout-next" type="submit">
                Continue to review <ArrowRight size={17} />
              </button>
            </form>
          ) : (
            <div className="checkout-form">
              <div className="checkout-card-heading">
                <ShieldCheck size={22} />
                <h2>Review your demo</h2>
              </div>
              <div className="delivery-review">
                <div>
                  <h3>Delivery details preview</h3>
                  <button className="text-link" onClick={() => setStep(1)}>
                    Edit details
                  </button>
                </div>
                <strong>{details.name}</strong>
                <p>
                  {details.address}
                  <br />
                  {details.city} · {details.pincode}
                  <br />
                  {details.phone}
                </p>
              </div>
              <div className="payment-option">
                <Banknote size={27} />
                <div>
                  <strong>Cash on delivery</strong>
                  <p>
                    The only payment option in this demo. No card or payment
                    details required.
                  </p>
                </div>
                <Check size={19} />
              </div>
              <div className="checkout-notice">
                <ShieldCheck size={20} />
                <p>
                  This is a visual checkout simulation. Hyderabad stock,
                  permitted supply, service coverage, delivery fees, taxes, and
                  timelines have not been confirmed. No order is submitted.
                </p>
              </div>
              <button
                className="button checkout-next"
                onClick={() => {
                  setComplete(true);
                  setDetails({
                    name: "",
                    phone: "",
                    address: "",
                    city: "Hyderabad",
                    pincode: "",
                  });
                  window.scrollTo(0, 0);
                }}
              >
                Complete demo checkout <ArrowRight size={17} />
              </button>
            </div>
          )}
        </div>
        <aside className="checkout-summary">
          <div className="checkout-card-heading">
            <ShoppingBag size={20} />
            <h2>Your celebration</h2>
          </div>
          <div className="checkout-lines">
            {lines.map((line) => (
              <div className="checkout-line" key={line.id}>
                <img
                  src={`/images/product-${line.image}.webp`}
                  alt={`${line.name} category illustration`}
                  loading="lazy"
                />
                <div>
                  <strong>{line.name}</strong>
                  <small>
                    {line.pack} · Qty {line.quantity}
                  </small>
                  <span>
                    {money(line.lineTotal)} <em>mock</em>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-totals">
            <div>
              <span>Mock merchandise subtotal</span>
              <strong>{money(subtotal)}</strong>
            </div>
            <div>
              <span>Delivery charges</span>
              <span>Not configured</span>
            </div>
            <div>
              <span>Taxes</span>
              <span>Not configured</span>
            </div>
            <div className="checkout-total">
              <span>Mock merchandise total</span>
              <strong>{money(subtotal)}</strong>
            </div>
          </div>
          <p className="fine-print">
            Sample prices are for design testing. This is not a payable quote.
          </p>
        </aside>
      </div>
    </main>
  );
}
