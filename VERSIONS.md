# U-OX Version Management

## Current Versions

### Active Release
- **Latest Stable:** v1.0.0
- **Current Development:** v0.1.0
- **LTS Version:** None (planned for future)

## Version History

### v1.0.0 - AgriWeave Nexus Infrastructure Release
- **Release Date:** 2026-07-10
- **Status:** Stable
- **Location:** `AgriWeave_Nexus_Infrastructure_Release/`
- **Features:**
  - Core infrastructure components
  - Extension framework
  - API gateway
  - Resource manager

### v0.1.0 - U-OX Prototype
- **Release Date:** 2026-07-12
- **Status:** Development
- **Features:**
  - Initial prototype
  - Project structure
  - Documentation framework
  - Basic extension system

## Version Tracking

| Version | Release Date | Status | Node Support | Maintenance Until |
|---------|---|---|---|---|
| 0.1.0 | 2026-07-12 | Active Development | 16+ | TBD |
| 1.0.0 | 2026-07-10 | Stable | 16+ | 2028-07-10 |

## Versioning Policy

This project follows [Semantic Versioning](https://semver.org/):
- **MAJOR** — Breaking changes
- **MINOR** — New features (backward compatible)
- **PATCH** — Bug fixes

## Version Files Location

Version-specific files and releases are stored in:
```
versions/
├── v1.0.0/
├── v0.1.0/
└── README.md
```

## Accessing Different Versions

### By Branch
```bash
git checkout master        # Latest stable (v1.0.0)
git checkout develop       # Development (v0.1.0)
```

### By Tag
```bash
git checkout v1.0.0        # Specific release
git checkout v0.1.0        # Development snapshot
```

### By Release
See GitHub Releases: https://github.com/Martialzii/u-ox/releases

## Next Release Planning

- **v0.2.0** — Q3 2026 (planned features TBD)
- **v1.1.0** — Q4 2026 (planned features TBD)
- **v2.0.0** — 2027 (potential breaking changes)

## Version Compatibility

### Extension Compatibility
- Extensions built for v1.0.0 should work with v0.1.0+ (with testing)
- Breaking changes will be clearly documented in CHANGELOG.md

### API Stability
- v1.0.0+ API is considered stable
- v0.x.x API subject to change

## Deprecation Policy

- Features will be deprecated for at least one major version
- Deprecation warnings will be logged
- Timeline provided in release notes

---

**Last Updated:** 2026-07-12
