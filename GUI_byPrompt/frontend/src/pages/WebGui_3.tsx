// ...existing code...

export const WebGui: React.FC = () => {
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [search, setSearch] = React.useState<string>("");
  const [darkMode, setDarkMode] = React.useState<boolean>(false);
  const op = React.useRef<OverlayPanel>(null);

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

  // Color palettes for light and dark mode
  const colors = darkMode
    ? {
        headerBg: "#1a237e",
        headerText: "#fff",
        logoBg: "#388e3c",
        logoText: "#fff",
        leftBarBg: "#006064",
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
      }
    : {
        headerBg: "#283593",
        headerText: "#fff",
        logoBg: "#43a047",
        logoText: "#fff",
        leftBarBg: "#00838f",
        leftBarIcon: "#fff",
        bodyBg: "#f5f7fa",
        iconPanelBg: "#fff",
        iconPanelShadow: "0 2px 12px rgba(40, 53, 147, 0.08)",
        iconActive: "#283593",
        footerBg: "#37474f",
        footerText: "#fff",
        dropdownBg: "#fff",
        dropdownText: "#222",
        userPanelBg: "#fff",
        userPanelText: "#283593",
      };

  // Icon data sets for different dropdown selections
  const iconDataSets: Record<string, typeof iconData> = {
    "1": [
      {
        logo: "pi pi-github",
        description: "GitHub",
        href: "https://github.com",
        isValid: true,
      },
      {
        logo: "pi pi-twitter",
        description: "Twitter",
        href: "https://twitter.com",
        isValid: true,
      },
      {
        logo: "pi pi-globe",
        description: "Website",
        href: "https://primereact.org",
        isValid: false,
      },
    ],
    "2": [
      {
        logo: "pi pi-youtube",
        description: "YouTube",
        href: "https://youtube.com",
        isValid: true,
      },
      {
        logo: "pi pi-discord",
        description: "Discord",
        href: "https://discord.com",
        isValid: false,
      },
      {
        logo: "pi pi-linkedin",
        description: "LinkedIn",
        href: "https://linkedin.com",
        isValid: true,
      },
    ],
    "3": [
      {
        logo: "pi pi-amazon",
        description: "Amazon",
        href: "https://amazon.com",
        isValid: true,
      },
      {
        logo: "pi pi-apple",
        description: "Apple",
        href: "https://apple.com",
        isValid: true,
      },
      {
        logo: "pi pi-windows",
        description: "Windows",
        href: "https://microsoft.com",
        isValid: false,
      },
    ],
  };

  // Default iconData if nothing selected
  const iconData =
    selectedOption && iconDataSets[selectedOption]
      ? iconDataSets[selectedOption]
      : iconDataSets["1"];

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
              width: "40px",
              height: "40px",
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
              background: darkMode ? "#23272f" : "#e3f2fd",
              color: darkMode ? "#fff" : "#222",
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
            options={[
              { label: "Group 1", value: "1" },
              { label: "Group 2", value: "2" },
              { label: "Group 3", value: "3" },
            ]}
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
        {/* User Panel at 2% from right */}
        <div
          style={{
            position: "absolute",
            right: "2%",
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
      <div style={{ height: "80%", display: "flex", flex: 1 }}>
        {/* Left Bar */}
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
            style={{ color: colors.leftBarIcon, fontSize: "1.5rem" }}
          />
          <Button
            icon="pi pi-user"
            className="p-button-rounded p-button-text"
            aria-label="User"
            style={{ color: colors.leftBarIcon, fontSize: "1.5rem" }}
          />
          <Button
            icon="pi pi-cog"
            className="p-button-rounded p-button-text"
            aria-label="Settings"
            style={{ color: colors.leftBarIcon, fontSize: "1.5rem" }}
          />
        </div>
        {/* Main Content */}
        <div
          style={{
            flex: 1,
            background: colors.bodyBg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "40px",
              background: colors.iconPanelBg,
              padding: "32px 48px",
              borderRadius: "18px",
              boxShadow: colors.iconPanelShadow,
              transition: "background 0.3s, box-shadow 0.3s",
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
// ...existing code...