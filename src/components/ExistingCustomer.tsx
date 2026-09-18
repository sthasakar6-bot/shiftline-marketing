import { APP_URL } from "../config";
import { ArrowRightIcon } from "./icons";

export default function ExistingCustomer() {
  return (
    <div className="existing-customer-bar">
      <div className="section-inner existing-customer-inner">
        <p className="existing-customer-text">
          Already a customer or employee? Your team is waiting on Shiftline.
        </p>
        <a className="existing-customer-link" href={`${APP_URL}/login`}>
          Log in directly
          <ArrowRightIcon size={13} />
        </a>
      </div>
    </div>
  );
}
