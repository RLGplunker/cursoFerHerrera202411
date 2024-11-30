interface AudioPlayer{
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

// La destructuración es lo siguiente:

//--------------------------------------------------------
// > Inic forma tradicional de consultar cancion y autor: 
//--------------------------------------------------------
const audioPlayer: AudioPlayer = {
    audioVolumen: 10,
    songDuration: 20,
    song: "hei que andas haciendo por aquí",
    details: {
        author:"Julio Iglesias", year: 2024
    }    
};
const cancion: string = audioPlayer.song;
const autor: string = audioPlayer.details.author;
//--------------------------------------------------------
// > Fin forma tradicional de consultar cancion y autor: 
//--------------------------------------------------------

//--------------------------------------------------------
// > Inic forma nueva de consultar cancion y autor
//   a través de la destructuración de objetos 
//--------------------------------------------------------

const {song: songAudioPlayer } = audioPlayer; //<-- sintaxis: const {propiedad: nombrePropiedad} = objeto
console.log(`La canción es: ${songAudioPlayer}`);

const {details: detailsOfCanciona} = audioPlayer;
const { author: autorCancion} = detailsOfCanciona;

console.log (`El autor de la canción es: ${autorCancion}`);




export {};