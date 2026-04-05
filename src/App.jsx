import { Link } from "react-router";

const App = () => {
  return (
    <>
      <div className="grid place-items-center mt-8 gap-6">
        <h2 className="text-3xl">
          Hi, there🖐️. Here you will find all the links 🔗
        </h2>

        <ul className="flex flex-col gap-2 list-decimal text-xl">
          <li>
            {" "}
            <Link
              to={"/autocomplete"}
              prefetch="intent"
              className="hover:underline underline-offset-4"
            >
              AutoComplete - component
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={"/tabs"}
              prefetch="intent"
              className="hover:underline underline-offset-4"
            >
              TabList - component
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
