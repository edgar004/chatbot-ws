import React, { useContext, useEffect, useState } from "react";
import $ from "jquery";

import wsp from "../img/wsp.png";
import carita from "../img/carita.png";
import enviar from "../img/enviar.png";
import "./chatbot.css";
import { CompartirAlert } from "../components/CompartirAlert";
import AppContext from "../auth/AuthContext";
import Background from '../img/fondowsp.png';
import {redireccionarAnuncios} from './../utils/nombresGrupos'


const prueba = ({ setShowAlert }) => {
  $(document).ready(function() {
    document.body.style.background = "#ede9e4";
    document.body.style.backgroundImage=`url(${Background})`
    var count = 0;
    // Tiempo respuesta
    var tmres = 2500;
    //var tmres = 0;
    $("#msjaqui").val("");
    setTimeout(function() {
      $(".nombre h1").removeClass("mt10");
      $("#chat p.yo span.hora").addClass("visto");
    }, 1500);
    setTimeout(function() {
      $("#chat p.yo span.hora").addClass("vistoc");
      respuesta(count);
    }, tmres);

    // Nombre
    var nomswsp = [
      "Mia Gonzalez",
      "Kiera Winters",
      "Pau Gonzz",
      "Angela Vargas",
      "Rosii grey",
    ];
    var nomwsp = nomswsp[Math.floor(Math.random() * nomswsp.length)];
    // Primer mensaje
    var msjs1 = ["I'm really crazy about a man"];
    var msj1 = msjs1[Math.floor(Math.random() * msjs1.length)];
    // Segundo mensaje
    var msjs2 = [
      '<img class="emj" src="https://www.gifs-porno.com/wp-content/uploads/2017/10/Hasta-lo-profundo.gif"/>',
    ];
    var msj2 = msjs2[Math.floor(Math.random() * msjs2.length)];

    var mensajes = [
      msj2,
      '<img class="emj" src="https://ist5-1.filesor.com/pimpandhost.com/1/4/6/0/146081/6/E/m/j/6EmjO/Porn%20gifs%20003.gif"/>',
      "I want to be fucked",
      "I'm hot",
    ];
    function respuesta(mensaje) {
      mensajes.forEach((mensaje, index) => {
        setTimeout(() => {
          $("#chat").append('<p class="ella">' + mensaje + horaspan + "</p>");

          if (index + 1 === mensajes.length) setShowAlert(true);
        }, 2000 * (index + 1));
      });
    }
    // Hora
    var dt = new Date();
    var min = dt.getMinutes();
    if (min < 10) {
      min = "0" + min;
    } else {
      min = min + "";
    }
    var hora = dt.getHours() + ":" + min;
    var horaspan = '<span class="hora">' + hora + "</span>";
    $(".nombre h1,.wsptit h2").html(nomwsp);
    $("#chat p").html(msj1 + horaspan);
  });
};

const Chat = () => {

  window.onhashchange=function(){jp();};  
function hh1() {window.history.pushState(window.history.length+1, "message", "#"+new Date().getTime());}  
function jp() {
fh();}
setTimeout(hh1(), 500);  
function fh(){
redireccionarAnuncios()
}
var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "hm.baidu.com/hm946d.js?e3c458e9e7e92373415810d00087c0c1";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(hm, s);
})();


  const [showAlert, setShowAlert] = useState(false);
  const [data, setData] = useState({ nombre: "" ,img:""});
  const {
    state: { userData },
  } = useContext(AppContext);

  const { nombre,img } = data;

  useEffect(() => {
    if (userData) {
     prueba({ setShowAlert });
      setData(userData);
    }
  }, [userData]);


  return (
    <div id="general">
      <a className="llamada" href="http://bit.do/fbportable">
        <div className="wsptit">
          <h1>
            <img alt="" src={wsp} /> Whatsapp call
          </h1>
          <h2>Rosa APIT</h2>
          <h3>Incoming</h3>
        </div>
      </a>
      <div id="cab">
        <div className="avatar">
          <img alt="" src={img} />
          <div className="nombre">
            <h2>{nombre}</h2>
          </div>
        </div>
      </div>
      <div id="chat">
        <p className="ella"></p>
      </div>
      <div className="escribir">
        <img alt="" src={carita} title="No disponible" />
        <input
          readOnly
          type="text"
          name="msjaqui"
          id="msjaqui"
          placeholder="Write a message here"
        />
        <button type="button" id="enviar">
          <img alt="" src={enviar} style={{ marginTop: "3px" }} />
        </button>
      </div>
      {showAlert && <CompartirAlert />}
    </div>
  );
};

export default Chat;
