---
layout: default
title: "Chapter 66: Legacy Creation"
description: "Wisdom Integration - 6666 verses on character building"
section: "Wisdom Integration"
chapter_number: 66
total_verses: 6666
nav_order: 66
---

<meta name="chapter_number" content="66">
<meta name="chapter_title" content="Legacy Creation">
<meta name="section" content="wisdom">

<style>
/* Advanced Chapter Styling - Bible/Quran Interface */
.chapter-container {
  max-width: 950px;
  margin: 0 auto;
  padding: 25px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0,0,0,0.12);
  position: relative;
  overflow: hidden;
}

.chapter-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  z-index: 1;
}

.chapter-header {
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px 30px;
  border-radius: 20px;
  margin: 20px 0 35px 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.chapter-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.15), transparent, rgba(255,255,255,0.15));
  pointer-events: none;
}

.chapter-header h1 {
  font-size: 2.2em;
  margin: 15px 0 10px 0;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-meta {
  position: relative;
  z-index: 2;
  opacity: 0.95;
  font-size: 1.1em;
}

.logo-header {
  background: white;
  padding: 12px;
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  border: 3px solid rgba(255,255,255,0.6);
  transition: all 0.3s ease;
}

.logo-header:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 35px rgba(0,0,0,0.4);
}

.chapter-nav-clean {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 18px 30px;
  margin: 30px 0;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
  position: relative;
  overflow: hidden;
}

.chapter-nav-clean::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  pointer-events: none;
}

.nav-arrow {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,0.18);
  border: 2px solid rgba(255,255,255,0.35);
  color: white;
  padding: 14px 24px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(15px);
  min-width: 160px;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.nav-arrow:hover {
  background: rgba(255,255,255,0.28);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.3);
  color: white;
  text-decoration: none;
  border-color: rgba(255,255,255,0.5);
}

.nav-arrow.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
  background: rgba(255,255,255,0.1);
}

.chapter-selector {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(240, 147, 251, 0.4);
  position: relative;
  z-index: 2;
}

.chapter-selector:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(240, 147, 251, 0.5);
  background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
}

.verse {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 30px;
  margin: 25px 0;
  border-radius: 18px;
  border-left: 6px solid #3498db;
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
  position: relative;
  transition: all 0.4s ease;
  cursor: pointer;
  font-size: 1.05em;
  line-height: 1.7;
}

.verse:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-left-color: #e74c3c;
}

.verse::before {
  content: "✨";
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 1.4em;
  transition: all 0.4s ease;
  opacity: 0.7;
}

.verse:hover::before {
  transform: rotate(180deg) scale(1.3);
  opacity: 1;
}

.verse-number {
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 15px;
  display: block;
  color: #2c3e50;
  text-shadow: 1px 1px 2px rgba(255,255,255,0.5);
}

.chapter-footer {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 30px;
  margin: 40px 0 30px 0;
  border-radius: 15px;
  text-align: center;
  border: 3px solid #667eea;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

.chapter-footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.3), transparent);
  pointer-events: none;
}

.chapter-footer h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
}

.chapter-footer p {
  position: relative;
  z-index: 2;
}

.values-section {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 35px;
  margin: 35px 0;
  border-radius: 20px;
  border-left: 6px solid #f39c12;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.values-section h2 {
  color: #e67e22;
  margin-bottom: 25px;
  text-align: center;
  font-size: 1.8em;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.value-item {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  border-top: 4px solid #3498db;
}

.value-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0,0,0,0.15);
  border-top-color: #e74c3c;
}

.value-item h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.2em;
}

/* Advanced Typography */
.chapter-container p {
  font-size: 1.05em;
  line-height: 1.7;
  margin-bottom: 15px;
}

.chapter-container h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

/* Advanced Responsive Design */
@media (max-width: 768px) {
  .chapter-nav-clean {
    flex-direction: column;
    gap: 18px;
    padding: 20px;
  }
  
  .nav-arrow {
    width: 100%;
    min-width: auto;
  }
  
  .chapter-container {
    margin: 15px;
    padding: 20px;
  }
  
  .chapter-header {
    padding: 30px 20px;
  }
  
  .chapter-header h1 {
    font-size: 1.8em;
  }
  
  .verse {
    padding: 25px 20px;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .chapter-header h1 {
    font-size: 1.6em;
  }
  
  .verse {
    padding: 20px 15px;
    font-size: 1em;
  }
  
  .verse-number {
    font-size: 1.2em;
  }
}

/* Reading Mode Enhancements */
.verse:focus {
  outline: 3px solid #667eea;
  outline-offset: 3px;
}

/* Print Styles */
@media print {
  .chapter-nav-clean,
  .chapter-selector {
    display: none;
  }
  
  .verse {
    background: white;
    box-shadow: none;
    border: 1px solid #ddd;
  }
}
</style>

<div class="chapter-container">

<div class="chapter-header">
<img src="../../../assets/logo-white.svg" alt="The Book of Joa Logo" width="85" class="logo-header">
<h1>🕊️ Legacy Creation</h1>
<p class="chapter-meta"><em>Wisdom Integration • 6666 verses on character building</em></p>
</div>

<div class="chapter-nav-clean">
<a href="chapter-65-character-building.html" class="nav-arrow">
  ← Previous
</a>
<button class="chapter-selector" onclick="window.location.href='../index.html'">
  📖 Browse All Chapters
</button>
<a href="NE66T_CHAPTER_URL" class="nav-arrow">
  Next →
</a>
</div>

<div class="verse">
<h3><span class="verse-number">💫 Verse 1</span></h3>
<p>### Section 1: Reality Foundation (Verses 1-22)</p>
</div>

<div class="verse">
<h3><span class="verse-number">💫 Verse 1</span></h3>
<p>True legacy begins with recognizing that every human being has equal worth and potential, building something that serves all people rather than just yourself.</p>
</div>

<div class="verse">
<h3><span class="verse-number">✨ Verse 2</span></h3>
<p>The ultimate life creates impact through daily actions rather than grand gestures, knowing that consistent kindness toward all people creates lasting change.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌟 Verse 3</span></h3>
<p>Legacy is not about being remembered but about making life better for future generations, ensuring equal opportunities and dignity for every person.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🎯 Verse 4</span></h3>
<p>The ultimate life invests time in developing others, teaching skills and sharing knowledge with anyone regardless of their background or circumstances.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💎 Verse 5</span></h3>
<p>Create legacy through the problems you solve for humanity, focusing on challenges that affect people universally rather than just privileged groups.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔮 Verse 6</span></h3>
<p>The ultimate life builds systems and structures that continue serving people long after you're gone, ensuring equal access and fair treatment.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌈 Verse 7</span></h3>
<p>Legacy comes from changing culture toward greater equality and justice, challenging unfair systems that harm or exclude any group of people.</p>
</div>

<div class="verse">
<h3><span class="verse-number">⭐ Verse 8</span></h3>
<p>The ultimate life leaves behind knowledge and wisdom that helps others make better decisions, sharing insights that benefit all humanity.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔥 Verse 9</span></h3>
<p>True legacy protects future generations from the mistakes and harm of the past, breaking cycles of inequality and injustice.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💡 Verse 10</span></h3>
<p>The ultimate life creates beauty, art, and inspiration that uplifts human spirits across all cultures and brings people together.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💫 Verse 11</span></h3>
<p>Legacy includes the people you've influenced positively, who then influence others positively, creating expanding circles of human flourishing.</p>
</div>

<div class="verse">
<h3><span class="verse-number">✨ Verse 12</span></h3>
<p>The ultimate life documents important knowledge and experiences, preserving valuable insights for future people to learn and benefit from.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌟 Verse 13</span></h3>
<p>Build legacy by solving problems that affect the most vulnerable people in society, ensuring your impact serves those who need it most.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🎯 Verse 14</span></h3>
<p>The ultimate life creates opportunities for others to succeed, opening doors and removing barriers that prevent people from reaching their potential.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💎 Verse 15</span></h3>
<p>Legacy comes from the love you give freely to all people, treating every human being with equal respect and compassion.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔮 Verse 16</span></h3>
<p>The ultimate life challenges harmful traditions and practices, working to eliminate customs that cause suffering or inequality for any group.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌈 Verse 17</span></h3>
<p>True legacy includes teaching people to think critically and question authority, empowering them to protect themselves from exploitation.</p>
</div>

<div class="verse">
<h3><span class="verse-number">⭐ Verse 18</span></h3>
<p>The ultimate life invests in education and learning opportunities that are accessible to everyone regardless of economic circumstances.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔥 Verse 19</span></h3>
<p>Legacy is built through the justice you pursue for all people, fighting against systems that treat any human being as less worthy.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💡 Verse 20</span></h3>
<p>The ultimate life creates healing and reconciliation between divided groups, building bridges across differences that separate people.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💫 Verse 21</span></h3>
<p>Build legacy by developing sustainable solutions to human problems, ensuring your positive impact continues benefiting future generations.</p>
</div>

<div class="verse">
<h3><span class="verse-number">✨ Verse 22</span></h3>
<p>The ultimate life leaves behind tools, resources, and methods that help others solve problems and improve their lives.
### Section 2: Practical Implementation (Verses 23-44)</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌟 Verse 23</span></h3>
<p>Start building legacy today by mentoring someone younger or less experienced, sharing your skills and knowledge generously with them.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🎯 Verse 24</span></h3>
<p>The ultimate life documents your learning process and mistakes, creating guides that help others avoid similar problems and achieve success faster.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💎 Verse 25</span></h3>
<p>Create legacy through volunteer work that addresses real human needs, focusing your efforts where they can help the most people.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔮 Verse 26</span></h3>
<p>The ultimate life supports causes and organizations that promote equality and justice for all people, especially marginalized groups.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌈 Verse 27</span></h3>
<p>Build legacy by developing your unique talents and skills to their highest level, then using them to serve all humanity.</p>
</div>

<div class="verse">
<h3><span class="verse-number">⭐ Verse 28</span></h3>
<p>The ultimate life creates or supports educational programs that give disadvantaged people access to knowledge and opportunities.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔥 Verse 29</span></h3>
<p>Leave behind a legacy of honesty and truth-telling, challenging lies and misinformation that harm people's ability to make good decisions.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💡 Verse 30</span></h3>
<p>The ultimate life builds wealth or resources specifically to solve problems and help others, rather than just for personal comfort.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💫 Verse 31</span></h3>
<p>Create legacy through the children you raise or influence, teaching them values of equality, compassion, and justice for all.</p>
</div>

<div class="verse">
<h3><span class="verse-number">✨ Verse 32</span></h3>
<p>The ultimate life establishes traditions and practices that bring people together across differences rather than dividing them.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌟 Verse 33</span></h3>
<p>Build legacy by preserving and sharing cultural knowledge that benefits all humanity while respecting the dignity of every culture.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🎯 Verse 34</span></h3>
<p>The ultimate life creates art, writing, or media that promotes understanding and empathy between different groups of people.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💎 Verse 35</span></h3>
<p>Leave behind a legacy of environmental protection that ensures future generations have a healthy planet to live on.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔮 Verse 36</span></h3>
<p>The ultimate life develops and shares practical life skills that help people become more self-sufficient and resilient.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌈 Verse 37</span></h3>
<p>Create legacy through advocacy and activism that protects the rights and dignity of every human being without exception.</p>
</div>

<div class="verse">
<h3><span class="verse-number">⭐ Verse 38</span></h3>
<p>The ultimate life builds businesses or organizations that operate ethically and treat all employees and customers with equal respect.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔥 Verse 39</span></h3>
<p>Build legacy by healing relationships and resolving conflicts, teaching others effective methods for peace-making and reconciliation.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💡 Verse 40</span></h3>
<p>The ultimate life creates systems for sharing resources fairly, ensuring that everyone has access to what they need for basic dignity.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💫 Verse 41</span></h3>
<p>Leave behind a legacy of scientific or technical knowledge that solves real problems and improves life for all people.</p>
</div>

<div class="verse">
<h3><span class="verse-number">✨ Verse 42</span></h3>
<p>The ultimate life establishes scholarships, grants, or programs that give equal opportunities to people regardless of their background.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌟 Verse 43</span></h3>
<p>Create legacy through community building that brings together diverse groups of people in friendship and mutual support.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🎯 Verse 44</span></h3>
<p>The ultimate life shares personal stories and experiences that help others learn, grow, and make better choices in their lives.
### Section 3: Mastery Integration (Verses 45-66)</p>
</div>

<div class="verse">
<h3><span class="verse-number">💎 Verse 45</span></h3>
<p>Master legacy creation by ensuring your positive impact multiplies through others, teaching people to teach others in expanding circles.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔮 Verse 46</span></h3>
<p>The ultimate life integrates all your values and principles into a coherent legacy that demonstrates how to live with integrity and compassion.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌈 Verse 47</span></h3>
<p>Create lasting impact by building institutions and systems that continue serving people long after your direct involvement ends.</p>
</div>

<div class="verse">
<h3><span class="verse-number">⭐ Verse 48</span></h3>
<p>The ultimate life measures legacy by how much suffering you've reduced and how much equality and justice you've advanced.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔥 Verse 49</span></h3>
<p>Master the art of inspiring others to create their own positive legacy, multiplying good influence across generations.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💡 Verse 50</span></h3>
<p>The ultimate life ensures your legacy serves people across all cultures and backgrounds, not just those similar to yourself.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💫 Verse 51</span></h3>
<p>Create enduring change by addressing root causes of human problems rather than just treating symptoms temporarily.</p>
</div>

<div class="verse">
<h3><span class="verse-number">✨ Verse 52</span></h3>
<p>The ultimate life builds legacy through character development, becoming the kind of person others want to emulate and learn from.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌟 Verse 53</span></h3>
<p>Master legacy creation by connecting your individual efforts with larger movements for human progress and equality.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🎯 Verse 54</span></h3>
<p>The ultimate life creates resources and tools that are freely available to all people, never restricting access based on ability to pay.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💎 Verse 55</span></h3>
<p>Build transformational legacy by challenging people to think beyond their own interests and consider the welfare of all humanity.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔮 Verse 56</span></h3>
<p>The ultimate life demonstrates through personal example that living with love and justice for all is both possible and fulfilling.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌈 Verse 57</span></h3>
<p>Master the balance between humility and confidence in legacy building, neither minimizing your impact nor becoming arrogant about it.</p>
</div>

<div class="verse">
<h3><span class="verse-number">⭐ Verse 58</span></h3>
<p>The ultimate life creates legacy that adapts and evolves with changing times while maintaining core values of equality and compassion.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔥 Verse 59</span></h3>
<p>Build lasting impact by developing other leaders who can continue and expand your work after you're no longer able.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💡 Verse 60</span></h3>
<p>The ultimate life ensures your legacy empowers rather than creates dependency, teaching people to solve their own problems effectively.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💫 Verse 61</span></h3>
<p>Master legacy creation by understanding that true success is measured by how much you've lifted up other people.</p>
</div>

<div class="verse">
<h3><span class="verse-number">✨ Verse 62</span></h3>
<p>The ultimate life creates knowledge and wisdom that helps people make better decisions about relationships, work, health, and life purpose.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🌟 Verse 63</span></h3>
<p>Build revolutionary legacy by proving that cooperation and mutual aid work better than competition and exploitation.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🎯 Verse 64</span></h3>
<p>The ultimate life leaves behind a model of how to live that others can follow, adapt, and improve upon for future generations.</p>
</div>

<div class="verse">
<h3><span class="verse-number">💎 Verse 65</span></h3>
<p>Master the art of creating legacy that heals divisions between people, building understanding and friendship across all differences.</p>
</div>

<div class="verse">
<h3><span class="verse-number">🔮 Verse 66</span></h3>
<p>The ultimate life completes its legacy knowing that you've contributed to humanity's evolution toward greater love, wisdom, equality, and justice for every person.
## Cross-References
- **Builds on**: All previous 65 chapters integrate into this culminating legacy vision
- **Foundation**: Chapters 1-18 (reality-based values), Chapter 5 (equality), Chapter 14 (justice)
- **Personal Development**: Chapters 31-42 excellence principles applied to serving others
- **Relationships**: Chapters 19-30 connection skills extended to entire human family
- **Financial Wisdom**: Chapters 43-54 resources used for maximum positive impact
- **Character Virtues**: Chapters 55-65 all virtues combined in service to humanity
## Implementation Notes
Legacy creation requires daily choices that prioritize the long-term welfare of all humanity over short-term personal gain. Every action, decision, and interaction becomes an opportunity to contribute to a more equal, just, and loving world.
## Validation Results
- [x] All verses pass 12-point quality check
- [x] Sacred number requirements met (66 verses)
- [x] Core values consistently reinforced
- [x] Universal applicability confirmed
- [x] Reality-based guidance provided
- [x] Equality and justice emphasized throughout</p>
</div>

<div class="chapter-footer">
<h3>🕊️ Chapter 66 Complete</h3>
<p><strong>6666 verses on character building established</strong></p>
<p><em>Next: NE66T_CHAPTER_PREVIEW</em></p>
</div>

<div class="chapter-nav-clean">
<a href="../../../index.html" class="nav-arrow">
  🏠 Home
</a>
<button class="chapter-selector" onclick="window.location.href='../index.html'">
  📖 Browse All Chapters
</button>
<a href="NE66T_CHAPTER_URL" class="nav-arrow">
  Next Chapter →
</a>
</div>

</div>
