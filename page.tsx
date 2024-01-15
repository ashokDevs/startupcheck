

import { InputForm } from "./Components/InputForm";

export default function Home() {
  return (
    <main>
      <div className="bg-base-100 herobg bg-cover flex text-center flex-col items-center overflow-x-hidden justify-between pt-32 px-4  h-screen w-screen lg:pt-20 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-screen mb-5 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h1 className="w-full text-center text-3xl mb-6 text-base-content font-sans md:text-7xl font-bold leading-[79.2px] tracking-tight  sm:text-4xl md:mx-auto">
              <span className="text-nowrap">10x MRR Growth</span> with
              Our SaaS <span className="text-nowrap">Marketing Checklist</span>
            </h1>
            <p className="text-base-content md:text-lg">
              Evaluate your 4Ps(Product,Price,Promotion,Process) for enhanced
              customer acquisition and retention with The SaaS Marketing
              Checklist!
            </p>
          </div>
          {/*         <form className="flex flex-col items-center w-full mb-4 gap-4 md:flex-row">
          <input
            placeholder="Name"
            required
            type="text"
            className="flex-grow  input input-bordered input-primary w-full max-w-xs"
          />
          <input
            placeholder="Email"
            required
            type="text"
            className="flex-grow input input-bordered input-primary w-full max-w-xs"
          />name
        </form> */}

          <div className="card shrink-0  items-center w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="you@gmail.com"
                  className="input input-bordered"
                  /*              value={email}
                  onChange={(e) => setEmail(e.target.value)} */
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn btn-wide  btn-primary  text-xl"
                  /*                   onClick={(e) => handleJoinWaitlist(e)} */
                >
                  Submit
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-right-tail"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 15l3 -3l-3 -3" />
                    <path d="M3 15l3 -3l-3 -3" />
                    <path d="M6 12l15 0" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <br />
        </div>
      </div>
    </main>
  );
}
