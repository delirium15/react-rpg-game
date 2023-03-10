import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink to="/">Играть</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/edit-character">Редактировать персонажа</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/save-load-character">Сохранить/Загрузить</NavLink>
        </li>
      </ul>
    </nav>
  )
}
