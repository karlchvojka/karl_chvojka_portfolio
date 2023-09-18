# Changelog
All notable changes to the Karl Chvojka's Website Project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.5] - 2023-09-18
### Added
### Changed
- Accordion Item:
  - AccordionItem.tsx
    - Updated component Docs
      - Added definitions for params
    - Cleaned up code styling
  - AccordionItem.test.tsx
    - Added function details
    - Matched to function standards

## [0.1.4] - 2023-09-18
### Added
### Changed
  - Updated audit issue packages
    - Tests all pass
    - Test coverage @ 100%
  - package.json
    - Updated version number

### Checklists:
#### New Project List:
- [D] Dev and Production branches exist
- [D] Readme is filled out with starting info
- [D] Script Documentation is in place
- [D] Changelog exists
  - [D] Setup is documented

#### Maintenance Checklist:
- [D] New Project Checklist is complete
- [D] New Project Checklist is in the Changlog
- [D] Frameworks/Libraries Upgraded to current version
- [D] Readme is updated with version numbers (if applicable)
- [D] Each Component is:
  - Documented properly
  - Fully tested (unit/e2e if applicable)
  - Changes are documented in changelog
  - Tests are written
  - Test coverage is @100%


## [0.1.3] - 2023-05-09

### Added
### Changed
  - Updated package.json package version number.
  - Added fixed position to Header component.
  - Added a background behind major titles on homepage.
  - Adjusted some spacing between elements and homepage titles.
  - Removed unneeded margins from the accordion wrap component.
  - Added Github icon to projects (react-icons).

## [0.1.2] - 2023-03-31

### Added
  - Proper testing to AccordionItem component
  - Proper testing to Project component
  - Proper testing of AccordionWrap module

### Changed
  - Edited Eslint, Jest, and TS configuration to work properly.
  - Created columns for Projects and Skills section on bigger sized screens.
  - Updated Portfolio Data
  - Cleaned up Resume Styles
  - Exported out Education data to a file

## [0.1.1] - 2023-03-28

### Added
- React Router Support and basic routing
- Home component (./src/components/pages/Home)
- Added pages directory (./src/components/pages/Home) to aliases
- Added font files (./src/globalAssets/fonts/)
- Added HeroImage Component (./src/components/modules/HeroImage)
- Added CornerWrap Component (./components/elements/CornerWrap)
- Added Project Component (./src/components/elements/Project)
- Added Projects Component (./src/components/llayouts/Projects)
- Added Skills Components (./src/components/layouts/skills)
- Added AccordionWrap Component (./src/components/modules/AccordionWrap)
- Added AccordionItem Component (./src/components/elements/AccordionItem)
- Added Resume Page (./src/components/Resume/Resume)
  
### Changed
- Added font support to Global Styles
- Added proper structure and styles to the Header

### Packages Installed:
- React Router v6.9.0

## [0.1.0] - 2023-03-26
- Initial version:
  - Cloned website
  - Running website test complete
  - Jest/RTL tests complete
  - Updated Changelog
  - Updated Readme
  - Updated Project info in package.json