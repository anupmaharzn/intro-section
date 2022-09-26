import React, { useState } from "react";
import Logo from "../../../assets/images/logo.svg";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import TodoIcon from "../../../assets/images/icon-todo.svg";
import CalanderIcon from "../../../assets/images/icon-calendar.svg";
import ReminderIcon from "../../../assets/images/icon-reminders.svg";
import PlanningIcon from "../../../assets/images/icon-planning.svg";
import MenuIcon from '../../../assets/images/icon-menu.svg';
import CloseIcon from '../../../assets/images/icon-close-menu.svg';
import "./header.scss";
const Header = () => {
	const [navLinkOpen1, setnavLinkOpen1] = useState(false);
	const [navLinkOpen2, setnavLinkOpen2] = useState(false);

	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen(!open);
	}
	console.log(open);

	return (
		<header className={open ? "header overlay fade_in" : "header fade_out"}>
			<nav className="nav container">

				<a href="/#" className="nav__logo">
					<img src={Logo} alt="logo"></img>
				</a>

				<div className={open ? "nav__menu show_menu" : "nav__menu"}>
					<ul className="nav__list">
						<div className="nav__items" onClick={() => setnavLinkOpen1(!navLinkOpen1)}>

							<li>Features</li>
							<div className={navLinkOpen1 ? "nav__items__container" : "nav__items__container nocontainer"}>
								<li className="nav__items__container__links">
									<img src={TodoIcon} alt="todo" />
									Todo List
								</li>
								<li className="nav__items__container__links">
									<img src={CalanderIcon} alt="todo" />
									Calendar
								</li>
								<li className="nav__items__container__links">
									<img src={ReminderIcon} alt="todo" />
									Reminders
								</li>
								<li className="nav__items__container__links">
									<img src={PlanningIcon} alt="todo" />
									Planning
								</li>
							</div>
							{navLinkOpen1 ? (
								<KeyboardArrowUpIcon />
							) : (
								<KeyboardArrowDownIcon />
							)}
						</div>

						<div
							className="nav__items"
							onClick={() => setnavLinkOpen2(!navLinkOpen2)}
						>
							<li>Company</li>
							<div
								className={
									navLinkOpen2
										? "nav__items__container2"
										: "nav__items__container2 nocontainer"
								}
							>
								<li className="nav__items__container__links">History</li>
								<li className="nav__items__container__links">Our Team</li>
								<li className="nav__items__container__links">Blog</li>
							</div>
							{navLinkOpen2 ? (
								<KeyboardArrowUpIcon />
							) : (
								<KeyboardArrowDownIcon />
							)}
						</div>
						<li className="nav__item">Careers</li>
						<li className="nav__item">About</li>
					</ul>


					<div className="nav__rightbar">
						<a href="/#" className="nav__rightbar__btn1">
							Login
						</a>
						<a href="/#" className="nav__rightbar__btn2">
							Register
						</a>
					</div>

				</div>

				<div className="nav__toggle" onClick={handleToggle}>
					{open ? <img src={CloseIcon} alt="todo" /> : <img src={MenuIcon} alt="todo" />}
				</div>




			</nav>
		</header>
	);
};

export default Header;
