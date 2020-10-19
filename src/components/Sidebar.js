import React from 'react';
import { Home, Search, LibraryMusic } from "@material-ui/icons";

import './Sidebar.css';
import SidebarOption from "./sidebar-components/SidebarOption";
import {useDataLayerValue} from "../context/DataLayer";

const Sidebar = () => {
	const [{playlists}] = useDataLayerValue();

	return (
		<div className="sidebar">
			<img className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify logo"/>
			<SidebarOption Icon={Home} option="Home" />
			<SidebarOption Icon={Search} option="Search" />
			<SidebarOption Icon={LibraryMusic} option="Your Library" />
			<br />
			<strong className="sidebar__title">PLAYLISTS</strong>
			<hr />
			{playlists?.items?.map(playlist => (
				<SidebarOption option={playlist.name} />
			))}
			<SidebarOption option="Hip Hop" />
			<SidebarOption option="R&B" />
			<SidebarOption option="Trap" />
		</div>
	)
}

export default Sidebar;