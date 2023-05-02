import FollowersSuggestion from "./components/FollowersSuggestion";
//import Header from "./components/Header";
import ItemTrends from "./components/ItemTrends";
import Search from "./components/Search";

function App() {
  return (
    <main className="bg-red-500 min-h-screen max-w-7xl mx-auto flex">
      <p>comp. list de items</p>
      {/* <div className="w-full border-x border-slate-200">
        <Header />
        <p>las tabs</p>
      </div> */}
      <aside className="bg-primary flex flex-col w-[350px] px-5">
        <div>
          <Search />
          <div className="bg-secondary rounded-xl">
            <h2 className="text-xl font-bold leading-none tracking-[0.4px] pb-4 text-slate-50 bold-text p-4">
              Qué está pasando
            </h2>
            {/* lista de tendencias */}
            {[...Array(4)].map((item, index) => {
              return <ItemTrends key={index} />;
            })}
            <div className="px-4 pb-4 pt-2 hover:bg-[#252e38] rounded-bl-xl rounded-br-xl cursor-pointer">
              <span className="text-medium text-button regular-text">
                Mostar más
              </span>
            </div>
          </div>
          <div className="bg-secondary rounded-xl mt-3">
            <h2 className="text-xl font-bold leading-none tracking-[0.4px] pb-4 text-slate-50 bold-text p-4">
              A quíen seguir
            </h2>
            {/* lista de sugerencia de seguidores */}
            {[...Array(3)].map((item, index) => {
              return (
                <div>
                  <FollowersSuggestion key={index} />
                </div>
              );
            })}
            <div className="px-4 pb-4 pt-2 hover:bg-[#252e38] rounded-bl-xl rounded-br-xl cursor-pointer">
              <span className="text-medium text-button regular-text">
                Mostar más
              </span>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <div className="flex flex-wrap gap-x-3 gap-y-[2px]">
              <span className="text-small tracking-[0.4px] text-slate-500 regular-text">
                Condiciones de Servicio
              </span>
              <span className="text-small tracking-[0.4px] text-slate-500 regular-text">
                Política de Privacidad
              </span>
              <span className="text-small tracking-[0.4px] text-slate-500 regular-text">
                Política de cookies
              </span>
              <span className="text-small tracking-[0.4px] text-slate-500 regular-text">
                Accesibilidad
              </span>
              <span className="text-small tracking-[0.4px] text-slate-500 regular-text">
                Información de anuncios
              </span>
              <span className="text-small tracking-[0.4px] text-slate-500 regular-text">
                Más opciones
              </span>
              <span className="text-small tracking-[0.4px] text-slate-500 regular-text">
                © 2023
              </span>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}

export default App;
