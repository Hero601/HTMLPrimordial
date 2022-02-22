import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, Mesh, MeshBasicMaterial } from 'three'

// 创建场景、照相机、渲染器
const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new WebGLRenderer();

// 设置 canvas 大小
renderer.setSize(window.innerWidth, window.innerHeight);
// 添加到 body
document.body.appendChild(renderer.domElement)

// 创建正方体
const geometry = new BoxGeometry();

const material = new MeshBasicMaterial( { color: 0x00ff00 } );
// 网格
const cube = new Mesh( geometry, material );
scene.add( cube );

// z 轴
camera.position.z = 6;

function animate() {
  requestAnimationFrame( animate );

  // 正方体运动
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();

