import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line
} from 'three'

// 场景
const scene = new Scene();

// 渲染器
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 相机
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set( 0, 0, 100 ); // 设置坐标轴 xyz
// camera.position.z = 100;


// 材质
const material = new LineBasicMaterial({
  color: 0xffffff,
	linewidth: 10, // ignored by WebGLRenderer
	linecap: 'round', //ignored by WebGLRenderer
	linejoin:  'round' //ignored by WebGLRenderer
});

// 划线时的顶点 - 两点确定一条直线
const points = [];
points.push( new Vector3( 10, 10 ) );
points.push( new Vector3( 0, 10 ) );
// 也可以手动模拟 Vector3 类型的 对象
const temp = {
  x: 10,
  y: 0,
  z: 0
}
temp.__proto__ = new Vector3().__proto__
points.push(temp);

const geometry = new BufferGeometry().setFromPoints( points );

const line = new Line( geometry, material );

// 添加图形到场景
scene.add( line );
// 渲染器渲染场景和相机
renderer.render( scene, camera );
