import { APP_URL } from "../config";
import { ArrowRightIcon } from "./icons";
import Reveal from "./Reveal";

export default function ExistingCustomer() {
  return (
    <section className="existing-customer" id="existing-customer">
      <div className="section-inner existing-customer-inner">
        <Reveal direction="up" className="existing-customer-row">
          <p className="existing-customer-text">
            Already a customer or employee? Your team is waiting on Shiftline.
          </p>
          <a className="btn btn-primary" href={`${APP_URL}/login`}>
            Log in directly
            <ArrowRightIcon size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
