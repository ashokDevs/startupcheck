import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content mt-10">
      <nav>
        <header className="footer-title">Services</header>
        <Link href="" className="text-none">Branding</Link>
        <Link href="" className="text-none">Design</Link>
        <Link href="" className="text-none">Marketing</Link>
        <Link href="" className="text-none">Advertisement</Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link href="" className="text-none">About us</Link>
        <Link href="" className="text-none">Contact</Link>
        <Link href="" className="text-none">Jobs</Link>
        <Link href="" className="text-none">Press kit</Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <Link href="" className="text-none">Terms of use</Link>
        <Link href="" className="text-none">Privacy policy</Link>
        <Link href="" className="text-none">Cookie policy</Link>
      </nav>
      <form>
        <header className="footer-title">Newsletter</header>
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item w-52"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};
