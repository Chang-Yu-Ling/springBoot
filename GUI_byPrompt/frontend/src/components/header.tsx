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
import type { Colors, DropdownItem } from "../types/view";

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

export const Header: React.FC<{ colors: Colors,dropdownItems:DropdownItem[]| null,userName:string| null,setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,darkMode:boolean}> 
= ({colors,dropdownItems,userName,setDarkMode,darkMode}) => {
  const [showLeftBar, setShowLeftBar] = React.useState<boolean>(true);
  const [search, setSearch] = React.useState<string>("");
  const op = React.useRef<OverlayPanel>(null);
  const [selectedOption, setSelectedOption] = React.useState<string| null>(dropdownItems!=null?"1":null);
  return (

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

  );
};

export default Header;