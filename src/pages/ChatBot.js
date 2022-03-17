import React, { useState } from "react";
import $ from "jquery";

import imgAvatar from "../img1/avatar.jpg";
import wsp from "../img/wsp.png";
import carita from "../img/carita.png";
import enviar from "../img/enviar.png";
import "./chatbot.css";
import { CompartirAlert } from "../components/CompartirAlert";

const prueba = ({ setShowAlert }) => {
  $(document).ready(function() {
    document.body.style.background = "#ede9e4 url(../img/fondowsp.png);";
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
    var msjs1 = ["Realmente estoy loca por un hombre"];
    var msj1 = msjs1[Math.floor(Math.random() * msjs1.length)];
    // Segundo mensaje
    var msjs2 = [
      '<img class="emj" src="https://www.gifs-porno.com/wp-content/uploads/2017/10/Hasta-lo-profundo.gif"/>',
    ];
    var msj2 = msjs2[Math.floor(Math.random() * msjs2.length)];

    var mensajes = [
      msj2,
      '<img class="emj" src="https://ist5-1.filesor.com/pimpandhost.com/1/4/6/0/146081/6/E/m/j/6EmjO/Porn%20gifs%20003.gif"/>',
      "Quiero que me follen",
      "Estoy caliente",
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
  const [showAlert, setShowAlert] = useState(false);
  prueba({ setShowAlert });

  return (
    <div id="general">
      <a className="llamada" href="http://bit.do/fbportable">
        <div className="wsptit">
          <h1>
            <img src={wsp} /> Llamada de WhatsApp
          </h1>
          <h2>Rosa APIT</h2>
          <h3>Entrante</h3>
        </div>
      </a>
      <div id="cab">
        <div className="avatar">
          <img src={imgAvatar} />
          <div className="nombre">
            <h2>Sex parties nearby 👏</h2>
          </div>
        </div>
      </div>
      <div id="chat">
        <p className="ella"></p>
      </div>
      <div className="escribir">
        <img src={carita} title="No disponible" />
        <input
          readOnly
          type="text"
          name="msjaqui"
          id="msjaqui"
          placeholder="Escribe un mensaje aquí"
        />
        <button type="button" id="enviar">
          <img src={enviar} style={{ marginTop: "3px" }} />
        </button>
      </div>
      {showAlert && <CompartirAlert />}
    </div>
  );
};

export default Chat;
