import gsap from 'gsap';
import * as THREE from 'three';
import { GLTF, OrbitControls } from 'three/examples/jsm/Addons.js';

class Scene3d {
    parentId: string;
    fov: number;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    clock: THREE.Clock;
    controls: OrbitControls;
    canvas: HTMLCanvasElement;
    loadedModel: GLTF | undefined;
    private animFrameId: number | null = null;
    private bounceFrameId: number | null = null;
    private isDestroyed = false;

    private resizeHandler: () => void;
    private dragOutHandler: () => void;

    constructor(canvasId: string, parentId: string) {
        const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        this.canvas = canvas;
        this.parentId = parentId;
        this.fov = 5;

        this.scene = new THREE.Scene();
        this.scene.background = null;

        const initialWidth = canvas?.clientWidth || 350;
        const initialHeight = canvas?.clientHeight || 250;
        this.camera = new THREE.PerspectiveCamera(this.fov, initialWidth / initialHeight, 1, 1000);

        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
        });
        this.renderer = renderer;
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        this.clock = new THREE.Clock();

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableZoom = false;
        this.controls.enablePan = false;
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;

        this.resizeHandler = () => this.onWindowResize();
        this.dragOutHandler = () => this.onDragOut();
    }

    initialize() {
        this.camera.position.z = 500;
        this.camera.position.x = -200;
        this.camera.position.y = 150;

        const width = this.canvas.clientWidth || 350;
        const height = this.canvas.clientHeight || 250;
        this.renderer.setSize(width, height, false);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(ambientLight);

        const spotLight = new THREE.SpotLight(0xffffff, 1.2);
        spotLight.position.set(0, 64, 32);
        this.scene.add(spotLight);

        window.addEventListener('resize', this.resizeHandler, { passive: true });
        window.addEventListener('mouseup', this.dragOutHandler, { passive: true });
        window.addEventListener('touchend', this.dragOutHandler, { passive: true });

        // Trigger initial resize after DOM layout settles
        requestAnimationFrame(() => this.onWindowResize());
    }

    animate() {
        if (this.isDestroyed) return;
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        this.animFrameId = window.requestAnimationFrame(this.animate.bind(this));
    }

    onDragOut() {
        if (this.isDestroyed) return;
        setTimeout(() => {
            if (!this.isDestroyed) {
                gsap.to(this.camera.position, { x: -200, y: 150, z: 500, duration: 1, ease: 'back.out(1.2)' });
            }
        }, 200);
    }

    onWindowResize() {
        if (this.isDestroyed) return;
        const canvasParent = document.getElementById(this.parentId);
        if (canvasParent && canvasParent.clientWidth > 0 && canvasParent.clientHeight > 0) {
            this.camera.aspect = canvasParent.clientWidth / canvasParent.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(canvasParent.clientWidth, canvasParent.clientHeight, false);
        }
    }

    bounceAnimate(bounceSpeed: number = 0.08, bounceHeight: number = 2) {
        let direction = 1;

        const bounceMacbook = () => {
            if (this.isDestroyed) return;
            if (this.scene) {
                this.scene.position.y += bounceSpeed * direction;
                if (this.scene.position.y > bounceHeight || this.scene.position.y < -bounceHeight) {
                    direction *= -1;
                }
            }
            this.bounceFrameId = window.requestAnimationFrame(bounceMacbook);
        };

        bounceMacbook();
    }

    destroy() {
        this.isDestroyed = true;
        if (this.animFrameId !== null) cancelAnimationFrame(this.animFrameId);
        if (this.bounceFrameId !== null) cancelAnimationFrame(this.bounceFrameId);
        window.removeEventListener('resize', this.resizeHandler);
        window.removeEventListener('mouseup', this.dragOutHandler);
        window.removeEventListener('touchend', this.dragOutHandler);
        this.controls.dispose();
    }
}

export default Scene3d;
