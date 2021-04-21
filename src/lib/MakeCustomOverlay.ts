import { PlayIcon } from "../dummyData";

export const MakeCustomOverlayContent = (content: any, onJuke: any) => {
    return "<div class='juke jukeblock'>" +
        `<div class='jukeart' data-value='${content.title}'>` +
            `<img src=${content.img} class='jukeart' alt='jukeart' />` +
            `<div class='artwrap'></div>`+
            `<img src=${PlayIcon} class='playbtn' alt='playbtn' />` +
            `<h1 class='juketitle'>${content.title}</h1>` +
        "</div>" +
    "</div>";
}

export const MakeCustomOverlayDom = (content: any, onJuke: any): HTMLDivElement => {
    const jukeBlock = document.createElement('div');

    jukeBlock.classList.add("juke", "jukeblock");

    const jukeArtBlock = document.createElement('div');
    jukeArtBlock.classList.add('jukeart');

    const img = document.createElement('img');
    img.src = content.img;
    img.classList.add('jukeart');
    img.alt = 'jukeart';

    const artWrap = document.createElement('div');
    artWrap.classList.add('artwrap');

    const playBtn = document.createElement('img');
    playBtn.src = PlayIcon;
    playBtn.classList.add('playbtn');
    playBtn.alt = 'playbtn';

    const title = document.createElement('h1');
    title.classList.add('juketitle');
    title.textContent = content.title;

    jukeArtBlock.appendChild(img);
    jukeArtBlock.appendChild(artWrap);
    jukeArtBlock.appendChild(playBtn);
    jukeArtBlock.appendChild(title);

    jukeBlock.appendChild(jukeArtBlock);
    jukeBlock.addEventListener('click', () => onJuke(content));

    return jukeBlock;
}