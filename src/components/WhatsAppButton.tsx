import { WHATSAPP_URL } from "../config";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
