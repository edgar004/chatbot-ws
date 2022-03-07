import React from "react";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#F5F6F2",
  fontFamily: "Segoe UI",
  headerBgColor: "#06A7E8",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#D8DADA",
  botFontColor: "#000",
  userBubbleColor: "#06A7E8",
  userFontColor: "#fff",
};

const Chat = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Lucia Lopez"
          placeholder="Escriba su mensaje"
          botAvatar="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"
          userAvatar="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
          //    recognitionEnable={true}
          //    floating={true}
          //    recognitionLang="es"
          steps={[
            {
              id: "1",
              message: "What is your name?",
              trigger: "2",
            },
            {
              id: "2",
              user: true,
              trigger: "3",
            },
            {
              id: "3",
              message: "Hi {previousValue}, nice to meet you!",
              end: true,
            },
          ]}
        />
        {/* <ChatBot
        headerTitle="Asistente de ventas"
        placeholder="Escriba su mensaje"
        botAvatar="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"
        userAvatar="https://microhealth.com/assets/images/illustrations/personal-user-illustration-@2x.png"
        recognitionEnable={true}
        floating={true}
        recognitionLang="es"
        steps={[
          {
            id: "1",
            message: `Hola! , ¿En qué te puedo ayudar?`,
            trigger: "usuario",
          },
          {
            id: "end",
            message: "Gracias por charlar!",
            end: true,
          },
        ]}
      /> */}
      </ThemeProvider>
    </div>
  );
};

export default Chat;
