import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="bg-black p-6 h-[100vh] flex flex-col gap-16 justify-center">
      <h1 className="text-4xl text-yellow-500 font-bold">GET IN TOUCH</h1>
      <p>
        If a moment made you pause, <br />
        tell me about it.
      </p>

      <div className="mt-24">
        <div className="flex gap-2 items-center">
          <InstagramLogo size={24} />
          <p>@jolinejuarsa</p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <WhatsappLogo size={24} />
          <p>+64 853 3474 4898</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
