import React, { useEffect } from 'react';
import Scene3d from '../lib/Scene3d';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';

const Banner: React.FC = () => {
    useEffect(() => {
        let screen: THREE.Object3D | undefined;
        const bannerScene = new Scene3d('Banner3dImage', 'Banner3dParent');
        bannerScene.initialize();
        bannerScene.animate();
        bannerScene.bounceAnimate();

        const loader = new GLTFLoader();
        loader.load(
            '/assets/models/MacBook.glb',
            (gltf) => {
                bannerScene.loadedModel = gltf;
                const loadedModel = gltf.scene;
                screen = loadedModel.getObjectByName('Screen');

                const textureLoader = new THREE.TextureLoader();
                const screenTexture = textureLoader.load('/assets/Zero-white-logo.png', (texture) => {
                    texture.flipY = false;
                    texture.colorSpace = THREE.SRGBColorSpace;
                });
                const material = new THREE.MeshBasicMaterial({ map: screenTexture });

                if (screen) {
                    if (screen.children[3] && screen.children[3] instanceof THREE.Mesh) {
                        (screen.children[3] as THREE.Mesh).material = material;
                    }
                }
                bannerScene.scene.add(loadedModel);
            },
            undefined,
            (err) => {
                console.error('Error loading 3D MacBook model:', err);
            }
        );

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerEff = window.innerHeight / 5;

            if (scrollY > triggerEff) {
                if (screen) {
                    gsap.to(screen.rotation, { x: 0, duration: 1, ease: 'power4' });
                }
                gsap.to(bannerScene.scene.rotation, { y: 9.05, duration: 1.5, ease: 'power4' });
            } else {
                if (screen) {
                    gsap.to(screen.rotation, { x: -1.775, duration: 1, ease: 'power4' });
                }
                gsap.to(bannerScene.scene.rotation, { y: 0, duration: 1.5, ease: 'power4' });
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            bannerScene.destroy();
        };
    }, []);

    return (
        <section className="w-full min-h-screen pt-28 pb-16 flex items-center" id="home">
            <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-12 justify-between items-center w-[min(90%,75rem)] mx-auto">
                {/* Text Content */}
                <div className="w-full md:w-7/12 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-tertiary"></span>
                        <h4 className="text-sm font-semibold tracking-widest uppercase text-tertiary">
                            Hello, I am
                        </h4>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                        Muhammed Irfan
                    </h1>

                    <h2 className="text-xl sm:text-2xl font-semibold text-tertiary leading-snug">
                        Frappe / ERPNext Developer &amp; Full-Stack Software Engineer
                    </h2>

                    <p className="text-base sm:text-lg text-secondary font-medium leading-relaxed">
                        Building custom ERPNext business workflows, full-stack web &amp; mobile apps, and WhatsApp Cloud API automations. Open-source contributor to the Frappe framework.
                    </p>

                    <div className="p-4 rounded-xl bg-primary-alt/80 border border-white/10 text-secondary-alt text-sm sm:text-base leading-relaxed">
                        <p>
                            I'm Muhammed Irfan, a software engineer with 3+ years of experience specializing in Frappe/ERPNext and full-stack web and mobile development. I architect custom Frappe applications and ERPNext implementations across HR, CRM, Healthcare, Manufacturing, and core business workflows (Sales Orders, Sales Invoices, Purchase Orders), alongside production web and mobile apps built with Next.js, the MERN stack, and React Native.
                        </p>
                    </div>

                    {/* Action buttons & Socials */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <a
                            href="#skills"
                            className="px-6 py-3 rounded-lg bg-tertiary text-dark font-semibold text-sm sm:text-base hover:opacity-90 transition-all shadow-lg shadow-tertiary/20"
                        >
                            Explore Skills
                        </a>
                        <a
                            href="#experience"
                            className="px-6 py-3 rounded-lg border border-white/20 hover:border-tertiary text-secondary font-semibold text-sm sm:text-base hover:text-tertiary transition-all"
                        >
                            Experience
                        </a>

                        <div className="flex items-center gap-3 pl-2">
                            <a
                                href="https://www.linkedin.com/in/0muhammedirfan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn profile of Muhammed Irfan"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-secondary hover:text-tertiary hover:border-tertiary transition-all"
                            >
                                <i className="fa-brands fa-linkedin-in text-base"></i>
                            </a>
                            <a
                                href="https://github.com/0MUHAMMEDIRFAN"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub profile of Muhammed Irfan"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-secondary hover:text-tertiary hover:border-tertiary transition-all"
                            >
                                <i className="fa-brands fa-github text-base"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/0muhammedirfan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram profile of Muhammed Irfan"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-secondary hover:text-tertiary hover:border-tertiary transition-all"
                            >
                                <i className="fa-brands fa-instagram text-base"></i>
                            </a>
                            <a
                                href="https://x.com/0muhammedirfan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X / Twitter profile of Muhammed Irfan"
                                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-secondary hover:text-tertiary hover:border-tertiary transition-all"
                            >
                                <i className="fa-brands fa-x-twitter text-base"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 3D Model Container */}
                <div className="w-full md:w-5/12 max-w-[480px]" id="Banner3dParent">
                    <canvas id="Banner3dImage" className="w-full aspect-[7/5]" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
