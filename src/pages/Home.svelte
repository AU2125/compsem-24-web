<script>
    import p5 from "p5-svelte";
    let t = 0; // time variable
    let particles = [];

    class Particle {

        constructor(){
            this.x = p5.random(0,width);
            this.y = p5.random(0,height);
            this.r = p5.random(1,8);
            this.xSpeed = p5.random(-2,2);
            this.ySpeed = p5.random(-1,1.5);
        }
        
        // creation of a particle.
        createParticle() {
            p5.noStroke();
            p5.fill('rgba(200,169,169,0.5)');
            p5.circle(this.x,this.y,this.r);
        }
        
        // setting the particle in motion.
        moveParticle() {
            if(this.x < 0 || this.x > width)
            this.xSpeed*=-1;
            if(this.y < 0 || this.y > height)
            this.ySpeed*=-1;
            this.x+=this.xSpeed;
            this.y+=this.ySpeed;
        }
        
        // this function creates the connections(lines)
        // between particles which are less than a certain distance apart
        joinParticles(particles) {
            particles.forEach(element =>{
            let dis = p5.dist(this.x,this.y,element.x,element.y);
            if(dis<85) {
                p5.stroke('rgba(255,255,255,0.4)');
                p5.line(this.x,this.y,element.x,element.y);
            }
            });
        }
        }
    p5.setup = () => {
        p5.createCanvas(865, 400);
        for(let i = 0;i<width/10;i++){
        particles.push(new Particle());
    }
    p5.draw() {
    background('#0f0f0f');
    for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
    }

    };
</script>

<p5 {sketch} />