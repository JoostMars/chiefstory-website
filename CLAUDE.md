# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A WordPress installation configured to use **SQLite instead of MySQL** for local development. The SQLite drop-in (`wp-content/db.php`) and mu-plugin (`wp-content/mu-plugins/sqlite-database-integration/`) replace WordPress's default MySQL database layer entirely — no MySQL server is required.

The SQLite database file lives at `wp-content/database/.ht.sqlite` (created on first run).

## Running locally

WordPress requires a PHP web server. Common options on macOS:

```bash
# PHP built-in server (from repo root)
php -S localhost:8080

# Laravel Valet (if installed)
valet link && valet open

# MAMP / MAMP Pro: point document root to this directory
```

First-time setup: after starting the server, visit `http://localhost:8080/wp-admin/install.php` to complete WordPress installation. Because SQLite is used, no database credentials need to be configured.

## wp-config.php

The `wp-config.php` currently has placeholder values for `DB_NAME`, `DB_USER`, `DB_PASSWORD` — these are ignored when the SQLite drop-in is active. To enable debug output during development:

```php
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );   // logs to wp-content/debug.log
define( 'WP_DEBUG_DISPLAY', false );
```

## Architecture

- **Database layer**: `wp-content/db.php` is the SQLite drop-in that intercepts all database calls. It is loaded by WordPress before any other code. The mu-plugin at `wp-content/mu-plugins/sqlite-database-integration/` provides the admin UI, health checks, and the actual SQLite translation layer.
- **Themes**: Currently only default WordPress themes (Twenty Twenty-Five is the active one). Custom themes go in `wp-content/themes/`.
- **Plugins**: Only Akismet is present. Custom plugins go in `wp-content/plugins/`.
- **Must-use plugins** (`wp-content/mu-plugins/`): loaded automatically before regular plugins; do not appear in the Plugins admin screen.

## WP-CLI

If WP-CLI is available, it can be used for common tasks:

```bash
wp core install --url=localhost:8080 --title="Chief Story" --admin_user=admin --admin_email=you@example.com
wp plugin list
wp theme list
wp cache flush
```
