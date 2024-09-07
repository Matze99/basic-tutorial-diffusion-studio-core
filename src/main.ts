import { TextClip, Composition, Keyframe } from '@diffusionstudio/core';

const composition = new Composition({
    width: 970,
    height: 540,
});

const text = new TextClip({
    text: 'Hello World',
    textAlign: 'center',
    // position: {
    //     x: new Keyframe(
    //         [0, 100],
    //         [-30, 970/2],
    //         {easing: 'easeIn'}
    //     ),
    //     y: 540/2,
    // },
    position: 'center',
    rotation: new Keyframe(
        [100, 200, 201, 300],
        [0, 3600, 0, 360],
        {type: 'degrees'}
    )
});


await composition.add(text);

const container = document.getElementById('player-container') as HTMLDivElement;
const player = document.getElementById('player') as HTMLDivElement;
 
composition.attachPlayer(player);
 
const scale = Math.min(
  container.clientWidth / composition.width,
  container.clientHeight / composition.height,
);
 
player.style.width = `${composition.width}px`;
player.style.height = `${composition.height}px`;
player.style.transform = `scale(${scale})`;
player.style.transformOrigin = 'center';

composition.play();