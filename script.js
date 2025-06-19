document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle (Dark/Light Mode) ---
    const themeToggle = document.querySelector('.theme-toggle');

    function setTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            themeToggle.textContent = '☀️';
        } else {
            document.body.classList.remove('light-mode');
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', theme); // Save preference
    }

    if (themeToggle) {
        // Apply saved theme on page load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme('dark'); 
        }

        themeToggle.addEventListener('click', () => {
            // Toggle between 'light' and 'dark'
            if (document.body.classList.contains('light-mode')) {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        });
    } else {
        console.warn("Theme toggle button with class '.theme-toggle' not found.");
    }

    //The loader thing
    const workData = [
        {
            title: "Game shaders",
            description: "Godot shaders for reactive grass, mobs, nodes. Each one of them is just drag and drop. No tedious setup.",
            technologies: "Godot, gdscript",
            mediaType: "video",
            mediaUrl: "images/a.mp4", 
            posterUrl: "images/butterflies.png",
            projectUrl: "#", 
            reversed: false 
        },
        {
            title: "Helper Libraries",
            description: "Lightweight wrapper libraries to ease the boilerplate pain. Currently wrapping around DearImgui and MiniAudio.<br> Capable of Non trivial use cases too",
            technologies: "C, C++, OpenGl, glfw, DearImgui, MiniAudio",
            mediaType: "image",
            mediaUrl: "images/loader_library.jpg",
            projectUrl: "#", 
            reversed: true 
        },
    ];


    function generateWorkShowcase() {
        const workShowcaseContainer = document.querySelector('#work-showcase-container');

        if (workShowcaseContainer) {
            workData.forEach(work => {
                const workEntryRow = document.createElement('div');
                workEntryRow.classList.add('work-entry-row');
                if (work.reversed) {
                    workEntryRow.classList.add('reversed');
                }

                let mediaHTML = ''; // This variable will hold either the <img> or <video> tag
                if (work.mediaType === 'image') {
                    mediaHTML = `<img src="${work.mediaUrl}" alt="${work.title}">`;
                } else if (work.mediaType === 'video') {
                    mediaHTML = `
                        <video autoplay loop muted playsinline preload="auto" poster="${work.posterUrl}">
                            <source src="${work.mediaUrl}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>
                    `;
                }

                workEntryRow.innerHTML = `
                    <div class="work-image-column">
                        ${mediaHTML}
                    </div>
                    <div class="work-details-column">
                        <h3>${work.title}</h3>
                        <p>${work.description}</p>
                        <p><strong>Technologies:</strong> ${work.technologies}</p>
                        <a href="${work.projectUrl}" class="btn primary-btn" target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                `;
                workShowcaseContainer.appendChild(workEntryRow);
            });
        } else {
            console.error("Work showcase container with ID '#work-showcase-container' not found.");
        }
    }
    generateWorkShowcase();

});