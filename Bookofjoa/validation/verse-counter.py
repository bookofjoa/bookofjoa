#!/usr/bin/env python3
"""
The Book of Joa - Verse Counter and Validation System
Ensures sacred mathematical structure is maintained: 3,636 total verses across 72 chapters
"""

import os
import re
from pathlib import Path

class JoaVerseCounter:
    def __init__(self):
        self.target_total = 3636  # Sacred number (3+6+3+6=18→9)
        self.target_chapters = 72  # Sacred number (7+2=9)
        self.section_targets = {
            'foundation': {'chapters': 18, 'verses_per': 36, 'total': 648},
            'relationships': {'chapters': 12, 'verses_per': 50, 'total': 600},
            'personal': {'chapters': 12, 'verses_per': 50, 'total': 600},
            'financial': {'chapters': 12, 'verses_per': 50, 'total': 600},
            'wisdom': {'chapters': 12, 'verses_per': 66, 'total': 792},
            'navigation': {'chapters': 6, 'verses_per': 66, 'total': 396}
        }
    
    def count_verses_in_file(self, filepath):
        """Count verses in a chapter file"""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Count numbered verses (## Verse 1, ## Verse 2, etc.)
            verse_pattern = r'^## Verse \d+'
            verses = re.findall(verse_pattern, content, re.MULTILINE)
            return len(verses)
        except FileNotFoundError:
            return 0
    
    def validate_sacred_numbers(self, number):
        """Ensure number reduces to 3, 6, or 9"""
        while number >= 10:
            number = sum(int(digit) for digit in str(number))
        return number in [3, 6, 9]
    
    def check_chapter_structure(self, chapter_dir):
        """Validate individual chapter meets requirements"""
        results = {}
        
        for section, targets in self.section_targets.items():
            section_path = Path(chapter_dir) / section
            if section_path.exists():
                chapter_files = list(section_path.glob('chapter-*.md'))
                results[section] = {
                    'expected_chapters': targets['chapters'],
                    'found_chapters': len(chapter_files),
                    'verses_per_chapter': targets['verses_per'],
                    'total_verses': 0,
                    'chapters': []
                }
                
                for chapter_file in sorted(chapter_files):
                    verse_count = self.count_verses_in_file(chapter_file)
                    results[section]['chapters'].append({
                        'file': chapter_file.name,
                        'verses': verse_count,
                        'target': targets['verses_per'],
                        'valid': verse_count == targets['verses_per']
                    })
                    results[section]['total_verses'] += verse_count
        
        return results
    
    def generate_report(self, results):
        """Generate validation report"""
        print("=" * 60)
        print("THE BOOK OF JOA - SACRED STRUCTURE VALIDATION")
        print("=" * 60)
        
        total_verses = 0
        total_chapters = 0
        
        for section, data in results.items():
            print(f"\n{section.upper()} SECTION:")
            print(f"  Expected Chapters: {data['expected_chapters']}")
            print(f"  Found Chapters: {data['found_chapters']}")
            print(f"  Total Verses: {data['total_verses']}")
            print(f"  Target Verses: {self.section_targets[section]['total']}")
            
            total_verses += data['total_verses']
            total_chapters += data['found_chapters']
            
            for chapter in data['chapters']:
                status = "✓" if chapter['valid'] else "✗"
                print(f"    {status} {chapter['file']}: {chapter['verses']}/{chapter['target']} verses")
        
        print(f"\n" + "=" * 60)
        print(f"OVERALL TOTALS:")
        print(f"  Total Chapters: {total_chapters}/{self.target_chapters}")
        print(f"  Total Verses: {total_verses}/{self.target_total}")
        print(f"  Sacred Number Check: {self.validate_sacred_numbers(total_verses)}")
        print(f"  Structure Complete: {total_verses == self.target_total and total_chapters == self.target_chapters}")
        print("=" * 60)

if __name__ == "__main__":
    counter = JoaVerseCounter()
    results = counter.check_chapter_structure("chapters")
    counter.generate_report(results)