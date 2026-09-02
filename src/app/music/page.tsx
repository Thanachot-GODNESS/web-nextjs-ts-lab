import MusicCard from "@/components/MusicCard";
import { music } from "@/data/musicdata";

export default function MusicPage() {
    return (
        <div className="musicPage">
            <h1 className="musicPage-title">วงดนตรี</h1>
            <section className="musicGrid">
                {music.map((band) => (
                    <MusicCard key={band.id} band={band} />
                ))}
            </section>
        </div>
    )
}