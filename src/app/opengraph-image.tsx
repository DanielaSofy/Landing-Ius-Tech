import { ImageResponse } from "next/og";

export const alt = "Ius-Tech: software de gestión legal para abogados en México";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f7f4",
          padding: 72,
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              background: "#8c3041",
              borderRadius: 4,
            }}
          />
          <div style={{ fontSize: 34, fontWeight: 700, color: "#161d28" }}>
            Ius-Tech
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.15,
              color: "#161d28",
              fontWeight: 700,
              maxWidth: 900,
            }}
          >
            Tu despacho en orden. Tus plazos bajo control.
          </div>
          <div style={{ fontSize: 28, color: "#444c58", maxWidth: 860 }}>
            Expedientes, plazos SAT/TFJA, escritos con IA y reportes para
            clientes. Software legal hecho en México.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #cfcfc6",
            paddingTop: 28,
            fontSize: 22,
            color: "#6a7280",
          }}
        >
          <div>ius-tech.com.mx</div>
          <div>14 días de prueba, sin tarjeta</div>
        </div>
      </div>
    ),
    size
  );
}
