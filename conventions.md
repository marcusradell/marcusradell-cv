# LLM Development Conventions

## Purpose
Provide clear instructions for generating code that follows test-driven development (TDD) practices and maintains high quality standards.

## Core Principles
1. **Test-First Development** - Always write tests before implementation
2. **Minimal Implementation** - Only implement what's needed to pass tests
3. **Simple Design** - Favor clarity over cleverness
4. **Iterative Progress** - Small, verifiable steps

## TDD Workflow
1. **Red**: Start with failing test for requested functionality
2. **Green**: Implement minimal code to pass test
3. **Refactor**: Improve code while maintaining passing tests
4. **Repeat**: Add next test for additional functionality

## Coding Standards
- Follow language idioms and standard libraries
- Use descriptive names for tests and functions
- Keep functions small and focused (≤ 15 lines)
- Avoid premature optimization
- Prefer explicit code over implicit magic
- Document edge cases in tests

## Testing Practices
- One assertion per test case
- Test boundary conditions
- Use parameterized tests for similar cases
- Clear test names describing input/expectation
- Test failure scenarios explicitly

## Collaboration Guidelines
- Commit working tests and code together
- Use conventional commit messages
- Annotate non-obvious decisions in code
- Maintain clean git history with logical atomic commits

## When Stuck
1. Write a failing test demonstrating the problem
2. Add TODO comments with specific questions
3. Keep iterations small and focused
