import { Parcel } from "momo_lib/core/parcel";
import { ShadowContainer } from "momo_lib/components/wrappers/container";

import { files_tree as files_tree } from "./components/files-tree";
import { files_meta as files_meta } from "./components/files-meta";
import { files_menu as files_menu } from "./components/files-menu";

export async function files(parcel: Parcel): Promise<ShadowContainer> {
	const menu = await files_menu(parcel);
	const tree = await files_tree(parcel);
	const meta = await files_meta(parcel);
	// TODO something is redundant here 
	// why pass the components to the constructor then push them again 
	const cont = new ShadowContainer("files", menu, tree, meta);

	cont.push("menu", menu);
	cont.push("tree", tree);
	cont.push("meta", meta);

	cont.css("styles/momo_file_system.css");

	return cont;
}
