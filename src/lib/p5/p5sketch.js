/*
This is an example of a p5 Sketch. You need to use the P5 Instance Mode:

- using `p` before every function you call.
- wrapping everything inside `export default function (p) { your code here }`
- the sketch will then be imported by the P5Wrapper.svelte file.

*/
export default function (p) {
    let x = 200;
    let y = 200;
    let xspeed = 5;
    let yspeed = 2;

    let r = 20;

    p.setup = () => {
        p.createCanvas(400, 400);
    };

    p.draw = () => {
        
        p.background(200);
        p.noStroke();
        p.fill(255, 0, 0);
        p.ellipse(x, y, r * 2, r * 2);
        x += xspeed;
        y += yspeed;
        if (x > p.width - r || x < r) {
            xspeed = -xspeed;
        }
        if (y > p.height - r || y < r) {
            yspeed = -yspeed;
        }
    };
}
