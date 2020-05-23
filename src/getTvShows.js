import brooklyn from './brooklyn.jpg';
import walkingDead from './WalkingDead.jpg';
import ncis from './ncis.jpg';
import office from './office.jpg';
import supernatural from './supernatural.jpg';
import scrubs from './scrubs.jpg';


export default function getTvShows() {
    return [
        { title: 'Supernatural', image: supernatural, id: 'supernatural'},
        { title: 'Scrubs', image: scrubs, id: 'scrubs'},
        { title: 'The Office', image: office, id: 'theoffice'},
        { title: 'NCIS', image: ncis, id: 'ncis'},
        { title: 'The Walking Dead', image: walkingDead, id: 'walkingdead'},
        { title: 'Brooklyn 9-9', image: brooklyn, id: 'brooklyn'}

    ];
}