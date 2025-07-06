/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { isValidElement, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Menu } from "primereact/menu";
import { OverlayPanel } from "primereact/overlaypanel";
import { InputSwitch } from "primereact/inputswitch";

// const dropdownItems = [
//   { label: "Option 1", value: "1" },
//   { label: "Option 2", value: "2" },
//   { label: "Option 3", value: "3" },
// ];
// Define the icon data as a JSON array
const iconDataSet = {
  "changyly_1":[
  {
    logo: "pi pi-github",
    description: "GitHub",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_1",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_1",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_1",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_2",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_2",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_2",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_3",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_3",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_3",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_4",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_4",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_4",
    href: "https://primereact.org",
    isValid:true,
  },
  // Add more items as needed
],"changyly_2":[  
  {
    logo: "pi pi-github",
    description: "GitHub_1",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_1",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_1",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_2",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_2",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_2",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_3",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_3",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_3",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_4",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_4",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_4",
    href: "https://primereact.org",
    isValid:true,
  },
  // Add more items as needed
],"changyly_3":[
  {
    logo: "pi pi-github",
    description: "GitHub_2",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_2",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_2",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_3",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_3",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_3",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_4",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_4",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_4",
    href: "https://primereact.org",
    isValid:true,
  },
  // Add more items as needed
],"changyly_4":[
  {
    logo: "pi pi-github",
    description: "GitHub_3",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_3",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_3",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "pi pi-github",
    description: "GitHub_4",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "pi pi-twitter",
    description: "Twitter_4",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "pi pi-globe",
    description: "Website_4",
    href: "https://primereact.org",
    isValid:true,
  },
  // Add more items as needed
],

};


  // Example user data
  // const userName = "John Doe";
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

export const WebGui: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const op = React.useRef<OverlayPanel>(null);
  const [showLeftBar, setShowLeftBar] = React.useState<boolean>(true);
  const [userName, setUserName] = React.useState<string | null>(null);
  type DropdownItem = { label: string; value: string };
  const [dropdownItems, setDropdownItems] = React.useState<DropdownItem[] | null>([]);
  type IconItem = { logo: string; description: string; href: string; isValid: boolean };
  const [iconData, setIconData] = React.useState<IconItem[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<string| null>(dropdownItems!=null?"1":null);
  const [loading, setLoading] = React.useState<string>("block");
  // const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const handleSetUserName = () => {    
    setTimeout(() => {
    setUserName('changyly')
    }, 3000);
  }
  const handleSetDropdownItems = () => {
    setTimeout(() => {
        setDropdownItems( [
      { label: "300mm", value: "1" },
      { label: "EBO"  , value: "2" },
      { label: "APOD" , value: "3" },
      { label: "3DIC" , value: "4" },
    ])
    }, 3000);
  }
  type IconDataSetKey = keyof typeof iconDataSet;
  const handleSetIconData = (userName: string, fab: string) => {
    console.log("handleSetIconData", userName, fab);
    setIconData([]);
    setLoading("block");
    setTimeout(() => {
    setLoading("none");
      const list = iconDataSet[userName+'_'+fab as IconDataSetKey];
      setIconData(list || []);
    }, 10000);
  }
  useEffect(() => {
      handleSetUserName()
      handleSetDropdownItems()
  })
  useEffect(() => {
    if (userName && selectedOption) {
      handleSetIconData(userName, selectedOption);
    }
    // Simulate fetching user data
  }, [userName, selectedOption]);
  // Color palettes for light and dark mode
  const colors = darkMode
    ? {
        headerBg: "#00838f",
        headerText: "#fff",
        logoBg: "#FFD306",
        logoText: "#fff",
        leftBarBg: "#538D8D",
        leftBarIconBg: "#B3D9D9",
        leftBarIcon: "#fff",
        bodyBg: "#23272f",
        iconPanelBg: "#263238",
        iconPanelShadow: "0 2px 12px rgba(40, 53, 147, 0.18)",
        iconActive: "#90caf9",
        footerBg: "#11151c",
        footerText: "#fff",
        dropdownBg: "#23272f",
        dropdownText: "#fff",
        userPanelBg: "#263238",
        userPanelText: "#90caf9",
        searchBoxBg: "#23272f",
        searchBoxText: "#fff",
      }
    : {
        headerBg: "#81C0C0",        // Deep indigo for header
        headerText: "#fff",
        logoBg: "#FFD306",          // Green for logo
        logoText: "#fff",
        leftBarIconBg: "#fff",
        leftBarBg: "#B3D9D9",       // Teal for left bar
        leftBarIcon: "#37474f",
        bodyBg: "#f5f7fa",          // Light gray for body
        iconPanelBg: "#fff",
        iconPanelShadow: "0 2px 12px rgba(25, 118, 210, 0.08)",
        iconActive: "#1976d2",      // Indigo for icons
        footerBg: "#263238",        // Blue gray for footer
        footerText: "#fff",
        dropdownBg: "#fff",
        dropdownText: "#222",
        userPanelBg: "#fff",
        userPanelText: "#1976d2",
        searchBoxBg: "#e3f2fd",
        searchBoxText: "#222",
      };

  // Filter icons by search (case-insensitive, match in description)
  const filteredIcons = iconData.filter(item =>
    item.description.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: colors.bodyBg,
        transition: "background 0.3s",
      }}
    >
      {/* Header */}
      <div
        style={{
          height: "10%",
          minHeight: "60px",
          display: "flex",
          alignItems: "center",
          position: "relative",
          background: colors.headerBg,
          color: colors.headerText,
          boxShadow: "0 2px 8px rgba(40, 53, 147, 0.08)",
          transition: "background 0.3s, color 0.3s",
        }}
      >
        {/* Hamburger at 2% width */}
        <Button
          icon="pi pi-bars"
          className="p-button-rounded p-button-text"
          style={{
            position: "absolute",
            left: "1%",
            top: "50%",
            transform: "translateY(-50%)",
            color: colors.headerText,
            fontSize: "1.0rem",
            zIndex: 3,
            background: "transparent",
            border: "none",
          }}
          aria-label="Toggle Left Bar"
          onClick={() => setShowLeftBar((prev) => !prev)}
        />

        {/* Web Logo and Name Panel at 5.5% from left (move right to avoid hamburger) */}
        <div
          style={{
            position: "absolute",
            left: "5.5%",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            userSelect: "none",
            marginLeft: "20px",
          }}
        >
          {/* Square Logo */}
          <div
            style={{
              width: "60px",
              height: "60px",
              background: colors.logoBg,
              color: colors.logoText,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "1.2rem",
              borderRadius: "8px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
              letterSpacing: "2px",
            }}
          >
            WLP
          </div>
          {/* Web GUI Name */}
          <span style={{ fontWeight: 600, fontSize: "1.1rem", color: colors.headerText }}>
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
          <InputText
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: "100%",
              borderRadius: "20px",
              border: "none",
              padding: "8px 16px",
              background: colors.searchBoxBg,
              color: colors.searchBoxText,
              transition: "background 0.3s, color 0.3s",
            }}
          />
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
            options={dropdownItems || []}
            onChange={(e) => setSelectedOption(e.value)}
            placeholder="Select"
            style={{
              width: "100%",
              borderRadius: "20px",
              background: colors.dropdownBg,
              color: colors.dropdownText,
              border: "none",
              transition: "background 0.3s, color 0.3s",
            }}
            panelStyle={{
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(40, 53, 147, 0.10)",
            }}
          />
        </div>
        {/* User Panel at 7% from right */}
        <div
          style={{
            position: "absolute",
            right: "7%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            background: colors.userPanelBg,
            borderRadius: "20px",
            padding: "6px 16px",
            boxShadow: "0 1px 4px rgba(40, 53, 147, 0.10)",
            userSelect: "none",
            color: colors.userPanelText,
            fontWeight: 500,
            transition: "background 0.3s, color 0.3s",
          }}
          onClick={(e) => op.current?.toggle(e)}
        >
          <span className="pi pi-user" style={{ marginRight: "8px" }} />
          <span>{userName}</span>
        </div>
        {/* Dark mode switch at 1% from right */}
        <div
          style={{
            position: "absolute",
            right: "1%",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            zIndex: 2,
          }}
        >
          <span className="pi pi-moon" style={{ color: colors.headerText, fontSize: "1.1rem" }} />
          <InputSwitch checked={darkMode} onChange={e => setDarkMode(e.value as boolean)} />
        </div>
        <OverlayPanel ref={op}>
          <Menu model={menuItems} />
        </OverlayPanel>
      </div>

      {/* Body */}
      <div style={{
          height: "80%",
          display: "flex",
          flex: 1,
          minHeight: 0, // For flexbox scroll
          position: "relative",
        }}>        
        {/* Left Bar */}
        {showLeftBar && (
          <div
            style={{
              width: "10%",
              minWidth: "60px",
              background: colors.leftBarBg,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              boxShadow: "2px 0 8px rgba(0, 131, 143, 0.08)",
              transition: "background 0.3s",
            }}
          >
            <Button
              icon="pi pi-home"
              className="p-button-rounded p-button-text"
              aria-label="Home"
            style={{ color: colors.leftBarIcon, fontSize: "1.5rem", background: colors.leftBarIconBg }}
            />
            <Button
              icon="pi pi-user"
              className="p-button-rounded p-button-text"
              aria-label="User"
            style={{ color: colors.leftBarIcon, fontSize: "1.5rem", background: colors.leftBarIconBg  }}
            />
            <Button
              icon="pi pi-cog"
              className="p-button-rounded p-button-text"
              aria-label="Settings"
            style={{ color: colors.leftBarIcon, fontSize: "1.5rem", background: colors.leftBarIconBg  }}
            />
          </div>
        )}
        {/* Main Content */}
        <div
          style={{
            flex: 1,
            background: colors.bodyBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s",
            height: "100%",
            minHeight: 0,
            overflow: "auto", // Enable vertical scroll if content overflow
            // paddingTop: "32px", // Add top padding to prevent header overlap
          }}
        >
          {loading !== "none" && (
            <i className="pi pi-spin pi-spinner" 
            style={{ fontSize: '2rem', display: 'block' , color: darkMode ? "#fff" : "#222",}}></i>
          )}
          {loading !== "block" && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap", // Allow items to wrap to new lines
              gap: "40px",
              // background: colors.iconPanelBg,
              padding: "32px 48px",
              // borderRadius: "18px",
              // boxShadow: colors.iconPanelShadow,
              // transition: "background 0.3s, box-shadow 0.3s",
              justifyContent: "left", // Center items on each line
              maxWidth: "90%",        
              // position: "relative",        
              // top: "45%",    
              height: "100%",
            }}
          >
            {filteredIcons.length === 0 ? (
              <span style={{ color: "#aaa", fontSize: "1.1rem" }}>No related items found.</span>
            ) : (
              filteredIcons.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: item.isValid ? "pointer" : "not-allowed",
                    width: "110px",
                    padding: "18px 8px",
                    borderRadius: "12px",
                    transition: "background 0.2s, box-shadow 0.2s",
                    boxShadow: "0 1px 4px rgba(40, 53, 147, 0.06)",
                    background: darkMode ? "#263238" : "#f1f8e9",
                    opacity: item.isValid ? 1 : 0.4,
                    filter: item.isValid ? "none" : "grayscale(0.7)",
                    pointerEvents: item.isValid ? "auto" : "none",
                    height: "100px",
                  }}
                  onClick={() => item.isValid && window.open(item.href, "_blank")}
                  onMouseOver={e => {
                    if (item.isValid) e.currentTarget.style.background = darkMode ? "#37474f" : "#e3f2fd";
                  }}
                  onMouseOut={e => {
                    if (item.isValid) e.currentTarget.style.background = darkMode ? "#263238" : "#f1f8e9";
                  }}
                >
                  <span
                    className={item.logo}
                    style={{
                      fontSize: "2.2rem",
                      marginBottom: "10px",
                      color: item.isValid ? colors.iconActive : "#aaa",
                    }}
                  />
                  <span style={{
                    color: item.isValid ? (darkMode ? "#fff" : "#37474f") : "#aaa",
                    fontWeight: 500,
                    fontSize: "1rem"
                  }}>
                    {item.description}
                  </span>
                </div>
              ))
            )}
          </div>
          )}

        </div>
      </div>

      {/* Footer */}
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
    </div>
  );
};

export default WebGui;