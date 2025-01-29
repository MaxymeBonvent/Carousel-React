import React, {useState} from 'react'

// Importation des images
import img1 from "../img/arbre.png"
import img2 from "../img/avion.png"
import img3 from "../img/champ.png"
import img4 from "../img/chat.png"
import img5 from "../img/cinéma.png"
import img6 from "../img/falaise.png"
import img7 from "../img/festival.png"
import img8 from "../img/montagne.png"
import img9 from "../img/ruisseau.png"
import img10 from "../img/volcan.png"

const Carousel = () => {
// --- VARIABLES D'ÉTAT --- //

// Numéro de l'image affichée
const [index, setIndex] = useState(0)

// --- VARIABLES DE BASE --- //

// Groupe d'images
const images = [
  img1, 
  img2, 
  img3, 
  img4, 
  img5, 
  img6, 
  img7, 
  img8, 
  img9, 
  img10, 
]

// Valeur de l'attribut alt
const altTxt = `Image n°${index}`
console.log(`altTxt == ${altTxt}.`)

// --- FONCTIONS --- //

// Affichage de l'image précédente
const AfficherImagePrecedente = () => {
  // Diminution ou non de la valeur de index selon sa valeur actuelle
  index == 0 ? console.log("C'est déjà la première image.") : setIndex(prec => prec-1)

  // Msg test valeurs
  console.log(`index == ${index}.`)
  console.log(`altTxt == ${altTxt}.`)

  // Msg test
  console.log("AfficherImagePrecedente() appelée.")
}

// Affichage de l'image suivante
const AfficherImageSuivante = () => {
  // Augmentation ou non de la valeur de index selon sa valeur actuelle
  index == images.length-1 ? console.log("C'est déjà la dernière image.") : setIndex(prec => prec+1)

  // Msg test valeurs
  console.log(`index == ${index}.`)
  console.log(`altTxt == ${altTxt}.`)

  // Msg test
  console.log("AfficherImageSuivante() appelée.")
}

// Affichage de l'image correspondant au radio cliqu
const AfficherImageRadio = (idxRadio) => {

  // Msg test valeur
  console.log(`idxRadio == ${idxRadio}.`)
  console.log(`index == ${index}.`)

  // Changement de la valeur de index seulement si le bouton cliqué n'est pas déjà sélectioné
  idxRadio == index ? console.log("Cette image est déjà affichée.") : setIndex(idxRadio)

  // Msg test valeurs
  console.log(`altTxt == ${altTxt}.`)

  // Msg test
  console.log("AfficherImageRadio() appelée.")
}

// --- RENDU --- //
  return (
    // DIV DU COMPOSANT CAROUSEL
    <div id="div_composant_Carousel">

      <h2>Carousel</h2>

      {/* DIV CONTENANT LES BOUTONS FLÈCHES, ET L'IMAGE ACTUELLE */}
      <div id="div_boutons_img">

        <button title="Afficher l'image précédente" onClick={() => AfficherImagePrecedente()}>&larr;</button>

          <img src={images[index]} alt={altTxt}></img>

        <button title="Afficher l'image suivante" onClick={() => AfficherImageSuivante()}>&rarr;</button>

      </div>

      {/* LISTE DE BOUTONS RADIOS */}
      <ul>
          {images.map((image, idx) => {
            return(
              <li key={idx}>
                <input title={`Afficher l'image ${idx+1}`} type="radio" name="bouton_carousel" onClick={() => AfficherImageRadio(idx)}/>
            </li>
            )
          })}
      </ul>

    </div>
  )
}

export default Carousel