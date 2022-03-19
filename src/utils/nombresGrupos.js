import imagen1 from '../img1/images1.jpg'
import imagen2 from '../img1/images2.jpg'
import imagen3 from '../img1/images3.jpg'
import imagen4 from '../img1/images4.jpg'


const GruposWs = [
  {
    nombre: "Fiestas para solteros",
    img:imagen1,
    nameChat: "Sex parties nearby 👏",
  },
  {
    nombre: "Sex mi polla hot",
    img:imagen2,
    nameChat: "Sex parties nearby 2👏",
  },
  {
    nombre: "Hot sex 2",
    img:imagen3,
    nameChat: "Sex parties nearby 3👏",
  },
  {
    nombre: "Intercambiar nudes",
    img:imagen4,
    nameChat: "Sex parties nearby 4👏",
  },
];

export const generalNombreRandom = () =>
  GruposWs[Math.floor(Math.random() * GruposWs.length)];
