import { Music } from "@/types/music"
import Image from "next/image";

type MusicCardProps = { 
  band: Music; 
};

export default function MusicCard({ band }: MusicCardProps){
    return(
        <article className="musicCard">
            <div className="musicCard-media">
                <Image src={band.image} alt={band.name} width={400} height={300} />
            </div>
            <div className="musicCard-body">
                <h2 className="musicCard-name">{band.name}</h2>
                <p className="musicCard-genre">{band.songtype}</p>
                <hr className="musicCard-divider" />
                <p className="musicCard-row">
                    <span className="musicCard-label">สมาชิกวง</span>
                    {band.member}
                </p>
                <p className="musicCard-row">
                    <span className="musicCard-label">ประวัติโดยย่อ</span>
                    {band.history}
                </p>
            </div>
        </article>
    )
}