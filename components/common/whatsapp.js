
import React, { useState } from "react";

const WhatsAppPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const whatsappLink = "https://wa.me/+919035264999?text=Hello!%20I'm%20interested%20in%20booking%20a%20hair%20color%20appointment%20or%20have%20a%20few%20questions%20about%20your%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information%20on%20the%20available%20options,%20pricing,%20and%20availability?%20Thank%20you!";

  return (
    <div>
      {/* Floating button to open WhatsApp */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "rgb(255, 168, 77)",
          color: "#fff",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
        }}
      >
        💬
      </button>

      {/* WhatsApp Pop-up */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: "rgb(255, 235, 214)",
            color: "#000",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 1000,
            maxWidth: "200px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          <p>Chat with us on WhatsApp!</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "",
              textDecoration: "none",
              fontWeight: "bold",
              marginTop: "8px",
              display: "inline-block",
            }}
          >
            Start Chat
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsAppPopup;
