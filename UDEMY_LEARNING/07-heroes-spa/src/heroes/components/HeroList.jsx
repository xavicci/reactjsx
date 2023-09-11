import { HeroCard } from "./HeroCard";
import { getHeroByPublisher } from "../helpers"
import { useMemo } from "react";

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map(heroe => {
                    return <HeroCard
                        key={heroe.id}
                        {...heroe}
                    />
                })
            }
        </div>
    )
}
