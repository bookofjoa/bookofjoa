#!/usr/bin/env python3
"""
The Book of Joa - Cross-Reference Tracking System
Ensures proper interconnection between chapters and principles
"""

import json
import re
from pathlib import Path

class JoaCrossReferenceTracker:
    def __init__(self):
        self.chapter_map = {
            # Foundation Reality (1-18)
            1: "This Book Is For You", 2: "The Prayer Revolution", 3: "No Priests Needed",
            4: "The Reality Principle", 5: "The Equality Law", 6: "The Harm Prevention",
            7: "Anti-Violence Absolute", 8: "Anti-Slavery Absolute", 9: "The Jealousy Killer",
            10: "The Ego Death", 11: "The Focus Power", 12: "Universal Friendship",
            13: "The Compassion Practice", 14: "The Justice Commitment", 15: "The Truth Seeking",
            16: "The Peace Making", 17: "The Hope Cultivation", 18: "The Unity Vision",
            
            # Relationship Mastery (19-30)
            19: "How to Choose Life Partners", 20: "Building Lasting Love", 21: "Handling Relationship Conflict",
            22: "When Relationships End", 23: "Family Relationships", 24: "Parenting Excellence",
            25: "Teen Guidance", 26: "Friendship Skills", 27: "Social Skills Mastery",
            28: "Dealing with Difficult People", 29: "Building Community", 30: "Leadership Without Authority",
            
            # Personal Excellence (31-42)
            31: "Physical Health", 32: "Mental Health", 33: "Emotional Intelligence",
            34: "Learning Systems", 35: "Skill Mastery", 36: "Time Management",
            37: "Goal Achievement", 38: "Habit Formation", 39: "Decision Making",
            40: "Problem Solving", 41: "Creative Thinking", 42: "Personal Growth",
            
            # Financial & Career Mastery (43-54)
            43: "Money Reality", 44: "Earning Excellence", 45: "Saving Systems",
            46: "Investment Intelligence", 47: "Debt Destruction", 48: "Budget Mastery",
            49: "Career Building", 50: "Entrepreneurship Path", 51: "Wealth Building",
            52: "Financial Protection", 53: "Teaching Money", 54: "Money and Happiness",
            
            # Wisdom Integration (55-66)
            55: "Truth and Honesty", 56: "Integrity Living", 57: "Courage Development",
            58: "Humility Practice", 59: "Patience Mastery", 60: "Forgiveness Power",
            61: "Gratitude Habit", 62: "Compassion Action", 63: "Justice Seeking",
            64: "Wisdom Integration", 65: "Character Building", 66: "Legacy Creation",
            
            # Life Navigation (67-72)
            67: "Handling Stress", 68: "Managing Crisis", 69: "Dealing with Failure",
            70: "Finding Happiness", 71: "Preparing for Death", 72: "The Infinite Journey"
        }
        
        self.core_principles = {
            'equality': [5, 8, 13, 14, 18, 19, 20, 24, 25, 29, 62, 63],
            'harm_prevention': [6, 7, 13, 20, 21, 24, 28, 32, 62, 67, 68],
            'reality_based': [1, 4, 15, 34, 39, 40, 55, 64],
            'unity_building': [12, 16, 18, 26, 27, 29, 30, 62, 72],
            'love_compassion': [2, 13, 20, 24, 26, 60, 62, 70, 72],
            'violence_free': [7, 16, 21, 28, 67, 68],
            'financial_wisdom': [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
            'relationship_skills': [19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
            'personal_growth': [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
            'character_virtues': [55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66]
        }
    
    def find_references_in_text(self, text):
        """Find chapter references in text"""
        references = []
        
        # Look for explicit chapter references
        chapter_pattern = r'Chapter\s+(\d+)'
        matches = re.findall(chapter_pattern, text, re.IGNORECASE)
        for match in matches:
            chapter_num = int(match)
            if 1 <= chapter_num <= 72:
                references.append(chapter_num)
        
        # Look for principle-based references
        for principle, chapters in self.core_principles.items():
            principle_words = principle.replace('_', ' ').split()
            if any(word in text.lower() for word in principle_words):
                references.extend(chapters)
        
        return list(set(references))  # Remove duplicates
    
    def suggest_forward_references(self, chapter_num):
        """Suggest relevant future chapters to reference"""
        suggestions = []
        
        # Foundation chapters should reference practical applications
        if 1 <= chapter_num <= 18:
            if chapter_num == 5:  # Equality Law
                suggestions.extend([19, 20, 24, 29, 62, 63])  # Relationship and justice chapters
            elif chapter_num == 6:  # Harm Prevention
                suggestions.extend([7, 21, 28, 32, 67])  # Conflict and health chapters
            elif chapter_num == 4:  # Reality Principle
                suggestions.extend([15, 34, 39, 55])  # Truth and decision chapters
        
        # Relationship chapters should reference character development
        elif 19 <= chapter_num <= 30:
            suggestions.extend([55, 56, 57, 58, 60, 62])  # Character virtue chapters
        
        # Personal chapters should reference wisdom integration
        elif 31 <= chapter_num <= 42:
            suggestions.extend([64, 65, 66, 70, 72])  # Integration and purpose chapters
        
        # Financial chapters should reference character and service
        elif 43 <= chapter_num <= 54:
            suggestions.extend([56, 62, 63, 66])  # Integrity, compassion, justice, legacy
        
        return [ch for ch in suggestions if ch > chapter_num]  # Only future chapters
    
    def suggest_backward_references(self, chapter_num):
        """Suggest relevant previous chapters to build upon"""
        suggestions = []
        
        # All chapters should reference core foundation
        if chapter_num > 18:
            suggestions.extend([1, 4, 5, 6])  # Core reality and equality principles
        
        # Relationship chapters build on foundation
        if 19 <= chapter_num <= 30:
            suggestions.extend([9, 10, 11, 12, 13])  # Jealousy, ego, focus, friendship, compassion
        
        # Personal chapters build on relationships
        elif 31 <= chapter_num <= 42:
            suggestions.extend([20, 26, 27])  # Love, friendship, social skills
        
        # Financial chapters build on personal development
        elif 43 <= chapter_num <= 54:
            suggestions.extend([35, 36, 37, 38, 39])  # Skills, time, goals, habits, decisions
        
        # Wisdom chapters build on all previous sections
        elif 55 <= chapter_num <= 66:
            suggestions.extend([20, 35, 39, 42])  # Love, mastery, decisions, growth
        
        # Navigation chapters build on wisdom
        elif 67 <= chapter_num <= 72:
            suggestions.extend([55, 56, 57, 58, 60, 62])  # All character virtues
        
        return [ch for ch in suggestions if ch < chapter_num]  # Only previous chapters
    
    def validate_chapter_connections(self, chapter_num, chapter_text):
        """Validate that chapter has appropriate connections"""
        found_refs = self.find_references_in_text(chapter_text)
        suggested_forward = self.suggest_forward_references(chapter_num)
        suggested_backward = self.suggest_backward_references(chapter_num)
        
        return {
            'chapter_num': chapter_num,
            'chapter_title': self.chapter_map.get(chapter_num, "Unknown"),
            'found_references': found_refs,
            'suggested_forward': suggested_forward,
            'suggested_backward': suggested_backward,
            'has_forward_refs': any(ref in found_refs for ref in suggested_forward),
            'has_backward_refs': any(ref in found_refs for ref in suggested_backward),
            'connection_score': len(found_refs) / max(len(suggested_forward) + len(suggested_backward), 1)
        }
    
    def generate_connection_map(self):
        """Generate complete connection map for all chapters"""
        connection_map = {}
        
        for chapter_num in range(1, 73):
            connection_map[chapter_num] = {
                'title': self.chapter_map[chapter_num],
                'forward_suggestions': self.suggest_forward_references(chapter_num),
                'backward_suggestions': self.suggest_backward_references(chapter_num),
                'core_principles': [principle for principle, chapters in self.core_principles.items() 
                                 if chapter_num in chapters]
            }
        
        return connection_map
    
    def save_connection_map(self, filepath="connection_map.json"):
        """Save connection map to file"""
        connection_map = self.generate_connection_map()
        with open(filepath, 'w') as f:
            json.dump(connection_map, f, indent=2)
        print(f"Connection map saved to {filepath}")

# Example usage
if __name__ == "__main__":
    tracker = JoaCrossReferenceTracker()
    
    # Generate and save complete connection map
    tracker.save_connection_map("../validation/connection_map.json")
    
    # Test chapter validation
    sample_text = "This builds on the Equality Law from Chapter 5 and connects to Compassion Action in Chapter 62."
    result = tracker.validate_chapter_connections(20, sample_text)
    
    print("Connection Validation Result:")
    print(f"Chapter: {result['chapter_num']} - {result['chapter_title']}")
    print(f"Found references: {result['found_references']}")
    print(f"Has forward connections: {result['has_forward_refs']}")
    print(f"Has backward connections: {result['has_backward_refs']}")
    print(f"Connection score: {result['connection_score']:.2f}")