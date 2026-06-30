var mouseMode = true;
var canvas = document.getElementById('canvas');

document.addEventListener('keydown', async (event) => {
    console.log(`Key pressed: ${event.key}`);
    if (event.key === 'p' || event.key === 'P') {
        if (mouseMode) {
            await canvas.requestPointerLock();
            
        } else {
            await document.exitPointerLock();
        }
    }
});

document.addEventListener('pointerlockchange', () => {
    if (document.pointerLockElement === null) {
        document.body.style.cursor = 'default';
        mouseMode = !mouseMode
    } else {
        document.body.style.cursor = 'none';
        mouseMode = !mouseMode
    }
});

// canvas.addEventListener("click", async () => {
//   await canvas.requestPointerLock();
// });