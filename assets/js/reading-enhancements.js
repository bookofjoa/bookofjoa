// Reading Enhancement Features for The Book of Joa
// Anonymous contributions for better user experience

(function() {
    'use strict';

    // Add reading progress bar
    function addProgressBar() {
        const progressContainer = document.createElement('div');
        progressContainer.className = 'progress-container';
        
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        
        progressContainer.appendChild(progressBar);
        document.body.insertBefore(progressContainer, document.body.firstChild);
        
        // Update progress on scroll
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = progress + '%';
        });
    }

    // Add floating reading tools
    function addReadingTools() {
        const toolsContainer = document.createElement('div');
        toolsContainer.className = 'reading-tools';
        
        // Dark mode toggle
        const darkModeBtn = document.createElement('button');
        darkModeBtn.innerHTML = '🌙';
        darkModeBtn.title = 'Toggle Dark Mode';
        darkModeBtn.addEventListener('click', toggleDarkMode);
        
        // Focus mode toggle
        const focusModeBtn = document.createElement('button');
        focusModeBtn.innerHTML = '🎯';
        focusModeBtn.title = 'Toggle Focus Mode';
        focusModeBtn.addEventListener('click', toggleFocusMode);
        
        // Font size controls
        const fontUpBtn = document.createElement('button');
        fontUpBtn.innerHTML = 'A+';
        fontUpBtn.title = 'Increase Font Size';
        fontUpBtn.addEventListener('click', () => changeFontSize(1.1));
        
        const fontDownBtn = document.createElement('button');
        fontDownBtn.innerHTML = 'A-';
        fontDownBtn.title = 'Decrease Font Size';
        fontDownBtn.addEventListener('click', () => changeFontSize(0.9));
        
        // Scroll to top
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.innerHTML = '⬆️';
        scrollTopBtn.title = 'Scroll to Top';
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        toolsContainer.appendChild(darkModeBtn);
        toolsContainer.appendChild(focusModeBtn);
        toolsContainer.appendChild(fontUpBtn);
        toolsContainer.appendChild(fontDownBtn);
        toolsContainer.appendChild(scrollTopBtn);
        
        document.body.appendChild(toolsContainer);
    }

    // Dark mode functionality
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    // Focus mode functionality
    function toggleFocusMode() {
        document.body.classList.toggle('focus-mode');
        localStorage.setItem('focusMode', document.body.classList.contains('focus-mode'));
    }

    // Font size adjustment
    let currentFontSize = 1;
    function changeFontSize(multiplier) {
        currentFontSize *= multiplier;
        if (currentFontSize < 0.8) currentFontSize = 0.8;
        if (currentFontSize > 1.5) currentFontSize = 1.5;
        
        document.documentElement.style.fontSize = (currentFontSize * 16) + 'px';
        localStorage.setItem('fontSize', currentFontSize);
    }

    // Add verse interaction effects
    function addVerseInteractions() {
        const verses = document.querySelectorAll('.verse');
        verses.forEach(verse => {
            // Click to highlight verse
            verse.addEventListener('click', function() {
                verses.forEach(v => v.classList.remove('highlighted'));
                this.classList.add('highlighted');
            });
            
            // Double-click to copy verse text
            verse.addEventListener('dblclick', function() {
                const text = this.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    showToast('Verse copied to clipboard! 📋');
                });
            });
        });
    }

    // Add keyboard shortcuts
    function addKeyboardShortcuts() {
        document.addEventListener('keydown', function(e) {
            // Only if not typing in an input
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            switch(e.key) {
                case 'd':
                case 'D':
                    toggleDarkMode();
                    break;
                case 'f':
                case 'F':
                    toggleFocusMode();
                    break;
                case '+':
                case '=':
                    changeFontSize(1.1);
                    break;
                case '-':
                    changeFontSize(0.9);
                    break;
                case 'Home':
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
            }
        });
    }

    // Toast notification system
    function showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            z-index: 10000;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    // Restore user preferences
    function restorePreferences() {
        // Dark mode
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
        }
        
        // Focus mode
        if (localStorage.getItem('focusMode') === 'true') {
            document.body.classList.add('focus-mode');
        }
        
        // Font size
        const savedFontSize = localStorage.getItem('fontSize');
        if (savedFontSize) {
            currentFontSize = parseFloat(savedFontSize);
            document.documentElement.style.fontSize = (currentFontSize * 16) + 'px';
        }
    }

    // Add highlight effect CSS
    function addHighlightStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .verse.highlighted {
                background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%) !important;
                color: white !important;
                transform: scale(1.02);
                z-index: 10;
                position: relative;
            }
            
            .verse.highlighted::before {
                content: "⭐";
                color: #ffff00;
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize all features when page loads
    function init() {
        // Wait for page to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        addProgressBar();
        addReadingTools();
        addVerseInteractions();
        addKeyboardShortcuts();
        addHighlightStyles();
        restorePreferences();
        
        // Show welcome message for first-time visitors
        if (!localStorage.getItem('welcomeShown')) {
            setTimeout(() => {
                showToast('Welcome to The Book of Joa! Press D for dark mode, F for focus mode ✨');
                localStorage.setItem('welcomeShown', 'true');
            }, 2000);
        }
    }

    // Start the magic
    init();
})();
