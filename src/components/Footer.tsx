import logo from "@/assets/cyphernest-logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card py-10">
    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <img src={logo} alt="CypherNest" className="h-8 w-auto" />
      </div>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} CypherNest. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Home", "Services", "About", "Contact"].map((l) => (
          <button
            key={l}
            onClick={() =>
              document.querySelector(`#${l.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
