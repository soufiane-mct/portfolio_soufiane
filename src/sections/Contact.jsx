import { Particles } from "../components/Particles";
import Alert from "../components/Alert";
import CopyEmailButton from "../components/CopyEmailButton";
const Contact = () => {
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>
        <div className="w-full flex flex-col items-center justify-center py-8 gap-4">
          <p className="text-lg font-semibold text-center text-lavender bg-white/10 rounded-lg px-6 py-4 shadow-lg flex flex-col items-center gap-2">
            Contact me at my Gmail:<br />
            <span className="text-royal break-all">soufianemechta45@gmail.com</span>
          </p>
          <CopyEmailButton email="soufianemechta45@gmail.com" />
        </div>
      </div>
    </section>
  );
};

export default Contact;

