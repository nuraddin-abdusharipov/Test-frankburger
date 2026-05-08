import { NavLink } from 'react-router-dom'

function Footer() {

  const styles = {
    navlink: {
      textDecoration: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "55px",
      height: "55px",
      transition: "all 0.3s ease",
      borderRadius: "30px",
    }
  }

  return (
    <div style={{
      display: "flex",
      width: "100%",
      maxWidth: "400px",
      height: "10%",
      background: "rgba(25, 25, 40, 0.95)",
      backdropFilter: "blur(10px)",
      borderRadius: "30px 30px 0 0",
      alignItems: "center",
      justifyContent: "space-evenly",
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }}>

      <NavLink
        to="/"
        style={({ isActive }) => ({
          ...styles.navlink,
          background: isActive ? "linear-gradient(135deg, rgba(231,76,60,0.2), rgba(255,107,53,0.1))" : "transparent",
          color: isActive ? "#ff6b35" : "white",
          transform: isActive ? "scale(1.05)" : "scale(1)"
        })}
      >
        <i className="fa-solid fa-house" style={{ fontSize: "20px" }}></i>
        <span style={{ fontSize: "10px", marginTop: "4px" }}>Uy</span>
      </NavLink>

      <NavLink
        to="/cart"
        style={({ isActive }) => ({
          ...styles.navlink,
          background: isActive ? "linear-gradient(135deg, rgba(231,76,60,0.2), rgba(255,107,53,0.1))" : "transparent",
          color: isActive ? "#ff6b35" : "white",
          transform: isActive ? "scale(1.05)" : "scale(1)"
        })}
      >
        <i className="fa-solid fa-cart-arrow-down" style={{ fontSize: "20px" }}></i>
        <span style={{ fontSize: "10px", marginTop: "4px" }}>Savat</span>
      </NavLink>

      <NavLink
        to="/orders"
        style={({ isActive }) => ({
          ...styles.navlink,
          background: isActive ? "linear-gradient(135deg, rgba(231,76,60,0.2), rgba(255,107,53,0.1))" : "transparent",
          color: isActive ? "#ff6b35" : "white",
          transform: isActive ? "scale(1.05)" : "scale(1)"
        })}
      >
        <i className="fa-solid fa-list" style={{ fontSize: "20px" }}></i>
        <span style={{ fontSize: "10px", marginTop: "4px" }}>Buyurtma</span>
      </NavLink>

      <NavLink
        to="/profile"
        style={({ isActive }) => ({
          ...styles.navlink,
          background: isActive ? "linear-gradient(135deg, rgba(231,76,60,0.2), rgba(255,107,53,0.1))" : "transparent",
          color: isActive ? "#ff6b35" : "white",
          transform: isActive ? "scale(1.05)" : "scale(1)"
        })}
      >
        <i className="fa-solid fa-user" style={{ fontSize: "20px" }}></i>
        <span style={{ fontSize: "10px", marginTop: "4px" }}>Profil</span>
      </NavLink>

    </div>
  )
}

export default Footer