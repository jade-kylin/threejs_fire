import React, { Component } from 'react'

import { WEBGL } from 'three/examples/jsm/WebGL'
import * as THREE from 'three'
// import { Fire } from 'three/examples/jsm/objects/Fire'
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls"
import { FireFirst } from './fire/FireFirst';
class LeftFire extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.scene = null
    this.animateId = null
    this.clearRender = function () { }
  }
  drawFire = () => {
    let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(700, 700);//设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document.getElementById('leftFire').appendChild(renderer.domElement);
    // 创建场景
    this.scene = new THREE.Scene();
    var width = 700; //窗口宽度
    var height = 700; //窗口高度
    var k = width / height; //窗口宽高比
    var s = 80; //三维场景显示范围控制系数，系数越大，显示的范围越大
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 0.1, 2000);
    // var camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 2000 )
    var axes = new THREE.AxesHelper(100);
    this.scene.add(axes);
    camera.position.set(100, 100, 300);
    camera.lookAt(0, 0, 0);

    /* 清空渲染器缓存 */
    this.clearRender = () => {
      if (renderer) {
        renderer.dispose();
        /* 如果使用到了加上这个 renderer.context = null; */
        renderer.forceContextLoss();
        renderer.domElement = null;
      }
    }

    let controls = new TrackballControls(camera, renderer.domElement)
    controls.rotateSpeed = 4.0;//旋转速度。默认值为2.0。
    controls.zoomSpeed = 1.2;//变焦速度。默认值为1.2。
    controls.panSpeed = 0.3;//变焦速度。默认值为0.3
    controls.noZoom = false;//是否禁用缩放。默认值为false。
    controls.noPan = false;//是否禁用平移。默认值为false。

    controls.minDistance = 100;
    controls.maxDistance = 3000;//能放大多远
    controls.staticMoving = true;//是否禁用阻尼。默认值为false。
    controls.dynamicDampingFactor = 0.3;//定义阻尼强度。仅当staticMoving设置为false时才考虑。默认值为0.2。
    controls.keys = [65, 83, 68];
    controls.addEventListener('change', () => { renderer.render(this.scene, camera) })

    this.setFire = () => {
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
      console.log(fire)
    }
    this.setFire()

    renderer.render(this.scene, camera);
    this.animate = () => {
      this.animateId = requestAnimationFrame(this.animate);
      controls.update()
      renderer.render(this.scene, camera);
    }
    this.animate()
  }
  componentDidMount() {
    if (WEBGL.isWebGLAvailable()) {
      this.drawFire()
    } else {
      var warning = WEBGL.getWebGLErrorMessage();
      document.getElementById('leftFire').appendChild(warning);
    }
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.animateId)
    this.clearRender()
  }
  render() {
    return (
      <div id='leftFire' style={{
        width: 700,
        height: window.innerHeight,
        background: '#001527',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

      </div>
    )
  }
}
export default LeftFire