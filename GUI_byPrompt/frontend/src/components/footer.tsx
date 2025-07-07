/* eslint-disable @typescript-eslint/no-unused-vars */
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import type { Colors } from "../types/view";


export const Footer: React.FC<{ colors: Colors }> = ({colors}) => {

  return (
      <div
        style={{
          height: "10%",
          minHeight: "40px",
          background: colors.footerBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: colors.footerText,
          fontWeight: 500,
          fontSize: "1rem",
          letterSpacing: "1px",
          transition: "background 0.3s, color 0.3s",
        }}
      >
        © 2025 Web Link Platform. All rights reserved.
      </div>
  );
};

export default Footer;