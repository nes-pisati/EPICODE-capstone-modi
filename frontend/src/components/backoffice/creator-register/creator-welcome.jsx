import React from "react"
import Styles from "./creator-register.module.css"
import logo from "../../../assets/MODI-logo-white.png"

export default function CreatorWelcome() {
    return (
            <div className={Styles.welcomeSection}>
                <img src={logo} alt="logo modì bianco" className={Styles.logo}/>
                <h1 className={Styles.h1}>WELCOME TO MODÌ</h1>
                <h6 className={Styles.h6}>Registrati o accedi per iniziare a creare le tue guide!</h6>
            </div>
    )
}