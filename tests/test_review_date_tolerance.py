"""Tests for consistent one-day future tolerance on review dates."""
import datetime as dt
import unittest

from scripts.validate import validate_resources
from scripts.validate_papers import validate_papers


def minimal_resource(verified_at):
    return {
        'id': 'test-resource',
        'category': 'native-analysis',
        'kind': 'tool',
        'relationship': 'foundation',
        'targets': ['binary'],
        'name': 'Test Tool',
        'url': 'https://example.com/tool',
        'description_en': 'A test tool for reverse engineering.',
        'description_zh': '用于逆向工程的测试工具。',
        'evidence_url': 'https://example.com/evidence',
        'verified_at': verified_at,
        'verification': 'source-reviewed',
        'requirements': 'Python 3',
    }


def minimal_paper(verified_at):
    return {
        'id': 'paper-test',
        'title': 'Test Paper on Reverse Engineering',
        'title_zh': '逆向工程测试论文',
        'authors': ['Test Author'],
        'year': 2024,
        'date_precision': 'year',
        'date_basis': 'publication year',
        'date_basis_zh': '出版年份',
        'venue': 'Test Conference',
        'publication_status': 'preprint',
        'url': 'https://example.com/paper',
        'pdf_url': 'https://example.com/paper.pdf',
        'description_en': 'This paper describes a reverse engineering technique.',
        'description_zh': '本文描述了一种逆向工程技术。',
        'scope_limitations_en': 'Limited to synthetic data.',
        'scope_limitations_zh': '仅限于合成数据。',
        'why_fits_en': 'It provides analysis of binary protocols.',
        'why_fits_zh': '它提供了二进制协议的分析。',
        'metadata_notes': 'Reviewed the PDF.',
        'metadata_notes_zh': '审阅了PDF。',
        'kind': 'research',
        'verified_at': verified_at,
        'verification': 'source-reviewed',
        'targets': ['binary'],
        'evidence_urls': ['https://example.com/paper'],
        'runtime_tested': False,
        'arxiv_id': '2401.00001',
    }


class TestReviewDateTolerance(unittest.TestCase):
    def test_consistent_tolerance(self):
        def no_url_problem(url):
            return None

        # Current date is 2026-10-17; +1 day should pass for both, +2 should fail
        for date in ('2026-10-18', '2026-10-19'):
            res_errors = []
            validate_resources([minimal_resource(date)], res_errors)
            paper_errors = []
            validate_papers([minimal_paper(date)], paper_errors, url_check=no_url_problem)

            res_future = any('future' in e for e in res_errors)
            paper_future = any('non-future' in e or 'future' in e for e in paper_errors)

            if date == '2026-10-18':
                self.assertFalse(res_future, f'Resource unexpectedly rejected {date}: {res_errors}')
                self.assertFalse(paper_future, f'Paper unexpectedly rejected {date}: {paper_errors}')
            else:
                self.assertTrue(res_future, f'Resource should reject {date}: {res_errors}')
                self.assertTrue(paper_future, f'Paper should reject {date}: {paper_errors}')


if __name__ == '__main__':
    unittest.main()
