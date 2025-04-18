
        document.addEventListener("DOMContentLoaded", () => {
            const body = document.body;
            const insigniaCount = Math.floor(window.innerWidth / 100);
            const placedInsignias = []; // Array to store placed insignias' positions

            for (let i = 0; i < insigniaCount; i++) {
                let validPosition = false;
                let x, y;

                while (!validPosition) {
                    x = Math.random() * 85; // Random left position
                    y = Math.random() * 150; // Random top position

                    // Check for overlap
                    validPosition = placedInsignias.every(insignia => {
                        const buffer = 5; // Minimum distance between insignias
                        return (
                            x + buffer > insignia.x + insignia.width || // No overlap on the right
                            x + 5 < insignia.x || // No overlap on the left
                            y + buffer > insignia.y + insignia.height || // No overlap below
                            y + 5 < insignia.y // No overlap above
                        );
                    });
                }

                // Create and place the insignia
                const insignia = document.createElement("div");
                insignia.classList.add("yellowjackets-insignia");
                insignia.style.left = `${x}vw`;
                insignia.style.top = `${y}vh`;

                // Add to the body
                body.appendChild(insignia);

                // Store its position
                const rect = insignia.getBoundingClientRect();
                placedInsignias.push({
                    x: rect.left,
                    y: rect.top,
                    width: rect.width,
                    height: rect.height,
                });
            }
        });