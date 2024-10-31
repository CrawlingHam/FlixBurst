import { LayoutHeader, LayoutFooter } from '@/components/pages/Widgets';

interface HomePageProps {
  SignOut: () => void;
  chatbot: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ SignOut, chatbot }) => {
  return (
    <>
      <section>
        <div className="hero bg-base-200 min-h-[calc(100vh-64px)]">
          <div className="hero-content flex-col lg:flex-row">
            <div>
              <h1 className="text-5xl font-bold">Welcome</h1>
              <p className="py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                minima laboriosam maxime sed dignissimos harum provident itaque
                fugiat. A repellat aliquid inventore dolor tempora, omnis
                perferendis aspernatur quo nisi excepturi. Ex, ullam odio iusto
                esse necessitatibus doloremque repudiandae!
              </p>
              <button className="rounded-full bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700">
                Get Started
              </button>
            </div>
            <div>
              <button className="rounded-full bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700" onClick={chatbot}>
                Get Started
              </button>
            </div>
            <button
              className="rounded-full bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700"
              onClick={SignOut}
            >
              sign out
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
