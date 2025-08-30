#!/usr/bin/env python3
"""
The Book of Joa - Verse Validation Framework
Ensures every verse upholds core values and meets quality standards
"""

import re
import nltk
from textstat import flesch_reading_ease, flesch_kincaid_grade

class JoaVerseValidator:
    def __init__(self):
        self.core_values = {
            'equality': ['equal', 'same', 'identical', 'regardless', 'all humans', 'every person'],
            'harm_free': ['no harm', 'prevent suffering', 'reduce pain', 'protect', 'safe'],
            'violence_free': ['peaceful', 'non-violent', 'last resort', 'minimum force'],
            'unity': ['together', 'connection', 'bridge', 'unite', 'community', 'cooperation'],
            'love': ['love', 'compassion', 'care', 'kindness', 'respect', 'dignity'],
            'reality_based': ['evidence', 'proven', 'measurable', 'observable', 'scientific']
        }
        
        self.forbidden_concepts = [
            'superior race', 'inferior gender', 'chosen people', 'natural hierarchy',
            'divine punishment', 'supernatural power', 'magical thinking', 'faith healing',
            'pay for salvation', 'donate for blessings', 'tithe for favor'
        ]
    
    def validate_word_count(self, verse):
        """Check if verse is within optimal word count (35-45 words)"""
        words = len(verse.split())
        return {
            'valid': 20 <= words <= 60,
            'optimal': 35 <= words <= 45,
            'count': words,
            'feedback': f"Word count: {words} (Optimal: 35-45, Acceptable: 20-60)"
        }
    
    def validate_core_values(self, verse):
        """Ensure verse upholds core values and avoids forbidden concepts"""
        verse_lower = verse.lower()
        
        # Check for forbidden concepts
        violations = []
        for forbidden in self.forbidden_concepts:
            if forbidden in verse_lower:
                violations.append(f"Contains forbidden concept: '{forbidden}'")
        
        # Check for core value representation
        value_scores = {}
        for value, keywords in self.core_values.items():
            score = sum(1 for keyword in keywords if keyword in verse_lower)
            value_scores[value] = score
        
        return {
            'violations': violations,
            'value_scores': value_scores,
            'valid': len(violations) == 0,
            'feedback': f"Core values represented: {value_scores}"
        }
    
    def validate_structure(self, verse):
        """Check if verse follows [PRINCIPLE + ACTION + EXAMPLE + RESULT] structure"""
        # Look for action words
        action_words = ['practice', 'do', 'create', 'build', 'write', 'track', 'measure', 'start', 'stop']
        has_action = any(word in verse.lower() for word in action_words)
        
        # Look for examples (specific details)
        has_example = any(char in verse for char in ['-', ':', 'such as', 'like', 'for example'])
        
        # Look for measurable results
        result_words = ['after', 'within', 'you will', 'results in', 'leads to', 'creates']
        has_result = any(word in verse.lower() for word in result_words)
        
        return {
            'has_action': has_action,
            'has_example': has_example,
            'has_result': has_result,
            'valid': has_action and (has_example or has_result),
            'feedback': f"Structure: Action={has_action}, Example={has_example}, Result={has_result}"
        }
    
    def validate_readability(self, verse):
        """Check if verse is readable at 10th grade level or below"""
        try:
            reading_ease = flesch_reading_ease(verse)
            grade_level = flesch_kincaid_grade(verse)
            
            return {
                'reading_ease': reading_ease,
                'grade_level': grade_level,
                'valid': grade_level <= 10.0,
                'feedback': f"Grade level: {grade_level:.1f} (Target: ≤10.0), Reading ease: {reading_ease:.1f}"
            }
        except:
            return {
                'reading_ease': 0,
                'grade_level': 15,
                'valid': False,
                'feedback': "Could not calculate readability"
            }
    
    def validate_actionability(self, verse):
        """Ensure verse provides specific, actionable instructions"""
        verse_lower = verse.lower()
        
        # Look for specific actions
        specific_actions = [
            'write', 'list', 'practice', 'track', 'measure', 'count', 'record',
            'schedule', 'plan', 'create', 'build', 'start', 'stop', 'increase', 'decrease'
        ]
        
        action_count = sum(1 for action in specific_actions if action in verse_lower)
        
        # Look for vague language to avoid
        vague_words = ['try', 'attempt', 'consider', 'think about', 'maybe', 'perhaps']
        vague_count = sum(1 for vague in vague_words if vague in verse_lower)
        
        return {
            'action_count': action_count,
            'vague_count': vague_count,
            'valid': action_count > 0 and vague_count == 0,
            'feedback': f"Specific actions: {action_count}, Vague language: {vague_count}"
        }
    
    def validate_universality(self, verse):
        """Check if verse applies universally across cultures and contexts"""
        verse_lower = verse.lower()
        
        # Cultural/regional specifics to avoid
        cultural_specifics = [
            'american', 'western', 'eastern', 'christian', 'muslim', 'hindu', 'buddhist',
            'dollar', 'euro', 'yen', 'christmas', 'ramadan', 'diwali'
        ]
        
        specifics_found = [spec for spec in cultural_specifics if spec in verse_lower]
        
        # Universal human experiences (good to include)
        universal_experiences = [
            'human', 'person', 'people', 'family', 'friend', 'work', 'health',
            'happiness', 'sadness', 'fear', 'love', 'growth', 'learning'
        ]
        
        universal_count = sum(1 for exp in universal_experiences if exp in verse_lower)
        
        return {
            'cultural_specifics': specifics_found,
            'universal_count': universal_count,
            'valid': len(specifics_found) == 0 and universal_count > 0,
            'feedback': f"Cultural specifics: {specifics_found}, Universal elements: {universal_count}"
        }
    
    def full_validation(self, verse, chapter_context=""):
        """Run complete validation on a verse"""
        results = {
            'verse': verse,
            'chapter_context': chapter_context,
            'word_count': self.validate_word_count(verse),
            'core_values': self.validate_core_values(verse),
            'structure': self.validate_structure(verse),
            'readability': self.validate_readability(verse),
            'actionability': self.validate_actionability(verse),
            'universality': self.validate_universality(verse)
        }
        
        # Overall validity
        all_checks = [
            results['word_count']['valid'],
            results['core_values']['valid'],
            results['structure']['valid'],
            results['readability']['valid'],
            results['actionability']['valid'],
            results['universality']['valid']
        ]
        
        results['overall_valid'] = all(all_checks)
        results['passed_checks'] = sum(all_checks)
        results['total_checks'] = len(all_checks)
        
        return results
    
    def generate_report(self, validation_results):
        """Generate detailed validation report"""
        print("=" * 80)
        print("THE BOOK OF JOA - VERSE VALIDATION REPORT")
        print("=" * 80)
        print(f"Verse: {validation_results['verse'][:100]}...")
        print(f"Chapter Context: {validation_results['chapter_context']}")
        print(f"Overall Valid: {'✓' if validation_results['overall_valid'] else '✗'}")
        print(f"Checks Passed: {validation_results['passed_checks']}/{validation_results['total_checks']}")
        print()
        
        checks = ['word_count', 'core_values', 'structure', 'readability', 'actionability', 'universality']
        for check in checks:
            result = validation_results[check]
            status = "✓" if result['valid'] else "✗"
            print(f"{status} {check.upper()}: {result['feedback']}")
        
        if validation_results['core_values']['violations']:
            print("\n⚠️  CORE VALUE VIOLATIONS:")
            for violation in validation_results['core_values']['violations']:
                print(f"   - {violation}")
        
        print("=" * 80)

# Example usage and testing
if __name__ == "__main__":
    validator = JoaVerseValidator()
    
    # Test verse that should pass
    good_verse = "Practice daily gratitude by writing three specific things you appreciate each morning - your health, relationships, or opportunities. Track your mood levels weekly using a 1-10 scale. After 30 days, you'll notice increased happiness as your brain rewires toward positivity."
    
    # Test verse that should fail
    bad_verse = "Christians are superior to other religions and should pray for God's blessings."
    
    print("TESTING GOOD VERSE:")
    results = validator.full_validation(good_verse, "Chapter 1: Foundation")
    validator.generate_report(results)
    
    print("\n\nTESTING BAD VERSE:")
    results = validator.full_validation(bad_verse, "Chapter 1: Foundation")
    validator.generate_report(results)