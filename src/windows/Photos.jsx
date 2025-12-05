import { WindowControls } from "#components";
import {Search} from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {photosLinks, gallery} from "#constants/index.js";
import clsx from "clsx";
import useWindowStore from "#store/window.js";

const Photos = () => {
    // For now, we'll just have a static active link.
    const activeLink = 1;
    const { openWindow } = useWindowStore();

    const openImage = (item) => {
        openWindow("imgfile", { name: item.img, imageUrl: item.img });
    }

    const renderList = ( name, items ) => (
        <div>
            <h3>{name}</h3>
        <ul>
            {items.map((item) => (
        <li key={item.id}
            className={clsx(item.id === activeLink ? "active" : "not-active")}>
            <img src={item.icon} className="w-4"
                 alt={item.title}/>
            <p className="text-sm font-medium
                            truncate">{item.title}</p>
           </li>
          ))}
        </ul>
    </div>
    );

    return <>
    <div id="window-header">
        <WindowControls target={"photos"} />
        <Search className="icon" />
    </div>

        <div className="bg-white flex h-full">
            <div className="sidebar">
                {renderList("Library", photosLinks)}
            </div>
            <ul className="content grid grid-cols-3 gap-4 p-4">
                {gallery.map((item) => (
                    <li key={item.id} onClick={() => openImage(item)} className="cursor-pointer">
                        <img src={item.img} alt={`gallery-image-${item.id}`} className="w-full h-auto rounded-lg" />
                    </li>
                ))}
            </ul>
        </div>

    </>
}

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;
