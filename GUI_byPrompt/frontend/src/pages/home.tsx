import React from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menu } from "primereact/menu";
import { OverlayPanel } from "primereact/overlaypanel";

const dropdownItems = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];
// Define the icon data as a JSON array
const iconData = [
  {
    logo: "pi pi-github",
    description: "GitHub",
    href: "https://github.com",
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter",
    href: "https://twitter.com",
  },
  {
    logo: "pi pi-globe",
    description: "Website",
    href: "https://primereact.org",
  },
  // Add more items as needed
];


  // Example user data
  const userName = "John Doe";
  const logoutUrl = "https://your-logout-url.com";

  const menuItems = [
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => {
        window.location.href = logoutUrl;
      },
    },
  ];

export const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const op = React.useRef<OverlayPanel>(null);
  return (
    <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div
        style={{
          height: "10%",
          minHeight: "60px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          background: "#f5f5f5",
        }}
      >
      {/* Web Logo and Name Panel at 2% from left */}
        <div
          style={{
            position: "absolute",
            left: "2%",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            userSelect: "none",
          }}
        >
          {/* Square Logo */}
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "#1976d2",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "8px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
              letterSpacing: "2px",
            }}
          >
            WLP
          </div>
          {/* Web GUI Name */}
          <span style={{ fontWeight: 600, fontSize: "1.1rem", color: "#222" }}>
            Web Link Platform
          </span>
        </div>

        {/* Centered Search Box */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "15%",
          }}
        >
          <InputText placeholder="Search..." style={{ width: "100%" }} />
        </div>
        {/* Dropdown at 70% from left */}
        <div
          style={{
            position: "absolute",
            left: "70%",
            width: "15%",
          }}
        >
          <Dropdown
            value={selectedOption}
            options={dropdownItems}
            onChange={(e) => setSelectedOption(e.value)}
            placeholder="Select"
            style={{ width: "100%" }}
          />
        </div>
        {/* User Panel at 2% from right */}
        <div
          style={{
            position: "absolute",
            right: "2%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            background: "#fff",
            borderRadius: "20px",
            padding: "6px 16px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            userSelect: "none",
          }}
          onClick={(e) => op.current?.toggle(e)}
        >
          <span className="pi pi-user" style={{ marginRight: "8px" }} />
          <span>{userName}</span>
        </div>
        <OverlayPanel ref={op}>
          <Menu model={menuItems} />
        </OverlayPanel>
      </div>

      {/* Body */}
      <div style={{ height: "80%", display: "flex", flex: 1 }}>
        {/* Left Bar */}
        <div
          style={{
            width: "10%",
            minWidth: "60px",
            background: "#e0e0e0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <Button icon="pi pi-home" className="p-button-rounded p-button-text" aria-label="Home" />
          <Button icon="pi pi-user" className="p-button-rounded p-button-text" aria-label="User" />
          <Button icon="pi pi-cog" className="p-button-rounded p-button-text" aria-label="Settings" />
        </div>
        {/* Main Content */}
        <div style={{ flex: 1, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", gap: "40px" }}>
            {iconData.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  width: "100px",
                }}
                onClick={() => window.open(item.href, "_blank")}
              >
                <span className={item.logo} style={{ fontSize: "2rem", marginBottom: "8px" }} />
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          height: "10%",
          minHeight: "40px",
          background: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Footer Content
      </div>
    </div>
  );
};

export default Home;