function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.container, .menu');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the selected section
            const activeSection = document.getElementById(sectionId);
            if (activeSection) {
                activeSection.classList.add('active');
            }
        }

        // Show the introduction section by default
        showSection('intro');