import Search from "./Search";
import ItemTrends from "./ItemTrends";
import ShowMore from "./ShowMore";
import FollowersSuggestion from "./FollowersSuggestion";
import FooterAside from "./FooterAside";
import TitleCardAside from "./TitleCardAside";
import { listFollowsSuggestion, trends } from "../data/data";

export default function Aside() {
  return (
    <aside className="bg-primary hidden xl:flex flex-col max-w-[350px]">
      <div className="sticky top-0 overflow-hidden">
        <Search />
        <div className="bg-secondary rounded-xl">
          <TitleCardAside title="Qué está pasando" />

          {/* lista de tendencias */}
          {trends.map((item, index) => {
            return <ItemTrends key={index} item={item} />;
          })}

          <ShowMore title="Mostrar más" />
        </div>
        <div className="bg-secondary rounded-xl mt-3">
          <TitleCardAside title="A quíen seguir" />

          {/* lista de sugerencia de seguidores  */}
          {listFollowsSuggestion.map((item, index) => {
            return <FollowersSuggestion key={index} item={item} />;
          })}

          <ShowMore title="Mostrar más" />
        </div>
        <FooterAside />
      </div>
    </aside>
  );
}
