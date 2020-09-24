# fire in threejs

##### 一、单场景threejs 自带火焰

threejs中自带火焰，当只有一个场景时，我们可以直接import去使用

```javascript
import { Fire } from 'three/examples/jsm/objects/Fire' 
.......
//此处略去10万行代码
let plane = new THREE.PlaneBufferGeometry(30, 30)
var fire = new FireFirst(plane, {
	textureWidth: 100,
  textureHeight: 100,
  debug: false
});
fire.scale.set(1, 1, 1)
fire.position.set(0, 0, 0)
fire.material.side = THREE.DoubleSide
fire.addSource(0.5, 0.1, 0.1, 0.2, 0.0, 0.1);
this.scene.add(fire)
```



##### 二、多场景火焰方法一

当多个场景存在是需要将three/examples/jsm/objects/Fire中的文件提出使用，否则存在覆盖问题

- 同一页面同一场景可加入多个火焰
- 同一页面不同场景加入火焰，后加入火焰的场景可以正常显示
- 不同页面新建多个火焰，后加入的火焰可以正常显示

详见 src/pages/ 下的LeftFire.js 和 RightFire.js



##### 三、多场景火焰方法二

自己画个火焰

详见 src/pages/ 下的MiddleFire.js