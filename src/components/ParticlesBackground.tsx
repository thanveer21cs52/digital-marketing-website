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

    const particlesLoaded = async (
        _container?: Container,
    ): Promise<void> => {
        // particles loaded
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value:
                        currentTheme === "dark"
                            ? "#0b0b0b"
                            : "#fdfbf7",
                },
            },

            fpsLimit: 60,

            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },

                    onHover: {
                        enable: false,
                        mode: "grab",
                    },

                    resize: {
                        enable: true,
                    },
                },

                modes: {
                    push: {
                        quantity: 2,
                    },

                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.4,
                        },
                    },
                },
            },

            particles: {
                color: {
                    value:
                        currentTheme === "dark"
                            ? "#ffffff"
                            : "#6b3b14",
                },

                links: {
                    color:
                        currentTheme === "dark"
                            ? "#ffffff"
                            : "#b07a4f",

                    distance: 170,
                    enable: true,
                    opacity: 0.28,
                    width: 1,
                },

                move: {
                    direction: "none",
                    enable: true,

                    outModes: {
                        default: "bounce",
                    },

                    random: true,
                    speed: 1.1,
                    straight: false,
                },

                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },

                    value: 120,
                },

                opacity: {
                    value: 0.3,
                },

                shape: {
                    type: "circle",
                },

                size: {
                    value: {
                        min: 1.2,
                        max: 3.5,
                    },
                },
            },

            detectRetina: true,
        }),
        [currentTheme],
    );

    if (!init) return null;

    return (
        <Particles
            id="tsparticles"
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex: -1,
            }}
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
};

export default ParticlesBackground;