# Check Dependency Match Action

Check if two packages have the same dependency version

## Usage

Add the following job to the Github Action workflow

```yaml
jobs:
  check_dependency_match:
    runs-on: ubuntu-latest
    name: Check Dependency Match
    steps:
      - name: Check Dependency Match
        uses: henrysha/check-dependency-match-action@v1
        with:
          dirA: { path_to_package }
          dirB: { path_to_package }
          packages: [{ package_to_check_version_match }]
```

### Inputs

- `dirA`: path to package to check for dependency version
- `dirB`: path to package to check for dependency version
- `packages`: dependency names to check for version match. wrap into array.
