import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { sleep } from '../engine/utils.js';

// Love poem messages
const MESSAGES = [
    { text: 'Dear Gabrielle,', className: 'say' },
    { text: '', className: 'say' },
    { text: 'In a world of endless faces,', className: 'say' },
    { text: 'you are the one my heart chose.', className: 'say' },
    { text: 'Every moment spent with you,', className: 'say' },
    { text: 'is a melody only we know.', className: 'say' },
    { text: 'Your smile lights up my darkest days,', className: 'say' },
    { text: 'your voice, my favorite sound.', className: 'say' },
    { text: 'If love were stars, you would be', className: 'say' },
    { text: 'the entire sky I found.', className: 'say' },
    { text: "Happy Valentine's Day, my love.", className: 'say' },
    { text: '', className: 'say' },
    { text: 'Yours, Raman', className: 'say' },
];

// ── Utility ──
function rand(min, max) {
    return min + Math.random() * (max - min);
}

function createHeartShape(s = 1) {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x, y + s * 0.5);
    shape.bezierCurveTo(x, y + s * 0.5, x - s * 0.5, y + s * 1.3, x - s, y + s * 0.5);
    shape.bezierCurveTo(x - s * 1.7, y - s * 0.2, x, y - s * 1.1, x, y - s * 1.6);
    shape.bezierCurveTo(x, y - s * 1.1, x + s * 1.7, y - s * 0.2, x + s, y + s * 0.5);
    shape.bezierCurveTo(x + s * 0.5, y + s * 1.3, x, y + s * 0.5, x, y + s * 0.5);
    return shape;
}

function typewriterEffect(element, rawHTML) {
    const originalHTML = rawHTML;
    element.innerHTML = '';
    element.style.display = 'block';
    const parts = [];
    let i = 0;
    while (i < originalHTML.length) {
        if (originalHTML[i] === '<') {
            const end = originalHTML.indexOf('>', i);
            parts.push({ type: 'tag', value: originalHTML.substring(i, end + 1) });
            i = end + 1;
        } else {
            parts.push({ type: 'char', value: originalHTML[i] });
            i++;
        }
    }
    let charIndex = 0;
    let html = '';
    for (const part of parts) {
        if (part.type === 'tag') { html += part.value; }
        else {
            const delay = charIndex * 60;
            html += part.value === ' '
                ? `<span class="char" style="animation-delay:${delay}ms">&nbsp;</span>`
                : `<span class="char" style="animation-delay:${delay}ms">${part.value}</span>`;
            charIndex++;
        }
    }
    element.innerHTML = html;
}

// ── Procedural 3D tree ──
const TREE_X_FINAL = 4;

function generateTree(origin, dir, length, radius, depth, maxDepth) {
    if (depth > maxDepth || radius < 0.008) return [];
    const end = origin.clone().add(dir.clone().multiplyScalar(length));
    const mid = origin.clone().lerp(end, 0.5);
    mid.x += rand(-length * 0.15, length * 0.15);
    mid.z += rand(-length * 0.12, length * 0.12);
    const branch = { start: origin.clone(), mid, end: end.clone(), radius, depth };
    const result = [branch];
    const childCount = depth === 0 ? 5 : depth === 1 ? 4 : depth < 4 ? (rand(2, 4) | 0) : (rand(1, 3) | 0);
    for (let i = 0; i < childCount; i++) {
        const spread = depth < 2 ? rand(0.3, 0.6) : rand(0.4, 0.9);
        const rotAngle = (i / childCount) * Math.PI * 2 + rand(-0.4, 0.4);
        const newDir = dir.clone();
        const axis = new THREE.Vector3(Math.cos(rotAngle), 0, Math.sin(rotAngle)).normalize();
        newDir.applyAxisAngle(axis, spread);
        newDir.y = Math.max(newDir.y, 0.2);
        newDir.normalize();
        result.push(...generateTree(end.clone(), newDir, length * rand(0.55, 0.75), radius * rand(0.45, 0.65), depth + 1, maxDepth));
    }
    return result;
}

// ── Song playlist ──
const PLAYLIST = [
    { src: '/love1.mp3', name: 'Love Song 1' },
    { src: '/love2.mp3', name: 'Love Song 2' },
    { src: '/love3.mp3', name: 'Love Song 3' },
    { src: '/love4.mp3', name: 'Love Song 4' },
];

// ── Music Player Component ──
function MusicPlayer({ show, audioRef, trackIndex, setTrackIndex }) {
    const [isPlaying, setIsPlaying] = useState(true);

    // When track changes, swap audio src
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.src = PLAYLIST[trackIndex].src;
        audio.play().then(() => setIsPlaying(true)).catch(() => { });
    }, [trackIndex]);

    // Auto-advance on song end
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const onEnded = () => setTrackIndex(prev => (prev + 1) % PLAYLIST.length);
        audio.addEventListener('ended', onEnded);
        return () => audio.removeEventListener('ended', onEnded);
    }, [trackIndex]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) { audio.pause(); setIsPlaying(false); }
        else { audio.play(); setIsPlaying(true); }
    };

    const nextTrack = () => setTrackIndex(prev => (prev + 1) % PLAYLIST.length);
    const prevTrack = () => setTrackIndex(prev => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);

    if (!show) return null;

    return (
        <div className="music-player">
            <div className="cd-container">
                <div className={`cd-disc ${isPlaying ? 'spinning' : ''}`}>
                    <div className="cd-label"></div>
                    <div className="cd-ring cd-ring-1"></div>
                    <div className="cd-ring cd-ring-2"></div>
                    <div className="cd-ring cd-ring-3"></div>
                    <div className="cd-hole"></div>
                </div>
            </div>
            <div className="player-info">
                <div className="song-name">{PLAYLIST[trackIndex].name}</div>
                <div className="player-controls">
                    <button className="control-btn" onClick={prevTrack} title="Previous">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                        </svg>
                    </button>
                    <button className="control-btn play-btn" onClick={togglePlay} title={isPlaying ? 'Pause' : 'Play'}>
                        {isPlaying ? (
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        )}
                    </button>
                    <button className="control-btn" onClick={nextTrack} title="Next">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

// ── Main Component ──
export default function BirthdaySurprise() {
    const mountRef = useRef(null);
    const codeRef = useRef(null);
    const audioRef = useRef(null);
    const heartbeatRef = useRef(null);
    const [trackIndex, setTrackIndex] = useState(0);
    const [started, setStarted] = useState(false);
    const [showText, setShowText] = useState(false);
    const [showPlayer, setShowPlayer] = useState(false);
    const sceneDataRef = useRef(null);

    const codeInnerHTML = MESSAGES.map(
        (msg) => `<span class="${msg.className}">${msg.text}</span><br>`
    ).join('\n');

    useEffect(() => {
        const container = mountRef.current;
        if (!container) return;
        const width = container.clientWidth || 1100;
        const height = container.clientHeight || 680;

        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 5, 16);
        camera.lookAt(0, 5, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);

        // Lighting
        scene.add(new THREE.AmbientLight(0x554444, 0.6));
        const dirLight = new THREE.DirectionalLight(0xffeedd, 1.2);
        dirLight.position.set(5, 15, 10);
        dirLight.castShadow = true;
        scene.add(dirLight);
        scene.add(new THREE.PointLight(0xff69b4, 0.8, 30).translateX(-3).translateY(8).translateZ(5));
        scene.add(new THREE.PointLight(0xffaa55, 0.5, 25).translateX(3).translateY(4).translateZ(8));

        // Seed heart
        const heartGeo = new THREE.ExtrudeGeometry(createHeartShape(0.6), {
            depth: 0.15, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 3,
        });
        const seedHeart = new THREE.Mesh(heartGeo, new THREE.MeshStandardMaterial({
            color: 0xff69b4, emissive: 0xff1493, emissiveIntensity: 0.3, roughness: 0.3, metalness: 0.2,
        }));
        seedHeart.position.set(0, 5.5, 0.5);
        seedHeart.rotation.z = Math.PI;
        scene.add(seedHeart);

        const label = { visible: true };
        const line = { visible: true };

        // Heartbeat audio - starts on hover/touch, loops until click
        if (!heartbeatRef.current) {
            heartbeatRef.current = new Audio('/heartbeat.mp3');
            heartbeatRef.current.loop = true;
        }
        const startHeartbeat = () => {
            if (heartbeatRef.current && heartbeatRef.current.paused) {
                heartbeatRef.current.play().catch(() => { });
            }
        };
        container.addEventListener('mouseover', startHeartbeat, { once: true });
        container.addEventListener('touchstart', startHeartbeat, { once: true });

        // Particles
        const pCount = 400;
        const pGeo = new THREE.BufferGeometry();
        const pPos = new Float32Array(pCount * 3);
        const pCol = new Float32Array(pCount * 3);
        for (let i = 0; i < pCount; i++) {
            pPos[i * 3] = rand(-10, 10); pPos[i * 3 + 1] = rand(0, 15); pPos[i * 3 + 2] = rand(-5, 5);
            pCol[i * 3] = 1; pCol[i * 3 + 1] = rand(0.4, 0.8); pCol[i * 3 + 2] = rand(0.6, 1);
        }
        pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
        pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
        const particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.08, vertexColors: true, transparent: true, opacity: 0.6 }));
        scene.add(particles);

        // Tree group — everything added to this rotates together
        const treeGroup = new THREE.Group();
        scene.add(treeGroup);

        const bloomMaterials = [];
        sceneDataRef.current = { scene, camera, renderer, seedHeart, label, line, particles, bloomMaterials, treeGroup };

        let animId;
        let time = 0;
        const animate = () => {
            animId = requestAnimationFrame(animate);
            time += 0.01;
            if (seedHeart.visible) seedHeart.scale.setScalar(1 + Math.sin(time * 3) * 0.08);

            // Rotate tree continuously
            if (treeGroup.children.length > 0) {
                treeGroup.rotation.y += 0.003;
            }

            const pos = particles.geometry.attributes.position;
            for (let i = 0; i < pCount; i++) {
                pos.array[i * 3 + 1] += 0.003;
                pos.array[i * 3] += Math.sin(time + i) * 0.002;
                if (pos.array[i * 3 + 1] > 15) pos.array[i * 3 + 1] = 0;
            }
            pos.needsUpdate = true;

            const gt = performance.now() / 1000;
            const bms = sceneDataRef.current?.bloomMaterials;
            if (bms) for (const { mat, phase } of bms) {
                mat.emissiveIntensity = 0.3 + 0.7 * Math.abs(Math.sin((gt + phase) * (Math.PI / 1.25)));
            }
            renderer.render(scene, camera);
        };
        animate();

        const onResize = () => {
            const w = container.clientWidth, h = container.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', onResize);
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', onResize);
            if (heartbeatRef.current) { heartbeatRef.current.pause(); }
            if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    const runAnimation = async () => {
        if (started) return;
        setStarted(true);

        const sd = sceneDataRef.current;
        if (!sd) return;

        // Stop heartbeat, start love songs
        if (heartbeatRef.current) {
            heartbeatRef.current.pause();
            heartbeatRef.current.currentTime = 0;
            heartbeatRef.current = null;
        }
        audioRef.current = new Audio(PLAYLIST[0].src);
        audioRef.current.play().catch(() => { });


        const { scene, seedHeart, label, line, treeGroup } = sd;

        // 1. Seed shrink + fall
        for (let i = 0; i < 30; i++) {
            const s = 1 - i / 30;
            seedHeart.scale.setScalar(s);
            seedHeart.position.y -= 0.12;
            await sleep(20);
        }
        seedHeart.visible = false;

        // 2. Grow 3D tree into the treeGroup
        const trunkMat = new THREE.MeshStandardMaterial({
            color: 0x4a2a0a, roughness: 0.9, metalness: 0.0,
            emissive: 0x1a0800, emissiveIntensity: 0.1,
        });
        const branchMat = new THREE.MeshStandardMaterial({
            color: 0x6b3d1f, roughness: 0.8, metalness: 0.0,
            emissive: 0x150600, emissiveIntensity: 0.08,
        });
        const twigMat = new THREE.MeshStandardMaterial({
            color: 0x8b5e3c, roughness: 0.7, metalness: 0.0,
            emissive: 0x1a0a00, emissiveIntensity: 0.05,
        });

        const origin = new THREE.Vector3(0, 0, 0);
        const allBranches = generateTree(origin, new THREE.Vector3(0, 1, 0), 3.2, 0.3, 0, 5);
        const branchPoints = [];

        for (let bi = 0; bi < allBranches.length; bi++) {
            const b = allBranches[bi];
            const curve = new THREE.QuadraticBezierCurve3(b.start, b.mid, b.end);
            const mat = b.depth < 1 ? trunkMat : b.depth < 3 ? branchMat : twigMat;
            const segs = b.depth < 2 ? 12 : 6;
            const radSegs = b.depth < 2 ? 8 : 4;

            const geo = new THREE.TubeGeometry(curve, segs, Math.max(b.radius, 0.006), radSegs, false);
            const mesh = new THREE.Mesh(geo, mat);
            mesh.castShadow = true;
            treeGroup.add(mesh); // add to group, not scene

            if (b.depth >= 2) {
                for (let t = 0.2; t <= 1.0; t += 0.15) {
                    branchPoints.push(curve.getPoint(t));
                }
            }

            if (b.depth < 1) await sleep(40);
            else if (b.depth < 3) { if (bi % 2 === 0) await sleep(12); }
            else { if (bi % 4 === 0) await sleep(5); }
        }

        // 2.5. Camera pan to right
        for (let step = 0; step <= 60; step++) {
            const t = step / 60;
            const ease = t * t * (3 - 2 * t);
            const cx = -TREE_X_FINAL * ease;
            sd.camera.position.x = cx;
            sd.camera.lookAt(cx, 5, 0);
            await sleep(16);
        }

        // 3. Bloom 800 flowers (added to treeGroup so they rotate with tree)
        const bloomCount = 800;
        const leafSizes = [0.06, 0.1, 0.16, 0.22];
        const bloomGeos = leafSizes.map(s => new THREE.ExtrudeGeometry(
            createHeartShape(s), { depth: 0.01 + s * 0.08, bevelEnabled: false }
        ));

        for (let i = 0; i < bloomCount; i++) {
            const bp = branchPoints[Math.floor(rand(0, branchPoints.length))];
            const bx = bp.x + rand(-1.2, 1.2);
            const by = bp.y + rand(-0.8, 0.8);
            const bz = bp.z + rand(-1.0, 1.0);

            const color = new THREE.Color(`hsl(${rand(330, 370) % 360}, ${rand(60, 100)}%, ${rand(60, 90)}%)`);
            const mat = new THREE.MeshStandardMaterial({
                color, emissive: color, emissiveIntensity: 0.3,
                roughness: 0.5, transparent: true, opacity: 0,
            });
            const geo = bloomGeos[Math.floor(rand(0, bloomGeos.length))];
            const flower = new THREE.Mesh(geo, mat);
            flower.position.set(bx, by, bz);
            flower.rotation.set(rand(0, Math.PI), rand(0, Math.PI), rand(0, Math.PI));
            const targetScale = rand(0.5, 1.8);
            flower.scale.setScalar(0.01);
            flower.userData.targetScale = targetScale;
            treeGroup.add(flower); // add to group

            sd.bloomMaterials.push({ mat, phase: rand(0, 2.5) });

            const delay = (i / bloomCount) * 3500;
            setTimeout(() => {
                const t0 = Date.now();
                const dur = 600;
                const anim = () => {
                    const el = Date.now() - t0;
                    const t = Math.min(el / dur, 1);
                    const ease = t * (2 - t);
                    flower.scale.setScalar(ease * flower.userData.targetScale);
                    mat.opacity = ease;
                    flower.rotation.z += 0.01;
                    if (t < 1) requestAnimationFrame(anim);
                };
                anim();
            }, delay);
        }

        await sleep(1500);

        // 4. Text + music player
        setShowText(true);
        await sleep(50);
        if (codeRef.current) typewriterEffect(codeRef.current, codeInnerHTML);
        await sleep(1500);
        setShowPlayer(true);
    };

    return (
        <div id="main">
            <div id="wrap">
                <div ref={mountRef} id="three-canvas" onClick={runAnimation}
                    style={{ cursor: started ? 'default' : 'pointer' }}>
                    {!started && (
                        <div className="click-me-overlay">
                            Click Me
                        </div>
                    )}
                </div>
                <div id="text">
                    <div id="code" ref={codeRef}
                        style={{ display: showText ? 'block' : 'none' }} />
                    <MusicPlayer show={showPlayer} audioRef={audioRef}
                        trackIndex={trackIndex} setTrackIndex={setTrackIndex} />
                </div>
            </div>
        </div>
    );
}
