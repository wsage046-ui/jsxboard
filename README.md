# pnpm Monorepo Example

A complete example of a monorepo using pnpm workspaces with multiple packages and applications.

## 📁 Structure

```
pnpm-monorepo-example/
├── packages/
│   ├── ui-lib/          # Shared React UI components
│   └── utils/           # Shared utility functions
├── apps/
│   ├── web/             # Web application
│   └── cli/             # CLI application
├── package.json         # Root workspace config
└── pnpm-workspace.yaml  # Workspace definition
```

## 🚀 Getting Started

1. **Install pnpm** (if not already installed):
   ```bash
   npm install -g pnpm
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run all dev scripts** in parallel:
   ```bash
   pnpm dev
   ```

4. **Build all packages**:
   ```bash
   pnpm build
   ```

## 📦 Packages

### `@my-monorepo/ui-lib`
Shared React component library with reusable UI components.

### `@my-monorepo/utils`
Utility functions shared across the monorepo.

## 🎯 Applications

### `@my-monorepo/web`
Web application that uses components from ui-lib and utils.

### `@my-monorepo/cli`
Command-line application that uses shared utilities.

## 💡 Key Features

- **Workspace Dependencies**: Apps reference packages using `workspace:*` protocol
- **Shared DevDependencies**: TypeScript and other tools installed once at root
- **Parallel Execution**: Run scripts across all packages with `pnpm -r`
- **Package Scoping**: Use `@my-monorepo/` namespace for internal packages

## 📝 Common Commands

```bash
# Install all dependencies
pnpm install

# Run dev in all packages (parallel)
pnpm -r --parallel run dev

# Build all packages (parallel)
pnpm -r --parallel run build

# Build specific package
pnpm -r --filter "@my-monorepo/utils" build

# Add dependency to specific package
pnpm add lodash --filter "@my-monorepo/utils"

# Add dev dependency to root
pnpm add --save-dev eslint -w

# Remove node_modules and lockfiles
pnpm -r exec rm -rf node_modules
rm pnpm-lock.yaml
```

## 🔗 Inter-package Dependencies

Packages reference each other using the `workspace:*` protocol in `package.json`:

```json
{
  "dependencies": {
    "@my-monorepo/ui-lib": "workspace:*",
    "@my-monorepo/utils": "workspace:*"
  }
}
```

This ensures local packages are used instead of looking for published versions.
