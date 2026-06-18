namespace minecraft3d {
    // Minecraft block textures (16x16, blocky)
    export const GRASS = img`
        // Paste full 16x16 grass texture here (use image editor)
        . . . . . . . . . . . . . . . .
        // ... (make it look like Minecraft grass top/sides)
    `;

    export const DIRT = img`...`;
    export const STONE = img`...`;
    export const WOOD = img`...`;
    export const LEAVES = img`...`;
    // Add more: COBBLE, SAND, etc.

    // Player (first-person, but you can show a Steve model in UI)
    export function initPlayer() {
        // Raycaster handles camera
        raycasting.setPlayerPosition(8, 8); // starting X, Y in tile coords
        raycasting.setPlayerAngle(0);
    }

    //% block="set 3D block $tile at x $x y $y"
    export function setBlock(tile: Image, x: number, y: number) {
        scene.setTileAt(x, y, tile);
        raycasting.updateTilemap(); // Refresh 3D view
    }

    //% block="break block at x $x y $y"
    export function breakBlock(x: number, y: number) {
        scene.setTileAt(x, y, img`0`); // air
        raycasting.updateTilemap();
        // Add block break particles if desired
    }

    // Simple world generator
    export function generateFlatWorld(width: number, height: number) {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                if (y > 10) {
                    scene.setTileAt(x, y, STONE);
                } else if (y > 8) {
                    scene.setTileAt(x, y, DIRT);
                } else {
                    scene.setTileAt(x, y, GRASS);
                }
            }
        }
        raycasting.updateTilemap();
    }

    // Example controls (in your main project)
    // Use controller for movement, A to break, B to place
}
