import { PlayIcon } from "../dummyData";

export const MakeCustomOverlayContent = (content: any, onJuke: any) => {
    return "<div class='jukeblock'>" +
        `<div class='jukeart' data-value='${content.title}'>` +
            `<img src=${content.img} class='jukeart' alt='jukeart' />` +
            `<div class='artwrap'></div>`+
            `<img src=${PlayIcon} class='playbtn' alt='playbtn' />` +
            `<h1 class='juketitle'>${content.title}</h1>` +
        "</div>" +
    "</div>";
}