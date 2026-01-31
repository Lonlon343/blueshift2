import * as THREE from 'three';

export class EfficiencyChart {
    constructor(containerId, onHoverCallback) {
        this.containerId = containerId;
        this.onHoverCallback = onHoverCallback; // Function to call when a segment is hovered
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.segments = [];
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.hoveredSegment = null;

        // Data mapping for the 5 segments
        this.data = [
            { id: 'email', color: 0x3b82f6, label: 'E-Mail & Anfragen' },     // Blue 500
            { id: 'offers', color: 0x2563eb, label: 'Angebote & Aufträge' },  // Blue 600
            { id: 'comms', color: 0x1e40af, label: 'Kommunikation' },         // Blue 800
            { id: 'docs', color: 0x1e3a8a, label: 'Dokumente & Daten' },      // Blue 900
            { id: 'marketing', color: 0x60a5fa, label: 'Marketing & Vertrieb' } // Blue 400
        ];

        setTimeout(() => this.init(), 0);
    }

    init() {
        const container = document.getElementById(this.containerId);
        if (!container) return;

        // SCENE
        this.scene = new THREE.Scene();

        // CAMERA
        const width = container.clientWidth;
        const height = container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        this.camera.position.z = 14;
        this.camera.position.y = -30;
        this.camera.lookAt(0, 0, 0);

        // RENDERER
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(this.renderer.domElement);

        // LIGHTS
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(5, 10, 7);
        this.scene.add(dirLight);

        // GEOMETRY (Donut Segments)
        const innerRadius = 4;
        const outerRadius = 8;
        const segmentAngle = (Math.PI * 2) / this.data.length;
        const gap = 0.04; // Gap between segments

        this.data.forEach((item, index) => {
            // Create a Shape for extrusion to make it 3D (thick disk)
            const shape = new THREE.Shape();
            const startAngle = gap / 2;
            const endAngle = segmentAngle - gap / 2;

            shape.absarc(0, 0, outerRadius, startAngle, endAngle, false);
            shape.absarc(0, 0, innerRadius, endAngle, startAngle, true); // inner circle (reverse)

            const extrudeSettings = {
                depth: 1,
                bevelEnabled: true,
                bevelThickness: 0.1,
                bevelSize: 0.1,
                bevelSegments: 2,
                curveSegments: 32
            };

            const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

            // Material
            const material = new THREE.MeshPhongMaterial({
                color: item.color,
                transparent: true,
                opacity: 0.9,
                shininess: 60
            });

            const mesh = new THREE.Mesh(geometry, material);

            // Rotate the segment to its position
            // Using a group or pivoting helper might be easier, but simple rotation works
            mesh.rotation.z = index * segmentAngle;

            // Center the pivot? Extrude geometry is created from origin. 
            // We just need to rotate it around Z.

            // Store metadata
            mesh.userData = { id: item.id, originalColor: item.color };

            this.scene.add(mesh);
            this.segments.push(mesh);
        });

        // INTERACTION LISTENERS
        container.addEventListener('mousemove', (e) => this.onMouseMove(e, container));
        this.container = container;

        // ANIMATION LOOP
        this.animate();

        // RESIZE
        window.addEventListener('resize', () => this.onWindowResize(container));
    }

    onMouseMove(event, container) {
        const rect = container.getBoundingClientRect();
        this.mouse.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

        // Check intersections
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.segments);

        if (intersects.length > 0) {
            if (this.hoveredSegment !== intersects[0].object) {
                // Restore previous
                if (this.hoveredSegment) {
                    this.hoveredSegment.material.emissive.setHex(0x000000);
                    this.hoveredSegment.scale.set(1, 1, 1);
                }

                // Highlight new
                this.hoveredSegment = intersects[0].object;
                this.hoveredSegment.material.emissive.setHex(0x444444); // Glow
                this.hoveredSegment.scale.set(1.05, 1.05, 1); // Slight pop

                // Verify rotation axis for scale... default scale is local, should be fine?
                // Actually since we rotated Z, scaling local X/Y works along the segment plane.

                // Callback
                if (this.onHoverCallback) {
                    this.onHoverCallback(this.hoveredSegment.userData.id);
                }

                // Pause rotation?
                // Let's not pause whole rotation, just maybe slow it down or stop.
            }
        } else {
            if (this.hoveredSegment) {
                this.hoveredSegment.material.emissive.setHex(0x000000);
                this.hoveredSegment.scale.set(1, 1, 1);
                this.hoveredSegment = null;

                if (this.onHoverCallback) {
                    this.onHoverCallback(null);
                }
            }
        }
    }

    onWindowResize(container) {
        if (!this.camera || !this.renderer) return;
        this.camera.aspect = container.clientWidth / container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth, container.clientHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Gentle global rotation
        if (!this.hoveredSegment) {
            this.scene.rotation.z += 0.002;
        }

        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }
    }
}
