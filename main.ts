// First import both extensions:
// 1. minecraft-3d (your custom one)
// 2. https://github.com/AqeeAqee/pxt-raycasting

namespace minecraft3d {

    // Your block textures (16x16)
    export const GRASS = img`
        // Paste a nice Minecraft-style grass block here
        4444444444444444
        4444444444444444
        7777777777777777
        7777777777777777
        7777777777777777
        5555555555555555
        5555555555555555
        // ... continue to 16 lines
    `;

    export const DIRT = img`...`;
    export const STONE = img`...`;

    // Initialize 3D view
    export function init3D() {
        if (typeof raycasting === "undefined") {
            console.error("Raycasting extension not found! Import it first.");
            return;
        }
        
        raycasting.setPlayerPosition(8, 8);
        raycasting.setPlayerAngle(0);
        raycasting.setRenderMode(raycasting.RenderMode.Raycast); // or whatever the block is called
    }

    //% block="generate flat minecraft world width $w height $h"
    export function generateFlatWorld(w: number, h: number) {
        for (let x = 0; x < w; ++x) {
            for (let y = 0; y < h; ++y) {
                if (y >= 12) scene.setTileAt(x, y, STONE);
                else if (y >= 9) scene.setTileAt(x, y, DIRT);
                else scene.setTileAt(x, y, GRASS);
            }
        }
        if (typeof raycasting !== "undefined") {
            raycasting.updateTilemap();
        }
    }
}
