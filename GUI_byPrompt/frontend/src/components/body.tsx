/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { isValidElement, useEffect } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import type { Colors, IconItem } from "../types/view";

export const Body: React.FC<{ colors: Colors,loading:string,iconData:IconItem[],search:string ,showLeftBar:boolean}> 
= ({colors,loading,iconData,search,showLeftBar}) => {
      // Filter icons by search (case-insensitive, match in description)
  const filteredIcons = iconData.filter(item =>
    item.description.toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
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
            style={{ fontSize: '2rem', display: 'block' , color: colors.loading,}}></i>
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
                    background: colors.bodyItemMouseOutBg,
                    opacity: item.isValid ? 1 : 0.4,
                    filter: item.isValid ? "none" : "grayscale(0.7)",
                    pointerEvents: item.isValid ? "auto" : "none",
                    height: "100px",
                  }}
                  onClick={() => item.isValid && window.open(item.href, "_blank")}
                  onMouseOver={e => {
                    if (item.isValid) e.currentTarget.style.background = colors.bodyItemMouseOverBg;
                  }}
                  onMouseOut={e => {
                    if (item.isValid) e.currentTarget.style.background = colors.bodyItemMouseOutBg;
                  }}
                >
                <div
                  style={{
                  aspectRatio: "1 / 1",
                  width: "60px",
                  height: "60px",
                  position: "relative",
                  // background: colors.bodyItemLogoBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  borderRadius: "8px",
                  // boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
                  letterSpacing: "2px",
                  marginBottom: "4px",
                  color: item.isValid ? colors.bodyItemLogoText : "#aaa",
                  transition: "background 0.3s",
                  overflow: "hidden",
                  }}
                >
                  <span
                  className='pi pi-file'
                  style={{
                    fontSize: "2.2rem",
                    color: item.isValid ? colors.iconActive : "#aaa",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -47%)",
                    opacity: 0.6,
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                  />
                  <span
                  style={{
                  height: "15px",
                    position: "relative",
                    zIndex: 2,
                  }}
                  >
                  {item.logo}
                  </span>
                </div>
                  <span style={{
                    color: item.isValid ? (colors.bodyItemText) : "#aaa",
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
  );
};

export default Body;