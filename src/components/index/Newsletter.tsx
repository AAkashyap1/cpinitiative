import EmailForm from "../classes/EmailForm"

export default function Newsletter() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10" id="newsletter-headline">
            Sign up for our newsletter
          </h2>
          <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
            Get announcements for classes, contests, new initiatives & more!
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">

          <EmailForm listName={"general"} tag={"general"} wide/>
          <p className="mt-3 text-sm leading-5 text-gray-300">
            No spam emails. You can unsubscribe at any time!
          </p>
        </div>
      </div>
    </div>
  );
};