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
import Footer from "../components/footer";
import Body from "../components/body";

// const dropdownItems = [
//   { label: "Option 1", value: "1" },
//   { label: "Option 2", value: "2" },
//   { label: "Option 3", value: "3" },
// ];
// Define the icon data as a JSON array
const iconDataSet = {
  "changyly_1":[
  {
    logo: "CN",
    description: "GitHub",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_1",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_1",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_1",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_2",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_2",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_2",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_3",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_3",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_3",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_4",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_4",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_4",
    href: "https://primereact.org",
    isValid:true,
  },
  // Add more items as needed
],"changyly_2":[  
  {
    logo: "CN",
    description: "GitHub_1",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_1",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_1",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_2",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_2",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_2",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_3",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_3",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_3",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_4",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_4",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_4",
    href: "https://primereact.org",
    isValid:true,
  },
  // Add more items as needed
],"changyly_3":[
  {
    logo: "CN",
    description: "GitHub_2",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_2",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_2",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_3",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_3",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_3",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_4",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_4",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_4",
    href: "https://primereact.org",
    isValid:true,
  },
  // Add more items as needed
],"changyly_4":[
  {
    logo: "CN",
    description: "GitHub_3",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_3",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
    description: "Website_3",
    href: "https://primereact.org",
    isValid:true,
  },
  {
    logo: "CN",
    description: "GitHub_4",
    href: "https://github.com",
    isValid:true,
  },
  {
    logo: "OBJ",
    description: "Twitter_4",
    href: "https://twitter.com",
    isValid:false,
  },
  {
    logo: "COM",
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

export const Home: React.FC = () => {
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
        bodyItemMouseOverBg: "#37474f",
        bodyItemMouseOutBg: "#263238",
        bodyItemText: "#fff",
        bodyItemLogoBg: "#B3D9D9",
        bodyItemLogoText: "#fff",
        footerBg: "#11151c",
        footerText: "#fff",
        dropdownBg: "#23272f",
        dropdownText: "#fff",
        userPanelBg: "#263238",
        userPanelText: "#90caf9",
        searchBoxBg: "#23272f",
        searchBoxText: "#fff",
        loading: "#fff", // Loading spinner color
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
        bodyItemMouseOverBg: "#e3f2fd",      // Light blue for body items
        bodyItemMouseOutBg: "#f1f8e9", // Light gray for body items
        bodyItemText: "#37474f",       // Dark text for body items
        bodyItemLogoBg: "#B3D9D9",
        bodyItemLogoText: "#37474f",
        footerBg: "#263238",        // Blue gray for footer
        footerText: "#fff",
        dropdownBg: "#fff",
        dropdownText: "#222",
        userPanelBg: "#fff",
        userPanelText: "#1976d2",
        searchBoxBg: "#e3f2fd",
        searchBoxText: "#222",
        loading: "#222", // Loading spinner color
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
            left: "45%",
            transform: "translateX(-50%)",
            width: "18%",
            minWidth: "150px",
            maxWidth: "260px",
            zIndex: 1,
            pointerEvents: "auto",
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
              fontWeight: 500,
            }}
            className="custom-placeholder"
          />
          <style>
            {`
                .custom-placeholder::placeholder {
                  color: ${colors.searchBoxText};
                  opacity: 0.7;
                }
            `}
          </style>
        </div>
        {/* Right side controls: Dropdown, User Panel, Dark mode switch */}
        <div
          style={{
            position: "absolute",
            right: "1%",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "13px",
            zIndex: 2,
          }}
        >
          {/* Dropdown */}
          <div style={{ minWidth: "120px", width: "150px" }}>
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
              className="custom-dropdown-placeholder"
            />
            <style>
              {`
                  .custom-dropdown-placeholder .p-dropdown-label {
                    color: ${colors.dropdownText} !important;
                  }
                  .custom-dropdown-placeholder .p-dropdown-label.p-placeholder {
                    color: ${colors.dropdownText};
                    opacity: 0.7;
                  }
              `}
            </style>
          </div>
          {/* User Panel */}
          <div
        style={{
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
          minWidth: "90px",
        }}
        onClick={(e) => op.current?.toggle(e)}
          >
        <span className="pi pi-user" style={{ marginRight: "8px" }} />
        <span>{userName}</span>
          </div>
          {/* Dark mode switch */}
          <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
          >
        <span className="pi pi-moon" style={{ color: colors.headerText, fontSize: "1.1rem" }} />
        <InputSwitch checked={darkMode} onChange={e => setDarkMode(e.value as boolean)} />
          </div>
        </div>
        <OverlayPanel ref={op}>
          <Menu model={menuItems} />
        </OverlayPanel>
      </div>

      {/* Body */}
      <Body colors={colors} loading={loading} iconData={iconData} search={search} showLeftBar={showLeftBar} />

      {/* Footer */}      
      <Footer colors={colors} />
    </div>
  );
};

export default Home;