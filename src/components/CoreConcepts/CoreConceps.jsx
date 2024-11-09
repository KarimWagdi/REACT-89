import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../../data";
import './CoreConcepts.css'

export default function CoreConcept (){
    return(
        <>
            <section id="core-concepts">
                <h2> Core Concepts </h2>
                <ul>
                    {CORE_CONCEPTS.map((item) => <CoreConcepts {...item} />)}
                </ul>
            </section>
        </>
    )
}