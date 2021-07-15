
//圓形path
AFRAME.registerComponent('extra', {
  schema: {
    radius: {type: 'number', default: 1},
    height: {type: 'number', default: 1},
    depth: {type: 'number', default: 1},
    color: { type: 'color', default: '#ffffff' },
    thickness: {type: 'number', default: 0.1}
  },

  init: function () {
    var data = this.data;
    var el = this.el;      
    this.geometry = new THREE.TorusGeometry( data.radius, data.thickness, 16, 100 );
      this.material = new THREE.MeshBasicMaterial({
          color: data.color,
          opacity: 0.4,
          transparent:true,
      });
    this.mesh = new THREE.Mesh( this.geometry, this.material);
    el.setObject3D('mesh', this.mesh);
  },
});