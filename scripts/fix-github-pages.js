const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');

// Rename _next to next (GitHub Pages doesn't serve _ directories well)
const nextDir = path.join(outDir, '_next');
const renamedNextDir = path.join(outDir, 'next');

if (fs.existsSync(nextDir)) {
  fs.renameSync(nextDir, renamedNextDir);
  console.log('✓ Renamed _next to next');
}

// Function to recursively update all HTML files
function updateHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      updateHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      // Replace all references to /_next with /next
      content = content.replace(/\/_next\//g, '/next/');
      fs.writeFileSync(filePath, content);
      console.log(`✓ Updated ${file}`);
    }
  });
}

// Update all HTML files
updateHtmlFiles(outDir);

// Update CSS files to fix any internal references
function updateCssFiles(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir, { recursive: true });
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile() && file.endsWith('.css')) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/\/_next\//g, '/next/');
      fs.writeFileSync(filePath, content);
      console.log(`✓ Updated CSS ${file}`);
    }
  });
}

updateCssFiles(renamedNextDir);

console.log('\n✅ GitHub Pages build fixed! The _next directory issue is resolved.\n');

