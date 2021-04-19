export const MakeCustomOverlayContent = (content: any) => {
    return "<div class='jukeblock'>" +
        "<div class='jukeart'>" +
            `<img src=${content.img} alt='jukeart' />`+
            `<div class='artwrap'/>`+
        "</div>" +
    "</div>";
}