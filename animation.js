AFRAME.registerComponent('avataranimation', {
    // schema: {
    //     newLoop: {type: 'boolean', default: false},
    // },
    init: function () {
        window.addEventListener('keypress', (e)=>{
            if(e.key==='w'){
                this.el.setAttribute('animation-mixer','clip: Take 001; timeScale: 0.5')
            }
            if(e.key==='s'){
                this.el.setAttribute('animation-mixer','clip: Take 001; timeScale: -0.5')
            }
        })
        window.addEventListener('keyup', (e)=>{
            if(e.key==='w' || e.key==='s'){
                this.el.addEventListener('animation-loop',()=> {
                    this.el.setAttribute('animation-mixer','clip: Take 001; timeScale: 0')
                })
            }
        })
    },
  });

  AFRAME.registerComponent('camerachange', {
    // schema: {
    //     newLoop: {type: 'boolean', default: false},
    // },
    init: function () {
        var direction = new THREE.Vector3()
        var rot=this.el.object3D.rotation
        window.addEventListener('keypress', (e)=>{
            switch(e.key){
                case('w'):
                    direction.x=Math.sin((rot.y+Math.PI))
                    direction.z=Math.cos((rot.y+Math.PI))
                    direction.y=0
                    this.el.object3D.position.addScaledVector(direction,1)
                    break;
                case('s'):
                    direction.x=Math.sin((rot.y+Math.PI))
                    direction.z=Math.cos((rot.y+Math.PI))
                    direction.y=0
                    this.el.object3D.position.addScaledVector(direction,-1)
                    break;
                case('a'):
                    this.el.object3D.rotation.y+=0.1
                    break;
                case('d'):
                    this.el.object3D.rotation.y-=0.1
                    break;
            }
        })
    },
  });