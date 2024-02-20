---
layout: post
title: Project Setup
tags:
  - uncategorized
category: learn-django
part: 1
---

## System Requirements

Normally it's a bad idea to install dependencies directly to System-installed Python environment, as version mismatch might cause issue elsewhere. 

We'll use [Poetry](https://python-poetry.org/) as our dependency manager, as it's familiar to tools like NPM in JavaScript world. We'll additionally use [PyEnv](https://github.com/pyenv/pyenv) to manage Python version.

### Tool installations

```bash
# Install Poetry
sudo dnf install poetry zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel xz xz-devel libffi-devel findutils -y
sudo dnf groupinstall "Development Tools" -y

# Install PyEnv
curl https://pyenv.run | bash

echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.bashrc
```

### Install Python 

```bash
pyenv install 3.12
```

## Initializing a Django Project with Poetry

```bash
mkdir learn-django
cd learn-django

cat << EOF > poetry.toml
[virtualenvs]
in-project = true
EOF

cat << EOF > pyproject.toml
[tool.poetry]
name = "learn-django"
version = "0.1.0"
description = "Sample project for learning Django"
authors = [
  "Kien Nguyen <k.nguyen0125@gmail.com>"
]
readme = "README.md"
packages = [
  { include = "learn_django" }
]

[tool.poetry.dependencies]
python = "~> 3.12"
Django = "~> 5.0.2"

[build-system]
requires = ["poetry-core"]
build-backend = "poetry.core.masonry.api"
EOF

touch README.md

# Install dependencies
poetry install

# Checks if virtualenv is correct
poetry env info

# Initialize Django Environment
poetry run python -m django startproject learn_django .

# Create a Git Repository
git init

# Add a .gitignore from https://www.toptal.com/developers/gitignore
curl -sL https://www.toptal.com/developers/gitignore/api/visualstudiocode,django,node,intellij+all > .gitignore
```

## Adding pre-commit, ruff, and commitlint

```bash
poetry add pre-commit ruff --group dev

cat <<EOF >> .pre-commit-config.yaml
default_install_hook_types: [pre-commit, pre-push, commit-msg]

repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.5.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-added-large-files
  # Commitlint
  - repo: https://github.com/alessandrojcm/commitlint-pre-commit-hook
    rev: v9.11.0
    hooks:
      - id: commitlint
        stages: [commit-msg]
        additional_dependencies: ['commitlint-config-gitmoji']
  - repo: https://github.com/astral-sh/ruff-pre-commit
    # Ruff version.
    rev: v0.2.2
    hooks:
      # Run the linter.
      - id: ruff
        args: [ --fix ]
      # Run the formatter.
      - id: ruff-format
EOF

echo "module.exports = { extends: ['gitmoji'] };" > commitlint.config.js

pre-commit install
```
