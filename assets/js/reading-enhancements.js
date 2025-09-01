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
        
        // Search button
        const searchBtn = document.createElement('button');
        searchBtn.innerHTML = '🔍';
        searchBtn.title = 'Search All Chapters';
        searchBtn.addEventListener('click', () => {
            // Navigate to search page with proper path resolution
            const currentPath = window.location.pathname;
            const searchPath = currentPath.includes('/chapters/') ? '../../../search.html' : 'search.html';
            window.location.href = searchPath;
        });
        
        toolsContainer.appendChild(darkModeBtn);
        toolsContainer.appendChild(focusModeBtn);
        toolsContainer.appendChild(fontUpBtn);
        toolsContainer.appendChild(fontDownBtn);
        toolsContainer.appendChild(scrollTopBtn);
        toolsContainer.appendChild(searchBtn);
        
        document.body.appendChild(toolsContainer);
    }

    // Add Quran.com-style navigation arrows
    function addNavigationArrows() {
        // Get current page info from meta tags or URL
        const currentChapter = getCurrentChapterInfo();
        if (!currentChapter) return;
        
        // Create navigation container
        const navContainer = document.createElement('div');
        navContainer.className = 'quran-style-nav';
        
        // Previous chapter arrow
        if (currentChapter.prev) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'nav-arrow prev-arrow';
            prevBtn.innerHTML = `
                <div class="arrow-icon">←</div>
                <div class="nav-text">
                    <div class="nav-label">Previous</div>
                    <div class="nav-title">${currentChapter.prev.title}</div>
                </div>
            `;
            prevBtn.addEventListener('click', () => {
                window.location.href = currentChapter.prev.url;
            });
            navContainer.appendChild(prevBtn);
        }
        
        // Chapter selector dropdown
        const chapterSelector = document.createElement('div');
        chapterSelector.className = 'chapter-selector';
        chapterSelector.innerHTML = `
            <button class="selector-btn">
                <span>Chapter ${currentChapter.number}</span>
                <span class="dropdown-icon">▼</span>
            </button>
            <div class="chapter-dropdown">
                ${generateChapterList(currentChapter.number)}
            </div>
        `;
        navContainer.appendChild(chapterSelector);
        
        // Next chapter arrow
        if (currentChapter.next) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'nav-arrow next-arrow';
            nextBtn.innerHTML = `
                <div class="nav-text">
                    <div class="nav-label">Next</div>
                    <div class="nav-title">${currentChapter.next.title}</div>
                </div>
                <div class="arrow-icon">→</div>
            `;
            nextBtn.addEventListener('click', () => {
                window.location.href = currentChapter.next.url;
            });
            navContainer.appendChild(nextBtn);
        }
        
        // Insert navigation at top and bottom of content
        const wrapper = document.querySelector('.chapter-container') || document.querySelector('.wrapper');
        if (wrapper) {
            // Only add if not already present
            if (!wrapper.querySelector('.quran-style-nav')) {
                wrapper.insertBefore(navContainer.cloneNode(true), wrapper.firstChild);
                wrapper.appendChild(navContainer);
            }
        }
        
        // Add dropdown functionality
        addDropdownFunctionality();
    }
    
    // Get current chapter information
    function getCurrentChapterInfo() {
        // Try to get from meta tags first
        const chapterMeta = document.querySelector('meta[name="chapter_number"]');
        const titleMeta = document.querySelector('meta[name="chapter_title"]');
        
        let chapterNumber = null;
        let chapterTitle = '';
        
        if (chapterMeta) {
            chapterNumber = parseInt(chapterMeta.content);
        } else {
            // Parse from URL or page title
            const path = window.location.pathname;
            const match = path.match(/chapter-(\d+)/);
            if (match) {
                chapterNumber = parseInt(match[1]);
            }
        }
        
        if (titleMeta) {
            chapterTitle = titleMeta.content;
        } else {
            // Get from page title
            const h1 = document.querySelector('h1');
            if (h1) {
                chapterTitle = h1.textContent.replace(/^Chapter \d+:\s*/, '');
            }
        }
        
        if (!chapterNumber) return null;
        
        return {
            number: chapterNumber,
            title: chapterTitle,
            prev: chapterNumber > 1 ? getChapterInfo(chapterNumber - 1) : null,
            next: chapterNumber < 72 ? getChapterInfo(chapterNumber + 1) : null
        };
    }
    
    // Get chapter info by number
    function getChapterInfo(chapterNum) {
        const chapters = {
            1: { title: "This Book Is For You", section: "foundation" },
            2: { title: "The Prayer Revolution", section: "foundation" },
            3: { title: "No Priests Needed", section: "foundation" },
            4: { title: "The Reality Principle", section: "foundation" },
            5: { title: "The Equality Law", section: "foundation" },
            6: { title: "The Harm Prevention", section: "foundation" },
            7: { title: "Anti-Violence Absolute", section: "foundation" },
            8: { title: "Anti-Slavery Absolute", section: "foundation" },
            9: { title: "The Jealousy Killer", section: "foundation" },
            10: { title: "The Ego Death", section: "foundation" },
            11: { title: "The Focus Power", section: "foundation" },
            12: { title: "Universal Friendship", section: "foundation" },
            13: { title: "The Compassion Practice", section: "foundation" },
            14: { title: "The Justice Commitment", section: "foundation" },
            15: { title: "The Truth Seeking", section: "foundation" },
            16: { title: "The Peace Making", section: "foundation" },
            17: { title: "The Hope Cultivation", section: "foundation" },
            18: { title: "The Unity Vision", section: "foundation" },
            19: { title: "How to Choose Life Partners", section: "relationships" },
            20: { title: "Building Lasting Love", section: "relationships" },
            21: { title: "Handling Relationship Conflict", section: "relationships" },
            22: { title: "When Relationships End", section: "relationships" },
            23: { title: "Family Relationships", section: "relationships" },
            24: { title: "Parenting Excellence", section: "relationships" },
            25: { title: "Teen Guidance", section: "relationships" },
            26: { title: "Friendship Skills", section: "relationships" },
            27: { title: "Social Skills Mastery", section: "relationships" },
            28: { title: "Dealing with Difficult People", section: "relationships" },
            29: { title: "Building Community", section: "relationships" },
            30: { title: "Leadership Without Authority", section: "relationships" },
            31: { title: "Physical Health", section: "personal" },
            32: { title: "Mental Health", section: "personal" },
            33: { title: "Emotional Intelligence", section: "personal" },
            34: { title: "Learning Systems", section: "personal" },
            35: { title: "Skill Mastery", section: "personal" },
            36: { title: "Time Management", section: "personal" },
            37: { title: "Goal Achievement", section: "personal" },
            38: { title: "Habit Formation", section: "personal" },
            39: { title: "Decision Making", section: "personal" },
            40: { title: "Problem Solving", section: "personal" },
            41: { title: "Creative Thinking", section: "personal" },
            42: { title: "Personal Growth", section: "personal" },
            43: { title: "Money Reality", section: "financial" },
            44: { title: "Earning Excellence", section: "financial" },
            45: { title: "Saving Systems", section: "financial" },
            46: { title: "Investment Intelligence", section: "financial" },
            47: { title: "Debt Destruction", section: "financial" },
            48: { title: "Budget Mastery", section: "financial" },
            49: { title: "Career Building", section: "financial" },
            50: { title: "Entrepreneurship Path", section: "financial" },
            51: { title: "Wealth Building", section: "financial" },
            52: { title: "Financial Protection", section: "financial" },
            53: { title: "Teaching Money", section: "financial" },
            54: { title: "Money and Happiness", section: "financial" },
            55: { title: "Truth and Honesty", section: "wisdom" },
            56: { title: "Integrity Living", section: "wisdom" },
            57: { title: "Courage Development", section: "wisdom" },
            58: { title: "Humility Practice", section: "wisdom" },
            59: { title: "Patience Mastery", section: "wisdom" },
            60: { title: "Forgiveness Power", section: "wisdom" },
            61: { title: "Gratitude Habit", section: "wisdom" },
            62: { title: "Compassion Action", section: "wisdom" },
            63: { title: "Justice Seeking", section: "wisdom" },
            64: { title: "Wisdom Integration", section: "wisdom" },
            65: { title: "Character Building", section: "wisdom" },
            66: { title: "Legacy Creation", section: "wisdom" },
            67: { title: "Handling Stress", section: "navigation" },
            68: { title: "Managing Crisis", section: "navigation" },
            69: { title: "Dealing with Failure", section: "navigation" },
            70: { title: "Finding Happiness", section: "navigation" },
            71: { title: "Preparing for Death", section: "navigation" },
            72: { title: "The Infinite Journey", section: "navigation" }
        };
        
        const chapter = chapters[chapterNum];
        if (!chapter) return null;
        
        const filename = `chapter-${chapterNum.toString().padStart(2, '0')}-${chapter.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}.html`;
        
        return {
            number: chapterNum,
            title: chapter.title,
            url: `../${chapter.section}/${filename}`,
            section: chapter.section
        };
    }
    
    // Generate chapter list for dropdown
    function generateChapterList(currentChapter) {
        let html = '';
        for (let i = 1; i <= 72; i++) {
            const chapter = getChapterInfo(i);
            if (chapter) {
                const isActive = i === currentChapter ? ' class="active"' : '';
                html += `<a href="${chapter.url}"${isActive}>
                    <span class="chapter-num">Chapter ${i}</span>
                    <span class="chapter-title">${chapter.title}</span>
                </a>`;
            }
        }
        return html;
    }
    
    // Add dropdown functionality
    function addDropdownFunctionality() {
        document.querySelectorAll('.chapter-selector').forEach(selector => {
            const btn = selector.querySelector('.selector-btn');
            const dropdown = selector.querySelector('.chapter-dropdown');
            
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', () => {
                dropdown.classList.remove('show');
            });
        });
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
            
            const currentChapter = getCurrentChapterInfo();
            
            switch(e.key) {
                case 'd':
                case 'D':
                    toggleDarkMode();
                    showKeyboardHint('Dark mode toggled');
                    break;
                case 'f':
                case 'F':
                    toggleFocusMode();
                    showKeyboardHint('Focus mode toggled');
                    break;
                case '+':
                case '=':
                    changeFontSize(1.1);
                    showKeyboardHint('Font size increased');
                    break;
                case '-':
                    changeFontSize(0.9);
                    showKeyboardHint('Font size decreased');
                    break;
                case 'Home':
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    showKeyboardHint('Scrolled to top');
                    break;
                case 'ArrowLeft':
                    if (currentChapter && currentChapter.prev) {
                        window.location.href = currentChapter.prev.url;
                    }
                    break;
                case 'ArrowRight':
                    if (currentChapter && currentChapter.next) {
                        window.location.href = currentChapter.next.url;
                    }
                    break;
                case 'h':
                case 'H':
                    showKeyboardHelp();
                    break;
                case 's':
                case 'S':
                    // Navigate to search page
                    const currentPath = window.location.pathname;
                    const searchPath = currentPath.includes('/chapters/') ? '../../../search.html' : 'search.html';
                    window.location.href = searchPath;
                    break;
            }
        });
    }
    
    // Show keyboard hint
    function showKeyboardHint(message) {
        let hint = document.querySelector('.keyboard-hint');
        if (!hint) {
            hint = document.createElement('div');
            hint.className = 'keyboard-hint';
            document.body.appendChild(hint);
        }
        
        hint.textContent = message;
        hint.classList.add('show');
        
        setTimeout(() => {
            hint.classList.remove('show');
        }, 2000);
    }
    
    // Show keyboard help
    function showKeyboardHelp() {
        const helpText = `
Keyboard Shortcuts:
← → Navigate chapters
S - Search all chapters
D - Toggle dark mode
F - Toggle focus mode
+ - Increase font size
- - Decrease font size
H - Show this help
Home - Scroll to top
        `.trim();
        
        showToast(helpText);
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
        addNavigationArrows();
        addVerseInteractions();
        addKeyboardShortcuts();
        addHighlightStyles();
        restorePreferences();
        
        // Show welcome message for first-time visitors
        if (!localStorage.getItem('welcomeShown')) {
            setTimeout(() => {
                showToast('Welcome to The Book of Joa! Press S to search, D for dark mode, H for help ✨');
                localStorage.setItem('welcomeShown', 'true');
            }, 2000);
        }
    }

    // Start the magic
    init();
})();
