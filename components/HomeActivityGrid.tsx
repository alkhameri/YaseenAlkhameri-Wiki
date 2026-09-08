import { Disc3 } from "lucide-react";
import SpotifyNowPlaying from "./SpotifyNowPlaying";
import WikiActivityBox from "./WikiActivityBox";

export default function HomeActivityGrid() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      <SpotifyNowPlaying />
      <WikiActivityBox title="Outside engineering" icon={<Disc3 className="h-4 w-4" />}>
        <p className="text-sm leading-relaxed text-gray-700">
          Records, keyboards, and Pokémon cards.
        </p>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs">
          <a href="https://www.discogs.com/user/shugerun/collection" target="_blank" rel="noopener noreferrer">Vinyl collection</a>
          <a href="https://www.pkmn.gg/u/shugerun?tab=collection" target="_blank" rel="noopener noreferrer">Card collection</a>
          <a href="https://github.com/alkhameri/zmk-config" target="_blank" rel="noopener noreferrer">Keyboard firmware</a>
        </div>
      </WikiActivityBox>
    </div>
  );
}
