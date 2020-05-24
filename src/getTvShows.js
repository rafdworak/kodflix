import brooklyn from './brooklyn.jpg';
import walkingDead from './WalkingDead.jpg';
import ncis from './ncis.jpg';
import office from './office.jpg';
import supernatural from './supernatural.jpg';
import scrubs from './scrubs.jpg';


export default function getTvShows() {
    return [
        { title: 'Supernatural', image: supernatural, id: 'supernatural', synopsis: 'Brothers Dean and Sam follow in their father%27s footsteps and set out to eliminate monsters, demons and other supernatural entities that exist on Earth.'},
        { title: 'Scrubs', image: scrubs, id: 'scrubs', synopsis: 'Intern John Dorian starts his medical career in a hospital crammed with unpredictable staffers and patients. His experiences teach him about the profession, friendship and life.'},
        { title: 'The Office', image: office, id: 'theoffice', synopsis: 'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.'},
        { title: 'NCIS', image: ncis, id: 'ncis', synopsis: 'Special Agent Leroy Jethro Gibbs is a skilled investigator. He leads a team of agents of the Naval Criminal Investigative Service%27s Major Case Response Team as they solve intense criminal cases.'},
        { title: 'The Walking Dead', image: walkingDead, id: 'walkingdead', synopsis: 'A group of survivors led by police officer Rick Grimes travel in search of a safe and secure home after a zombie apocalypse spreads across the USA.'},
        { title: 'Brooklyn 9-9', image: brooklyn, id: 'brooklyn', synopsis: 'Ray Holt, an eccentric commanding officer, and his diverse and quirky team of odd detectives solve crimes in Brooklyn, New York City.'}


    ];
}