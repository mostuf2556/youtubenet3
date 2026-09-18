import fs from 'fs';
import path from 'path';

/**
 * Script to update README.md repository owner / user name in all links & badge URLs.
 * Usage: node scripts/update-readme.mjs [username]
 */
const targetUser = process.argv[2] || process.env.GITHUB_REPOSITORY_OWNER || process.env.GITHUB_USER || 'mostuf25563';
const readmePath = path.resolve(process.cwd(), 'README.md');

if (!fs.existsSync(readmePath)) {
  console.error('❌ README.md file not found at:', readmePath);
  process.exit(1);
}

let content = fs.readFileSync(readmePath, 'utf8');

// Replace previous username patterns (e.g. mostuf25561) with targetUser
const oldUserRegex = /mostuf\d+/g;
let updatedContent = content.replace(oldUserRegex, targetUser);

// Ensure all repository links (badges, raw scripts, releases, and GitHub Pages) point to targetUser
updatedContent = updatedContent
  .replace(/(https:\/\/github\.com\/)[^/]+(\/youtubenet3)/g, `$1${targetUser}$2`)
  .replace(/(https:\/\/raw\.githubusercontent\.com\/)[^/]+(\/youtubenet3)/g, `$1${targetUser}$2`)
  .replace(/https:\/\/[^/.]+\.github\.io\/youtubenet3/g, `https://${targetUser}.github.io/youtubenet3`);

fs.writeFileSync(readmePath, updatedContent, 'utf8');
console.log(`✅ README.md successfully updated with repository username: "${targetUser}"`);
