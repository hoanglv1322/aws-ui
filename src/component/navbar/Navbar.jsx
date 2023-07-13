import React from 'react'
import './style.css'
import { BiLogoAws } from 'react-icons/bi'
import {
	BsGrid3X3Gap,
	BsSearch,
	BsTerminal,
	BsBell,
	BsQuestionCircle,
} from 'react-icons/bs'
import { Dropdown, Popover } from 'antd'
import { listServices } from '../../data/services'

const Navbar = () => {
	return (
		<div className="navbar-container">
			<div className="left-navbar">
				<BiLogoAws className="navbar-logo" />
				<div className="dive"></div>
				<Dropdown menu={{ items: listServices }} trigger={['click']}>
					<Popover content="aws services">
						<BsGrid3X3Gap className="navbar-icon" />
					</Popover>
				</Dropdown>
				<div className="navbar-search">
					<BsSearch className="icon-search" />
					<input placeholder="Search" />
				</div>
			</div>
			<div className="right-navbar">
				<Popover content="shell">
					<BsTerminal className="navbar-icon" />
				</Popover>

				<div className="dive"></div>

				<Popover content="notifytion">
					<BsBell className="navbar-icon" />
				</Popover>

				<div className="dive"></div>

				<Popover content="support">
					<BsQuestionCircle className="navbar-icon" />
				</Popover>

				<div className="dive"></div>

				<Dropdown menu={{ items: listServices }} trigger={['click']}>
					<Popover content="region">
						<p className="navbar-region">Global</p>
					</Popover>
				</Dropdown>

				<div className="dive"></div>
			</div>
		</div>
	)
}

export default Navbar
