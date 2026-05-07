import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "../context/ThemeContext";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    const { currentTheme } = useTheme();

    useEffect(() => {
        initParticlesEngine(async (engine: any) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (_container?: Container): Promise<void> => {
        // console.log("Particles loaded", container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: "#4A1C11",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: {
                        enable: true
                    }
                },
                modes: {
                    push: {
                        quantity: 2,
                    },
                    grab: {
                        distance: 200,
                        links: {
                            opacity: 0.5
                        }
                    },
                },
            },
            particles: {
                color: {
                    value: typeof window !== "undefined"
                        ? getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || "#fcf8f1"
                        : "#fcf8f1",
                },
                links: {
                    color: typeof window !== "undefined"
                        ? getComputedStyle(document.documentElement).getPropertyValue('--primary').trim() || "#764024"
                        : "#764024",
                    distance: 150,
                    enable: true,
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.28,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        }),
        [currentTheme],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                className="fixed inset-0"
                style={{ zIndex: -1 }}
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return null;
};

export default ParticlesBackground;
