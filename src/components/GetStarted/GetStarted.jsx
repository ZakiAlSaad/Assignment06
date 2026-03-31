import UserImage from "../../assets/user.png";
import PackageImage from "../../assets/package.png";
import RocketImage from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <>
      <section className="my-30 common-w mx-auto">
        <div className="container mx-auto">
          <header className="text-center space-y-3 py-5">
            <h1 className="text-5xl font-extrabold">Get Started in 3 Steps</h1>
            <p className="font-semibold text-[#627382]">
              Start using premium digital tools in minutes, not hours.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
            <div className="relative card card-body text-center shadow-lg bg-white card-border py-20 ">
              <img
                src={UserImage}
                alt=""
                className="w-fit mx-auto bg-[#f3e8fe] p-5 rounded-full"
              />
              <h1 className="text-2xl font-bold">Create Account</h1>
              <p className="font-semibold text-[#627382]">
                Sign up for free in seconds. No credit card <br /> required to
                get started.
              </p>
              <div className="absolute top-8 right-8">
                <span className="font-semibold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-3.5 py-3 object-cover rounded-full">
                  01
                </span>
              </div>
            </div>

            <div className="relative card card-body text-center shadow-lg bg-white card-border py-20 ">
              <img
                src={PackageImage}
                alt=""
                className="w-fit mx-auto bg-[#f3e8fe] p-5 rounded-full"
              />
              <h1 className="text-2xl font-bold">Choose Products</h1>
              <p className="font-semibold text-[#627382]">
                Browse our catalog and select the tools <br /> that fit your
                needs.
              </p>
              <div className="absolute top-8 right-8">
                <span className="font-semibold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-3.5 py-3 object-cover rounded-full">
                  02
                </span>
              </div>
            </div>

            <div className="relative card card-body text-center shadow-lg bg-white card-border py-20 ">
              <img
                src={RocketImage}
                alt=""
                className="w-fit mx-auto bg-[#f3e8fe] p-5 rounded-full"
              />
              <h1 className="text-2xl font-bold">Start Creating</h1>
              <p className="font-semibold text-[#627382]">
                Download and start using your premium <br /> tools immediately.
              </p>
              <div className="absolute top-8 right-8">
                <span className="font-semibold text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-3.5 py-3 object-cover rounded-full">
                  03
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
