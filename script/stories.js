import {storiesData} from './stories-data.js';

render();

function render() {
    let storiesElements = ''
    storiesData.map(story => {
        const backgroundImg = window.innerWidth < 500 ? story.mobileImg : story.desktopImg;
        const background = `background-image:linear-gradient(180deg,rgba(0,0,0,0.0001)0.27%,rgba(0,0,0,0.661222)100%),url(${backgroundImg});`
        storiesElements += `
            <a href="#" class="story-block" style=${background}>
                <div class="stories-text-wrapper">
                    <p class="stories-info-text">${story.data}</p>
                    <h3 class="small-header">${story.name}</h3>
                    <p class="stories-info-text">${story.author}</p>
                </div>
                <div class="stories-call-to-action-wrapper">
                    <h4 class="smallest-header">Read Story</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                        <g fill="none" fill-rule="evenodd" stroke="#fff">
                            <path d="M0 7h41.864M35.428 1l6 6-6 6"/>
                        </g>
                    </svg>
                </div>  
            </a>
        `;
    });
    document.querySelector('.stories-wrapper').innerHTML = storiesElements;
}
